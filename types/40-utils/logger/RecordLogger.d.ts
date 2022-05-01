// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { ILogger, ISubLogger } from './ILogger';
interface IRecordLoggerLog {
    type: 'INFO' | 'WARN' | 'ERROR' | 'TRACE';
    message: any;
    optionalParams: any[];
}
export declare class RecordLogger implements ILogger, ISubLogger {
    private _logs;
    get logsStructured(): IRecordLoggerLog[];
    get logs(): string;
    info(message?: any, ...optionalParams: any[]): this;
    warn(message?: any, ...optionalParams: any[]): this;
    error(message?: any, ...optionalParams: any[]): this;
    trace(...data: any[]): this;
    end(): void;
    group(groupName?: string, ...optionalParams: any[]): ISubLogger;
    groupCollapsed(groupName?: string, ...optionalParams: any[]): ISubLogger;
}
export {};
/**
 * TODO: Maybe rename logs to logsText and logsStructured to logs
 * TODO: Better support for the groups
 */
