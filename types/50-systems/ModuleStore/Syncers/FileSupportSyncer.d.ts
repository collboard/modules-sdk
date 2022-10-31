// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IDestroyable } from 'destroyable';
import { ILogger, ISubLogger } from '../../../40-utils/logger/ILogger';
import { string_mime_type, string_module_name } from '../../../40-utils/typeAliases';
import { ISyncer } from '../interfaces/ISyncer';
import { AbstractSyncer } from './AbstractSyncer';
/**
 * FileSupportSyncer installs / uninstalls support for files for its importing(TODO: /exporting)
 * TODO: Probably name to FileImportSupportSyncer
 */
export declare class FileSupportSyncer extends AbstractSyncer implements ISyncer, IDestroyable {
    private fileSupportDependencies;
    private throttleQueues;
    installSupportForFile(mimeType: string_mime_type, logger: ILogger | ISubLogger): Promise<unknown>;
    installSupportForNative(
        moduleName: string_module_name,
        logger: ILogger | ISubLogger,
    ): Promise<import('destroyable').Registration | undefined>;
    destroy(): Promise<void>;
}
