// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { ILogger, ISubLogger } from './ILogger';
export interface IRecordLoggerLog {
    type: 'INFO' | 'WARN' | 'ERROR' | 'TRACE';
    message: any;
    optionalParams: Array<any>;
}
export declare class RecordLogger implements ILogger, ISubLogger {
    private _logs;
    private _isEnded;
    get logsStructured(): Array<IRecordLoggerLog>;
    get logs(): string;
    info(message?: any, ...optionalParams: Array<any>): this;
    warn(message?: any, ...optionalParams: Array<any>): this;
    error(message?: any, ...optionalParams: Array<any>): this;
    trace(...data: Array<any>): this;
    get isEnded(): boolean;
    appear(): this;
    end(): void;
    group(groupName?: string, ...optionalParams: Array<any>): ISubLogger;
    groupCollapsed(groupName?: string, ...optionalParams: Array<any>): ISubLogger;
}
/**
 * TODO: Probably rename logs to logsText and logsStructured to logs
 * TODO: Better support for the groups
 */
