// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { ConsolePrefixLogger } from './ConsolePrefixLogger';
import { ILogger, ISubLogger } from './ILogger';
export declare class ConsoleLogger implements ILogger {
    private readonly console;
    static readonly console: ConsoleLogger;
    constructor(console: Console);
    info(message?: any, ...optionalParams: any[]): this;
    warn(warning?: any, ...optionalParams: any[]): this;
    error(error?: Error | any, ...optionalParams: any[]): this;
    trace(...data: any[]): this;
    group(groupName?: string, ...optionalParams: any[]): ISubLogger;
    groupCollapsed(groupName?: string, ...optionalParams: any[]): ISubLogger;
    groupPrefixed(groupName?: string, ...optionalParams: any[]): ConsolePrefixLogger;
}
/**
 * TODO: Maybe split into multiple files
 * TODO: Nicer begin / end messages
 * TODO: Better Graphics of the tree:
 *       > console.log('%c Oh my heavens! ', 'border-left: 30px solid red');console.log('%c Oh my heavens! ', 'border-left: 30px solid red');
 * TODO: Multiple layers
 *       > const gg = g.groupPrefixed();
 */
