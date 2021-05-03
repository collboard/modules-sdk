
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { IDestroyable } from '../../../40-utils/destroyables/IDestroyable';
import { ISyncer } from '../interfaces/ISyncer';
import { AbstractSyncer } from './AbstractSyncer';
/**
 * CornerstoneSyncer watches on cornerstone of current board and install/uninstall modules according to it
 */
export declare class CornerstoneSyncer extends AbstractSyncer implements ISyncer, IDestroyable {
    modulesStorage: import("../interfaces/IModulesStorage").IModulesStorage;
    private subscription;
    protected initSyncer(): Promise<void>;
    destroy(): Promise<void>;
}

                  