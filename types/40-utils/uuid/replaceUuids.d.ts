// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/**
 * Replaces all UUID strings in the object but preserve its identity
 * - Same UUIDs will be chnaged into another BUT same UUIDs
 * - Different UUIDs will be different
 *
 * @collboard-modules-sdk
 */
export declare function replaceUuids<T>(object: T): T;
