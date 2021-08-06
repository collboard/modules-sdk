// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IDestroyable } from 'destroyable';
import { string_attribute } from '../../../40-utils/typeAliases';
import { ISyncer } from '../interfaces/ISyncer';
import { AbstractSyncer } from './AbstractSyncer';
/**
 * AttributeSupportSyncer install/uninstall ONLY STANDARD attribute modules when needed
 *
 * @private
 * @collboard-system
 */
export declare class AttributeSupportSyncer extends AbstractSyncer implements ISyncer, IDestroyable {
    modulesStorage: import('../interfaces/IModulesStorage').IModulesStorage;
    private attributeDependencies;
    private throttleQueues;
    activateModuleSupportForAttribute(attributeName: string_attribute): Promise<unknown>;
    destroy(): Promise<void>;
}
