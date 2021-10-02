// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { Destroyable } from 'destroyable';
import { string_module_category } from '../../../40-utils/typeAliases';
import { IDependency } from '../interfaces/IDependencies';
import { IModuleStoreConnector } from '../interfaces/IModuleStoreConnector';
import { IModuleStoreConnectorSearchQuery } from '../interfaces/IModuleStoreConnectorSearch';
/**
 * ExternalModuleStoreConnector communicates with the server via API and downloads modules from there
 *
 */
export declare class ExternalModuleStoreConnector extends Destroyable implements IModuleStoreConnector {
    search(searchCriteria: IModuleStoreConnectorSearchQuery): Promise<{
        modules: never[];
    }>;
    download(...modules: IDependency[]): Promise<never[]>;
    getCategories(): Promise<Set<string_module_category>>;
}
