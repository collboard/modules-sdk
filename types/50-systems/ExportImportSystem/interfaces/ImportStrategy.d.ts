// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/**
 * Strategy for importing external data
 *
 * @collboard-modules-sdk
 */
export declare enum ImportStrategy {
    /**
     * Importing data will be linked
     */
    Link = 'LINK',
    /**
     * Importing data will be inlined
     */
    Materialize = 'MATERIALIZE',
}
/**
 * TODO: DRY with old server one as a global pattern throygh a Collboard
 */
