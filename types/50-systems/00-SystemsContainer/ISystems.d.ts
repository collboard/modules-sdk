// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { TouchController } from 'touchcontroller';
import { Core } from '../30-Core/0-Core';
import { ApiClient } from '../ApiClient/0-ApiClient';
import { BoardApiClient } from '../ApiClient/BoardApiClient';
import { AppState } from '../AppState/0-AppState';
import { ArtSerializer } from '../ArtSerializer/ArtSerializer';
import { MaterialArtVersioningSystem } from '../ArtVersionSystem/0-MaterialArtVersioningSystem';
import { VirtualArtVersioningSystem } from '../ArtVersionSystem/0-VirtualArtVersioningSystem';
import { AttributesSystem } from '../AttributesSystem/0-AttributesSystem';
import { BoardSystem } from '../BoardSystem/0-BoardSystem';
import { BusinessSystem } from '../BusinessSystem/0-BusinessSystem';
import { ClosePreventionSystem } from '../ClosePreventionSystem/0-ClosePreventionSystem';
import { CollSpace } from '../CollSpace/0-CollSpace';
import { ControlSystem } from '../ControlSystem/ControlSystem';
import { CreateSystem } from '../CreateSystem/0-CreateSystem';
import { ExportSystem } from '../ExportSystem/0-ExportSystem';
import { FilepickSystem } from '../FilepickSystem/0-FilepickSystem';
import { FocusSystem } from '../FocusSystem/0-FocusSystem';
import { FractalSystem } from '../FractalSystem/0-FractalSystem';
import { GamificationSystem } from '../GamificationSystem/0-GamificationSystem';
import { GenerateSystem } from '../GenerateSystem/0-GenerateSystem';
import { HintSystem } from '../HintSystem/0-HintSystem';
import { IdentitySystem } from '../IdentitySystem/0-IdentitySystem';
import { ImportSystem } from '../ImportSystem/0-ImportSystem';
import { LicenseSystem } from '../LicenseSystem/0-LicenseSystem';
import { LicenseSyncer } from '../LicenseSystem/LicenseSyncer';
import { MessagesApiSystem } from '../MessagesApiSystem/0-MessagesApiSystem';
import { ModuleStore } from '../ModuleStore/connectors/0-ModuleStore';
import { ArtSupportSyncer } from '../ModuleStore/Syncers/ArtSupportSyncer';
import { AttributeSupportSyncer } from '../ModuleStore/Syncers/AttributeSupportSyncer';
import { CornerstoneSyncer } from '../ModuleStore/Syncers/CornerstoneSyncer';
import { FileSupportSyncer } from '../ModuleStore/Syncers/FileSupportSyncer';
import { RouteAndBusinessSyncer } from '../ModuleStore/Syncers/RouteAndBusinessSyncer';
import { NotificationSystem } from '../NotificationSystem/0-NotificationSystem';
import { PointerSystem } from '../PointerSystem/0-PointerSystem';
import { RoutingSystem } from '../RoutingSystem/0-RoutingSystem';
import { SnapSystem } from '../SnapSystem/0-SnapSystem';
import { SoundSystem } from '../SoundSystem/0-SoundSystem';
import { StorageSystem } from '../StorageSystem/StorageSystem';
import { StyleSystem } from '../StyleSystem/0-StyleSystem';
import { TestSystem } from '../TestSystem/0-TestSystem';
import { ToolbarSystem } from '../ToolbarSystem/0-ToolbarSystem';
import { TranslationsSystem } from '../TranslationsSystem/0-TranslationsSystem';
import { UsercontentSystem } from '../UsercontentSystem/0-UsercontentSystem';
import { UserInterfaceSystem } from '../UserInterfaceSystem/0-UserInterfaceSystem';
import { VoiceSystem } from '../VoiceSystem/0-VoiceSystem';
import { ISystemsResolved } from './ISystemsResolved';
/**
 * All system names as union type
 *
 * @collboard-modules-sdk
 */
export type SystemName = keyof Omit<ISystemsExtended, ISystemsMethods>;
/**
 * Keys of the ISystems that are methods not actual systems
 */
export type ISystemsMethods = 'request' | 'use';
/**
 * Systems do everything in Collboard.
 * They can comunicate between or modules can do things through a systems
 *
 * @collboard-modules-sdk
 */
export type ISystems = Pick<ISystemsExtended, ISystemsMethods>;
/**
 * TODO: Remove this temporary solution when we merge feature/requesting-systems-pure
 */
export interface ISystemsExtended {
    /**
     * Request to use systems in the module
     *
     * @param requestedSystemsNames Names of requested systems
     * @returns Promise of all record object which contains all requested systems which will be resolved after permissions are granted
     */
    request<TSystemNames extends SystemName>(
        ...requestedSystemsNames: Array<TSystemNames>
    ): Promise<Pick<ISystemsResolved, TSystemNames>>;
    /**
     * Use previously requested systems
     *
     * Note: You need first to request the systems you want to use
     *
     * @param requestedSystemsNames Names of requested systems
     * @returns record object which contains all requested systems
     */
    use<TSystemNames extends SystemName>(
        ...requestedSystemsNames: Array<TSystemNames>
    ): Pick<ISystemsResolved, TSystemNames>;
    /**
     * Generator: Systems
     * Add: TouchController
     * Pattern: readonly <system>: Promise<<System>>;
     */
    readonly core: Promise<Core>;
    readonly apiClient: Promise<ApiClient>;
    readonly boardApiClient: Promise<BoardApiClient>;
    readonly appState: Promise<AppState>;
    readonly artSerializer: Promise<ArtSerializer>;
    readonly materialArtVersioningSystem: Promise<MaterialArtVersioningSystem>;
    readonly virtualArtVersioningSystem: Promise<VirtualArtVersioningSystem>;
    readonly attributesSystem: Promise<AttributesSystem>;
    readonly boardSystem: Promise<BoardSystem>;
    readonly businessSystem: Promise<BusinessSystem>;
    readonly closePreventionSystem: Promise<ClosePreventionSystem>;
    readonly collSpace: Promise<CollSpace>;
    readonly controlSystem: Promise<ControlSystem>;
    readonly createSystem: Promise<CreateSystem>;
    readonly exportSystem: Promise<ExportSystem>;
    readonly filepickSystem: Promise<FilepickSystem>;
    readonly focusSystem: Promise<FocusSystem>;
    readonly fractalSystem: Promise<FractalSystem>;
    readonly gamificationSystem: Promise<GamificationSystem>;
    readonly generateSystem: Promise<GenerateSystem>;
    readonly hintSystem: Promise<HintSystem>;
    readonly identitySystem: Promise<IdentitySystem>;
    readonly importSystem: Promise<ImportSystem>;
    readonly licenseSystem: Promise<LicenseSystem>;
    readonly licenseSyncer: Promise<LicenseSyncer>;
    readonly messagesApiSystem: Promise<MessagesApiSystem>;
    readonly moduleStore: Promise<ModuleStore>;
    readonly artSupportSyncer: Promise<ArtSupportSyncer>;
    readonly attributeSupportSyncer: Promise<AttributeSupportSyncer>;
    readonly cornerstoneSyncer: Promise<CornerstoneSyncer>;
    readonly fileSupportSyncer: Promise<FileSupportSyncer>;
    readonly routeAndBusinessSyncer: Promise<RouteAndBusinessSyncer>;
    readonly notificationSystem: Promise<NotificationSystem>;
    readonly pointerSystem: Promise<PointerSystem>;
    readonly routingSystem: Promise<RoutingSystem>;
    readonly snapSystem: Promise<SnapSystem>;
    readonly soundSystem: Promise<SoundSystem>;
    readonly storageSystem: Promise<StorageSystem>;
    readonly styleSystem: Promise<StyleSystem>;
    readonly testSystem: Promise<TestSystem>;
    readonly toolbarSystem: Promise<ToolbarSystem>;
    readonly translationsSystem: Promise<TranslationsSystem>;
    readonly usercontentSystem: Promise<UsercontentSystem>;
    readonly userInterfaceSystem: Promise<UserInterfaceSystem>;
    readonly voiceSystem: Promise<VoiceSystem>;
    readonly touchController: Promise<TouchController>;
}
/**
 * TODO: Allow partial load of systems - some systems are resolved, some are not (and waiting for example for the users permission or initializing)
 */
