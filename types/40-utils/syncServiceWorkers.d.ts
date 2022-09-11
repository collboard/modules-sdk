// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/**
 * Register the specified service workers and unregister all other which are running
 *
 * @param serviceWorkerUrls URLS of the service workers you want to be registered
 */
export declare function syncServiceWorkers(...paths: Array<string>): Promise<void>;
/**
 * TODO: Make console logs around service worker more compact
 */
