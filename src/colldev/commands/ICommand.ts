import commander from 'commander';
import { IDestroyable } from 'destroyable';
import { IColldevOptions } from '../IColldevOptions';

export interface ICommand<TFlags extends IColldevOptions, TStatus> extends IDestroyable {
    init(program: commander.Command): commander.Command;
    run(path: string, flags: TFlags): Promise<void>;
    render(flags: TFlags): JSX.Element;
    status(): TStatus;
}
