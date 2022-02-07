// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import * as SentryBrowser from '@sentry/browser';
import * as SentryNode from '@sentry/node';
import { ILogger, ISubLogger } from './ILogger';
export declare class SentryLogger implements ILogger, ISubLogger {
    private readonly sentry;
    private readonly loggers;
    constructor(sentry: typeof SentryBrowser | typeof SentryNode);
    info(message?: any, ...optionalParams: any[]): this;
    warn(warning?: any, ...optionalParams: any[]): this;
    error(error?: Error | any, ...optionalParams: any[]): this;
    trace(...data: any[]): this;
    end(): void;
    group(groupName?: string, ...optionalParams: any[]): ISubLogger;
    groupCollapsed(groupName?: string, ...optionalParams: any[]): ISubLogger;
}
/**
 * TODO: !! Log environment / business
 * TODO: Process optionalParams
 * TODO: Also log { level: Sentry.Severity.Info }
 */