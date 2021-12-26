import chalk from 'chalk';
import { spawn } from 'child_process';
import { forTime } from 'waitasecond';
import { execCommandNormalizeOptions } from './execCommandNormalizeOptions';
import { IExecCommandOptions } from './IExecCommandOptions';

export function execCommand(options: IExecCommandOptions): Promise<void> {
    return new Promise((resolve, reject) => {
        let { command, humanReadableCommand, args, cwd, crashOnError, timeout } = execCommandNormalizeOptions(options);

        if (timeout !== Infinity) {
            // TODO: In waitasecond forTime(Infinity) should be equivalent to forEver()
            forTime(timeout).then(() => {
                if (crashOnError) {
                    reject(new Error(`Command "${humanReadableCommand}" exceeded time limit of ${timeout}ms`));
                } else {
                    console.warn(
                        `Command "${humanReadableCommand}" exceeded time limit of ${timeout}ms but continues running`,
                    );
                    resolve();
                }
            });
        }

        if (/^win/.test(process.platform) && ['npm', 'npx'].includes(command)) {
            command = `${command}.cmd`;
        }

        console.info(chalk.yellow(cwd) + ' ' + chalk.green(command) + ' ' + chalk.blueBright(args.join(' ')));

        try {
            // console.log(`spawn(${JSON.stringify(command)}, ${JSON.stringify(args)},  ${JSON.stringify({ cwd })})`);
            const commandProcess = spawn(command, args, { cwd });

            commandProcess.on('message', (message) => {
                console.info({ message });
            });

            const output: string[] = [];

            commandProcess.stdout.on('data', (stdout) => {
                output.push(stdout.toString());
                console.info(stdout.toString());
            });

            commandProcess.stderr.on('data', (stderr) => {
                output.push(stderr.toString());
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
                    if (crashOnError) {
                        reject(
                            new Error(
                                output.join('\n').trim() ||
                                    `Command "${humanReadableCommand}" exited with code ${code}`,
                            ),
                        );
                    } else {
                        console.warn(`Command "${humanReadableCommand}" exited with code ${code}`);
                        resolve();
                    }
                } else {
                    resolve();
                }
            };

            commandProcess.on('close', finishWithCode);
            commandProcess.on('exit', finishWithCode);
            commandProcess.on('disconnect', () => {
                // Note: Unexpected disconnection should always result in rejection
                reject(new Error(`Command "${humanReadableCommand}" disconnected`));
            });
            commandProcess.on('error', (error) => {
                if (crashOnError) {
                    reject(new Error(`Command "${humanReadableCommand}" failed: \n${error.message}`));
                } else {
                    console.warn(error);
                    resolve();
                }
            });
        } catch (error) {
            // Note: Unexpected error in sync code should always result in rejection
            reject(error);
        }
    });
}
