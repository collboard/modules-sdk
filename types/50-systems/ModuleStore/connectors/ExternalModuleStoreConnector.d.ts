// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { Destroyable } from 'destroyable';
import {
    string_module_category,
    string_module_name,
    string_url,
    string_version_dependency,
} from '../../../40-utils/typeAliases';
import { IModuleDefinition } from '../interfaces/IModule';
import { IModuleSearchCriteria } from '../interfaces/IModuleSearchCriteria';
import { IModuleStoreConnector } from '../interfaces/IModuleStoreConnector';
import { IModuleStoreConnectorSearchResult } from '../interfaces/IModuleStoreConnectorSearchResult';
/**
 * ExternalModuleStoreConnector communicates with the server via API and downloads modules from there
 *
 */
export declare class ExternalModuleStoreConnector extends Destroyable implements IModuleStoreConnector {
    private readonly moduleStoreUrl;
    constructor(moduleStoreUrl: string_url);
    private readonly externalModules;
    getModule(packageName: string_module_name, version?: string_version_dependency): IModuleDefinition;
    search(searchCriteria: IModuleSearchCriteria): Promise<IModuleStoreConnectorSearchResult>;
    getCategories(): Promise<Set<string_module_category>>;
}
/**
 * TODO: [🥝] Maybe use this shortcut how to get assets url in the future
 * TODO: Maybe something like getModuleScript via safe-eval
 */
