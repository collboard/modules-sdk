import chalk from 'chalk';
import { spawn } from 'child_process';
import { crashWhenNotCalled } from './crashWhenNotCalled';
import { execCommandNormalizeOptions } from './execCommandNormalizeOptions';
import { IExecCommandOptions } from './IExecCommandOptions';

export function execCommand(options: IExecCommandOptions): Promise<void> {
    return new Promise((resolve, reject) => {
        let { command, args, cwd, crashOnError } = execCommandNormalizeOptions(options);

        if (/^win/.test(process.platform) && ['npm', 'npx'].includes(command)) {
            command = `${command}.cmd`;
        }

        console.info(chalk.yellow(cwd) + ' ' + chalk.green(command) + ' ' + chalk.blueBright(args.join(' ')));

        try {
            const commandProcess = spawn(command, args, { cwd });

            const { callback, result } = crashWhenNotCalled(100);
            commandProcess.stdout.on('spawn', () => {
                callback();
            });

            result.catch(() => {
                reject(new Error(`Command ${command} was not spawned in 100ms`));
            });

            commandProcess.on('message', (message) => {
                console.info({ message });
            });

            commandProcess.stdout.on('data', (stdout) => {
                console.info(stdout.toString());
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

            const finishWithCode = (code: number) => {
                if (code !== 0) {
                    reject(new Error(`Command "${command}" exited with code ${code}`));
                } else {
                    resolve();
                }
            };

            commandProcess.on('close', finishWithCode);
            commandProcess.on('exit', finishWithCode);
            commandProcess.on('disconnect', () => {
                reject(new Error(`Command "${command}" disconnected`));
            });
            commandProcess.on('error', (error) => {
                reject(new Error(`Command "${command}" failed: \n${error.message}`));
            });
        } catch (error) {
            reject(error);
        }
    });
}
