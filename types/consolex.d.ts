// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { SwitchLogger } from './40-utils/logger/SwitchLogger';
export declare const consolex: SwitchLogger;
/**
 * @singleton
 */
export declare function disableLogging(): void;
/**
 * TODO: LoggingSystem
 * TODO: Make is as non-singleton
 * TODO: Move it to some other file
 * TODO: Better name than consolex like clientConsole
 * TODO: Better management of logging - disableLogging is a bit ugly - make some manages / system to manage logging
 */
