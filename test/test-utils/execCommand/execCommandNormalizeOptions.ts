import { IExecCommandOptions, IExecCommandOptionsAdvanced } from './IExecCommandOptions';

export function execCommandNormalizeOptions(
    options: IExecCommandOptions,
): Pick<IExecCommandOptionsAdvanced, 'command' | 'args' | 'cwd' | 'crashOnError'> {
    let command: string;
    let cwd: string;
    let crashOnError: boolean;
    let args: string[] = [];

    if (typeof options === 'string') {
        command = options;
        cwd = process.cwd();
        crashOnError = true;
    } else {
        /*
        TODO:
        if ((options as any).commands !== undefined) {
            commands = (options as any).commands;
        } else {
            commands = [(options as any).command];
        }
        */

        command = options.command;
        cwd = options.cwd ?? process.cwd();
        crashOnError = options.crashOnError ?? true;
    }

    // TODO: /(-[a-zA-Z0-9-]+\s+[^\s]*)|[^\s]*/g
    const _ = Array.from(command.matchAll(/(".*")|([^\s]*)/g))
        .map(([match]) => match)
        .filter((arg) => arg !== '');

    if (_.length > 1) {
        [command, ...args] = _;
    }

    if ((options as any).args) {
        args = [...args, ...(options as any).args];
    }

    for (const arg of args) {
    }

    return { command, args, cwd, crashOnError };
}

// TODO: This should show type error> execCommandNormalizeOptions({ command: '', commands: [''] });
