// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { BehaviorSubject } from 'rxjs';
/**
 * @deprecated [🍿] Do not use enums but object as const OR 'LITERAL VALUES' instead
 */
export declare enum ColorScheme {
    Dark = 'DARK',
    Light = 'LIGHT',
}
/**
 *
 * Note: Prefer to use value provided by styleSystem.colorScheme
 */
export declare function watchPreferedColorScheme(userPickedColorScheme?: ColorScheme): BehaviorSubject<ColorScheme>;
export declare function systemColorScheme(): ColorScheme;
/**
 * TODO: 😎 When dark mode activated change word "whiteboard" to "blackboard"
 */
