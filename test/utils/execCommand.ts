import chalk from 'chalk';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function execCommand(
    options:
        | {
              command: string;
              cwd?: string;
              crashOnError?: boolean;
          }
        | string,
) {
    let command: string;
    let cwd: string;
    let crashOnError: boolean;

    if (typeof options === 'string') {
        command = options;
        cwd = process.cwd();
        crashOnError = true;
    } else {
        command = options.command;
        cwd = options.cwd ?? process.cwd();
        crashOnError = options.crashOnError ?? true;
    }

    console.info(chalk.yellow(cwd) + ' ' + chalk.blue(command));

    try {
        const { stdout, stderr } = await execAsync(command, { cwd });

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
}: {
    commands: string[];
    cwd: string;
    crashOnError?: boolean;
}) {
    for (const command of commands) {
        await execCommand({ command, cwd, crashOnError });
    }
}
