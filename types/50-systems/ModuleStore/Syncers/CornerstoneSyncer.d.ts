// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IDestroyable } from '../../../40-utils/destroyables/IDestroyable';
import { string_module_name } from '../../../40-utils/typeAliases';
import { IModulePersister } from '../interfaces/IModulePersister';
import { ISyncer } from '../interfaces/ISyncer';
import { AbstractSyncer } from './AbstractSyncer';
/**
 * CornerstoneSyncer watches on cornerstone of current board and install/uninstall modules according to it
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
