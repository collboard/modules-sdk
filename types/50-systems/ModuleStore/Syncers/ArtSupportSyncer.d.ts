// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IDestroyable } from 'destroyable';
import { Commit } from '../../../10-database/Commit';
import { string_module_name } from '../../../40-utils/typeAliases';
import { AbstractArt } from '../../../71-arts/20-AbstractArt';
import { ISyncer } from '../interfaces/ISyncer';
import { AbstractSyncer } from './AbstractSyncer';
/**
 * ArtSupportSyncer installs / uninstalls art support modules
 *
 * @private
 * @collboard-system
 */
export declare class ArtSupportSyncer extends AbstractSyncer implements ISyncer, IDestroyable {
    private artDependencies;
    private throttleQueues;
    installSupport(moduleName: string_module_name): Promise<unknown>;
    /**
     * @deprecated
     */
    installSupportForArt(classNameOrInstance: string | AbstractArt | Commit): Promise<unknown>;
    destroy(): Promise<void>;
}
