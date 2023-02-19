// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/**
 * Converts Blob to File
 * This is usefull for:
 *   - Preserving Files that actually has a filename
 *   - Autocomplete the filename for blobs according to its mimetype
 *
 *
 * @collboard-modules-sdk
 */
export declare function blobToFile(blob: File | Blob): Promise<File>;
