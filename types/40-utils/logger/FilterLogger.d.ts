// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { ILogger, ISubLogger } from './ILogger';
interface IFilterLoggerOptions {
    predicate: (options: { type: keyof ILogger; message: any; index: number }) => boolean;
    logger: ILogger;
}
export declare class FilterLogger implements ILogger {
    private readonly options;
    private index;
    constructor(options: IFilterLoggerOptions);
    info(message?: any, ...optionalParams: Array<any>): this;
    warn(warning?: any, ...optionalParams: Array<any>): this;
    error(error?: Error | any, ...optionalParams: Array<any>): this;
    trace(...data: Array<any>): this;
    group(groupName?: string, ...optionalParams: Array<any>): ISubLogger;
    groupCollapsed(groupName?: string, ...optionalParams: Array<any>): ISubLogger;
}
export {};
/**
 * TODO: ALso filter on group and groupCollapsed
 */
