// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { Destroyable } from 'destroyable';
import { string_module_category, string_module_name } from '../../../40-utils/typeAliases';
import { IModuleDefinition } from '../interfaces/IModule';
import { IModuleSearchCriteria } from '../interfaces/IModuleSearchCriteria';
import { IModuleStoreConnector } from '../interfaces/IModuleStoreConnector';
import { IModuleStoreConnectorSearchResult } from '../interfaces/IModuleStoreConnectorSearchResult';
/**
 * ExternalModuleStoreConnector communicates with the server via API and downloads modules from there
 *
 */
export declare class ExternalModuleStoreConnector extends Destroyable implements IModuleStoreConnector {
    getModule(name: string_module_name): IModuleDefinition;
    search(searchCriteria: IModuleSearchCriteria): Promise<IModuleStoreConnectorSearchResult>;
    getCategories(): Promise<Set<string_module_category>>;
}
/**
 * TODO: !!! Remove from console:
 *
 * BackgroundPattern ['TextCard']
 * BackgroundPattern ['FunctionBuilder']
 *
 */
/**
 * TODO: !!! Uninstalling of external modules occures looot of times.
 *
 * [✗] Uninstalling sample-colldev-module (with CornerstoneSyncer)
instrument.ts:129 [✗] Uninstalling sample-colldev-module (with CornerstoneSyncer)
instrument.ts:129 [✗] Uninstalling sample-colldev-module (with CornerstoneSyncer)
instrument.ts:129 [✗] Uninstalling sample-colldev-module (with CornerstoneSyncer)
instrument.ts:129 [✗] Uninstalling sample-colldev-module (with CornerstoneSyncer)
instrument.ts:129 [✗] Uninstalling sample-colldev-module (with CornerstoneSyncer)
instrument.ts:129 [✗] Uninstalling sample-colldev-module (with CornerstoneSyncer)
instrument.ts:129 [✗] Uninstalling sample-colldev-module (with CornerstoneSyncer)
instrument.ts:129 [✗] Uninstalling sample-colldev-module (with CornerstoneSyncer)
instrument.ts:129 [✗] Uninstalling sample-colldev-module (with CornerstoneSyncer)
instrument.ts:129 [✗] Uninstalling sample-colldev-module (with CornerstoneSyncer)
instrument.ts:129 [✗] Uninstalling sample-colldev-module (with CornerstoneSyncer)
instrument.ts:129 [✓] Installing sample-colldev-module (with CornerstoneSyncer
 */
