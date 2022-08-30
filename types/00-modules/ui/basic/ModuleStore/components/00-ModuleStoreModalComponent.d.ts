// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { IHandler } from '../../../../../40-utils/IHandler';
import { BusinessSystem } from '../../../../../50-systems/BusinessSystem/0-BusinessSystem';
import { LicenseSystem } from '../../../../../50-systems/LicenseSystem/0-LicenseSystem';
import { ModuleStore } from '../../../../../50-systems/ModuleStore/connectors/0-ModuleStore';
import { IModuleSearchCriteria } from '../../../../../50-systems/ModuleStore/interfaces/IModuleSearchCriteria';
import { ArtSupportSyncer } from '../../../../../50-systems/ModuleStore/Syncers/ArtSupportSyncer';
import { AttributeSupportSyncer } from '../../../../../50-systems/ModuleStore/Syncers/AttributeSupportSyncer';
import { CornerstoneSyncer } from '../../../../../50-systems/ModuleStore/Syncers/CornerstoneSyncer';
import { RouteAndBusinessSyncer } from '../../../../../50-systems/ModuleStore/Syncers/RouteAndBusinessSyncer';
import { RoutingSystem } from '../../../../../50-systems/RoutingSystem/0-RoutingSystem';
import { TranslationsSystem } from '../../../../../50-systems/TranslationsSystem/0-TranslationsSystem';
export { CategorizedModal } from '../../../../../30-components/modal/categorized-modal/CategorizedModal';
interface IModuleStoreModalComponentProps {
    translationsSystem: TranslationsSystem;
    businessSystem: BusinessSystem;
    routingSystem: RoutingSystem;
    licenseSystem: LicenseSystem;
    moduleStore: ModuleStore;
    cornerstoneSyncer: CornerstoneSyncer;
    routeAndBusinessSyncer: RouteAndBusinessSyncer;
    attributeSupportSyncer: AttributeSupportSyncer;
    artSupportSyncer: ArtSupportSyncer;
    search: IModuleSearchCriteria;
    onSearchChange: IHandler<IModuleSearchCriteria>;
}
export declare function ModuleStoreModalComponent({
    translationsSystem,
    routingSystem,
    licenseSystem,
    moduleStore,
    cornerstoneSyncer,
    routeAndBusinessSyncer,
    attributeSupportSyncer,
    artSupportSyncer,
    businessSystem,
    search,
    onSearchChange,
}: IModuleStoreModalComponentProps): JSX.Element;
/**
 * TODO: [🩱] Probbably do not suffix components with "Component" (or make better decisions [🏊‍♂️])
 */
