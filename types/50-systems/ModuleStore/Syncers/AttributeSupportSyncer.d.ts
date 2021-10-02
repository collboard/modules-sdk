// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { IDestroyable } from 'destroyable';
import { string_attribute } from '../../../40-utils/typeAliases';
import { ISyncer } from '../interfaces/ISyncer';
import { AbstractSyncer } from './AbstractSyncer';
/**
 * AttributeSupportSyncer installs / uninstalls ONLY STANDARD attribute modules when needed
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
