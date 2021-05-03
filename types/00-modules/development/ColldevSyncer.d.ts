
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { StorageSyncer } from '../../50-systems/ModuleStore/Syncers/StorageSyncer';
/**
 * ColldevSyncer install/uninstall modules according colldev CLI command server
 * it contains internally its modulesStorage
 * it is connected via socket.io to colldev CLI command server
 */
export declare class ColldevSyncer extends StorageSyncer {
    private declareModuleCallbackName;
    private socketClient;
    protected initSyncer(): Promise<void>;
    private establishConnection;
    destroy(): Promise<void>;
}

                  