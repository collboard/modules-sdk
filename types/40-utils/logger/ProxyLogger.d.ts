// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { ILogger } from './ILogger';
export declare class ProxyLogger implements ILogger {
    private readonly loggers;
    constructor(...loggers: ILogger[]);
    info(message?: any, ...optionalParams: any[]): void;
    warn(warning?: any, ...optionalParams: any[]): void;
    error(error?: Error | any, ...optionalParams: any[]): void;
}
