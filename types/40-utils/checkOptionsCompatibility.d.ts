// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/**
 * Throws error if the passed options are incompatible with the passed schema.
 *
 * @param options all options
 * @param compatibleKeys list of compatible keys
 * @returns
 */
export declare function checkOptionsCompatibility<T, TCompatibleKeys extends keyof T>(
    options: T,
    compatibleKeys: TCompatibleKeys[],
): Pick<T, TCompatibleKeys>;
