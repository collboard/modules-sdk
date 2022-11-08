// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { ISubLogger } from './ILogger';
import { RecordLogger } from './RecordLogger';
export declare class ConsoleGroupSubLogger extends RecordLogger implements ISubLogger {
    private readonly console;
    private readonly collapsed;
    private readonly groupName?;
    private readonly optionalParams;
    constructor(console: Console, collapsed: boolean, groupName?: string | undefined, ...optionalParams: Array<any>);
    appear(): this;
    end(): void;
    private output;
}
/**
 * TODO: In constructor optionalParams probbably does not make sense BUT instead of it configure timeout, style,...
 */
