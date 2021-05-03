
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { IDestroyable } from '../../../40-utils/destroyables/IDestroyable';
import { ISyncer } from '../interfaces/ISyncer';
import { AbstractSyncer } from './AbstractSyncer';
/**
 * RouteSyncer install/uninstall modules according to the app URI
 */
export declare class RouteSyncer extends AbstractSyncer implements ISyncer, IDestroyable {
    modulesStorage: import("../interfaces/IModulesStorage").IModulesStorage;
    private subscription;
    protected initSyncer(): Promise<void>;
    /**
     * This is for CollboardApp when it not found current board
     */
    triggerErrorForBoard(error: Error): Promise<void>;
    /**
     * This is for CollboardApp when it not found current board
     */
    triggerErrorForModule(error: Error): Promise<void>;
    destroy(): Promise<void>;
}

                  