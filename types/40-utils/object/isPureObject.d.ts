// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/**
 * @@x
 *
 * @param input
 * @returns
 *
 * @collboard-modules-sdk
 */
export declare function isPureObject(input: unknown): input is Record<string, unknown>;
/**
 * TODO: Test with non-string keys
 * TODO: Better name than pure, maybe base, basic, abstract,...
 * TODO: [🥗] Return false for objects with non-string keys, this feature worked but suddenly stopped somewhere before or just at commit 2e42af00f5ef410c0e8b13ea3f815c481682c50d
 */
