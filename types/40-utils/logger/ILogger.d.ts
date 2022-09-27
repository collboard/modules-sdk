// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
export interface ILogger extends ILoggerCore {
    group(groupName?: string, ...optionalParams: Array<any>): ISubLogger;
    groupCollapsed(groupName?: string, ...optionalParams: Array<any>): ISubLogger;
}
export interface ISubLogger extends ILoggerCore {
    end(): void;
}
interface ILoggerCore {
    info(message?: any, ...optionalParams: Array<any>): this;
    warn(warning?: any, ...optionalParams: Array<any>): this;
    error(error?: Error | any, ...optionalParams: Array<any>): this;
    trace(...data: Array<any>): this;
}
export {};
/**
 * TODO: [🐋]  Make support for table in ILogger
 * TODO: ILoggerCore extends IDestroyable
 * TODO: [🎋] When logger updated and can be subloggered, update theese logging in the code
 */
