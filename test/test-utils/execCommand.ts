import chalk from 'chalk';
import { exec } from 'child_process';
import { promisify } from 'util';
import { forTime } from 'waitasecond';

const execAsync = promisify(exec);

export async function execCommand(
    options:
        | {
              command: string;
              cwd?: string;
              crashOnError?: boolean;
              timeout?: number;
          }
        | string,
) {
    let command: string;
    let cwd: string;
    let crashOnError: boolean;
    let timeout: number;

    if (typeof options === 'string') {
        command = options;
        cwd = process.cwd();
        crashOnError = true;
        timeout = 5000;
    } else {
        command = options.command;
        cwd = options.cwd ?? process.cwd();
        crashOnError = options.crashOnError ?? true;
        timeout = options.timeout ?? 5000;
    }

    console.info(chalk.yellow(cwd) + ' ' + chalk.blue(command));

    try {
        const { stdout, stderr } = await Promise.race([
            execAsync(command, { cwd, maxBuffer: 1024 * 1024 * 3 /* mb */ }),
            forTime(timeout).then(() => {
                throw new Error(`Exceeded timeout of ${timeout}ms for a command "${command}".`);
            }),
        ]);

        console.info(stdout);

        if (stderr) {
            if (crashOnError) {
                throw new Error(stderr);
            } else {
                console.warn(stderr);
            }
        }
    } catch (error) {
        console.info(error.stdout);

        if (crashOnError) {
            throw error;
        }
    }
}

export async function execCommands({
    commands,
    cwd,
    crashOnError,
    timeout,
}: {
    commands: string[];
    cwd: string;
    crashOnError?: boolean;
    timeout?: number;
}) {
    for (const command of commands) {
        await execCommand({ command, cwd, crashOnError, timeout });
    }
}
