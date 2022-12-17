// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { number_miliseconds, number_positive } from '../../../../40-utils/typeAliases';
export interface ITimeoutOptions {
    /**
     * How long to wait before timeout expires
     *
     * Note: You can use Infinity
     */
    duration: number_miliseconds & number_positive;
    /**
     * Describe what is loading
     * It is sorta like a alt for the image as a text for immediate synchronous use
     */
    alt: string;
    /**
     * Any additional information which will be shown when the timeout passes
     */
    additional?: Record<string, any>;
}
