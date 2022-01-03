import commander from 'commander';
import { IDestroyable } from 'destroyable';
import { string_folder_path } from '../../../types';
import { IColldevOptions } from '../IColldevOptions';

export interface ICommand<TFlags extends IColldevOptions, TStatus> extends IDestroyable {
    name: string;
    init(program: commander.Command): commander.Command;
    run(workingDir: string_folder_path, flags: TFlags): Promise<string>;
    render(flags: TFlags): JSX.Element;
    status(): TStatus;
}
