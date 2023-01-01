// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/**
 * Utility for testing parts of the application that have unpredicted duration
 *
 * Note:
 *  - In **production** this will resolve immediately
 *  - During the **development** it will wait random amount of time which can be debuged
 *
 *
 * @returns Promise with resolves
 */
export declare function forUnpredictedTime(): Promise<void>;
