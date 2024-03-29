// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IDestroyable } from 'destroyable';
import { IModuleManifest } from '../interfaces/IModuleManifest/IModuleManifest';
import { IModulePersister } from '../interfaces/IModulePersister';
import { ISyncer } from '../interfaces/ISyncer';
import { AbstractSyncer } from './AbstractSyncer';
/**
 * CornerstoneSyncer watches on cornerstone of current board and installs / uninstalls modules according to it
 *
 * @private
 * @collboard-system
 */
export declare class CornerstoneSyncer extends AbstractSyncer implements ISyncer, IModulePersister, IDestroyable {
    private subscription;
    protected initSyncer(): Promise<void>;
    moduleActivate(moduleManifest: IModuleManifest): Promise<void>;
    moduleDeactivate(moduleManifest: IModuleManifest): Promise<void>;
    destroy(): Promise<void>;
}
