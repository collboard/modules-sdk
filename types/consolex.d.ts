// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { ProxyLogger } from './40-utils/logger/ProxyLogger';
import { SwitchLogger } from './40-utils/logger/SwitchLogger';
/**
 * TODO: [🍃] Anotate
 */
export declare const consolexBase: ProxyLogger;
/**
 * TODO: [🍃] Anotate
 * TODO: [🍃] Better name than consolex
 */
export declare const consolex: SwitchLogger;
/**
 * Disables logging of Collboard internal messages
 * It is useful when you develop something build on top of Collboard and you want to avoid confusion which messages are from Collboard and which are from the developed app
 *
 * Note: Calling this function is idempotent - it will do nothing if called second time
 *
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
