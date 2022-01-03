import commander from 'commander';
import { IDestroyable } from 'destroyable';
import { IColldevOptions } from '../IColldevOptions';

export interface ICommand<TFlags extends IColldevOptions, TStatus> extends IDestroyable {
    name: string;
    init(program: commander.Command): commander.Command;
    run(path: string, flags: TFlags): Promise<string>;
    render(flags: TFlags): JSX.Element;
    status(): TStatus;
}
