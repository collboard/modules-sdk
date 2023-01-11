// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IDestroyable } from 'destroyable';
import { ITimeoutOptions } from './ITimeoutOptions';
/**
 * TODO: [🔅] Put all %c styled console logs styles into one config place
 */
export declare const LOADING_CONSOLE_WARN_STYLE =
    'background: #ffff22; color: black; font-size: 1.1em; font-weight: bold; padding: 5px; border-radius: 3px;';
/**
 * Creates warning if the returned object is not destroyed in certain time
 *
 * collboard-modules-sdk
 */
export declare function createTimeout(options: ITimeoutOptions): IDestroyable;
/**
 * TODO: Handle here negative "duration" value
 */
