import chalk from 'chalk';
import { spawn } from 'child_process';
import { execCommandNormalizeOptions } from './execCommandNormalizeOptions';
import { IExecCommandOptions } from './IExecCommandOptions';

export function execCommand(options: IExecCommandOptions): Promise<void> {
    return new Promise((resolve, reject) => {
        let { command, args, cwd, crashOnError } = execCommandNormalizeOptions(options);

        if (/^win/.test(process.platform) && ['npm', 'npx'].includes(command)) {
            command = `${command}.cmd`;
        }

        //console.info(chalk.yellow(cwd) + ' ' + chalk.blue(command + ' ' + args.join(' ')));
        console.info(chalk.yellow(cwd) + ' ' + chalk.green(command) + ' ' + chalk.blueBright(args.join(' ')));

        // Working: const commandProcess = await spawn('npm.cmd', ['run', 'test'], { cwd });
        // Working: const commandProcess = await spawn('node', [join(__dirname, 'runner.js'), 'npm run test'], { cwd });

        const commandProcess = spawn(command, args, { cwd });

        commandProcess.stdout.on('data', (stdout) => {
            console.log(stdout.toString());
        });

        commandProcess.stderr.on('data', (stderr) => {
            if (stderr.toString().trim()) {
                if (crashOnError) {
                    reject(new Error(stderr.toString()));
                } else {
                    console.warn(stderr.toString());
                }
            }
        });

        commandProcess.on('close', (code) => {
            if (code !== 0) {
                reject(new Error(`Command "${command}" exited with code ${code}`));
            } else {
                resolve();
            }
        });
    });
}
