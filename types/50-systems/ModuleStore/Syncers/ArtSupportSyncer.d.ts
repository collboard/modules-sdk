
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { IDestroyable } from '../../../40-utils/destroyables/IDestroyable';
import { ISyncer } from '../interfaces/ISyncer';
import { AbstractSyncer } from './AbstractSyncer';
/**
 * ArtSupportSyncer install/uninstall art support modules
 */
export declare class ArtSupportSyncer extends AbstractSyncer implements ISyncer, IDestroyable {
    modulesStorage: import("../interfaces/IModulesStorage").IModulesStorage;
    private artDependencies;
    private queues;
    activateModuleSupportForArt(classNameOrInstance: string | any): Promise<unknown>;
    destroy(): Promise<void>;
}

                  