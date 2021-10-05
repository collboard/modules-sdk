// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

/// <reference types="react" />
import { IHandler } from '../../../../../40-utils/IHandler';
import { ModuleStore } from '../../../../../50-systems/ModuleStore/connectors/0-ModuleStore';
import { IModuleStoreConnectorSearchQuery } from '../../../../../50-systems/ModuleStore/interfaces/IModuleStoreConnectorSearch';
import { CornerstoneSyncer } from '../../../../../50-systems/ModuleStore/Syncers/CornerstoneSyncer';
import { RoutingSystem } from '../../../../../50-systems/RoutingSystem/0-RoutingSystem';
import { TranslationsSystem } from '../../../../../50-systems/TranslationsSystem/0-TranslationsSystem';
interface IModuleStoreModalComponentProps {
    routingSystem: RoutingSystem;
    moduleStore: ModuleStore;
    cornerstoneSyncer: CornerstoneSyncer;
    translationsSystem: TranslationsSystem;
    search: IModuleStoreConnectorSearchQuery;
    onSearchChange: IHandler<IModuleStoreConnectorSearchQuery>;
}
export declare function ModuleStoreModalComponent({
    routingSystem,
    moduleStore,
    cornerstoneSyncer,
    translationsSystem,
    search,
    onSearchChange,
}: IModuleStoreModalComponentProps): JSX.Element;
export {};
