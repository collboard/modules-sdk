// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { IDestroyable } from 'destroyable';
import { string_module_name } from '../../../40-utils/typeAliases';
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
    modulesStorage: import('../interfaces/IModulesStorage').IModulesStorage;
    private subscription;
    protected initSyncer(): Promise<void>;
    moduleActivate(moduleName: string_module_name): Promise<void>;
    moduleDeactivate(moduleName: string_module_name): Promise<void>;
    destroy(): Promise<void>;
}
