// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { AbstractArt } from './20-AbstractArt';
/**
 * All removed arts get replaced with DeletedArt as a terminal point of
 * it's existence.
 *
 * *Note: Committing any art with predecessor of type DeletedArt results in
 * undefined behavior since DeletedArts are removed in garbage collection
 * process.*
 *
 * @collboard-modules-sdk
 */
export declare class DeletedArt extends AbstractArt {
    static serializeName: string;
    static manifest: {
        name: string;
    };
}
/**
 *
 */
