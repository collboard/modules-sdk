// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
export declare function nullsafeify<TArg, TResult>(fn: (arg: TArg) => TResult): (arg: TArg | null) => TResult | null;
/**
 * TODO: Can we make resulting function null generic-dependent?
 *       If user pass null it will return null and it will be overloaded to null
 */
