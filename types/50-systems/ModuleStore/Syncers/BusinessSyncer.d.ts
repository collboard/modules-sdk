// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IDestroyable } from 'destroyable';
import { ISyncer } from '../interfaces/ISyncer';
import { AbstractSyncer } from './AbstractSyncer';
/**
 * BusinessSyncer install(TODO: /uninstall) modules according to bussiness (like development)
 *
 * @private
 * @collboard-system
 */
export declare class BusinessSyncer extends AbstractSyncer implements ISyncer, IDestroyable {
    modulesStorage: import('../interfaces/IModulesStorage').IModulesStorage;
    protected initSyncer(): Promise<void>;
}
