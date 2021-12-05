// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { Destroyable } from 'destroyable';
import { string_module_category } from '../../../40-utils/typeAliases';
import { IModuleSearchCriteria } from '../interfaces/IModuleSearchCriteria';
import { IModulesStorage } from '../interfaces/IModulesStorage';
import { IModuleStoreConnector } from '../interfaces/IModuleStoreConnector';
/**
 * ExternalModuleStoreConnector communicates with the server via API and downloads modules from there
 *
 */
export declare class ExternalModuleStoreConnector extends Destroyable implements IModuleStoreConnector {
    moduleStorage: IModulesStorage;
    search(searchCriteria: IModuleSearchCriteria): Promise<{
        manifests: never[];
    }>;
    getCategories(): Promise<Set<string_module_category>>;
}
