// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { TouchController } from 'touchcontroller';
import { ArtSerializer } from '../../CollboardApp';
import { ApiClient } from './../ApiClient/0-ApiClient';
import { BoardApiClient } from './../ApiClient/BoardApiClient';
import { AppState } from './../AppState/0-AppState';
import { MaterialArtVersioningSystem } from './../ArtVersionSystem/0-MaterialArtVersioningSystem';
import { VirtualArtVersioningSystem } from './../ArtVersionSystem/0-VirtualArtVersioningSystem';
import { AttributesSystem } from './../AttributesSystem/0-AttributesSystem';
import { BusinessSystem } from './../BusinessSystem/0-BusinessSystem';
import { ClosePreventionSystem } from './../ClosePreventionSystem/0-ClosePreventionSystem';
import { CollSpace } from './../CollSpace/0-CollSpace';
import { ControlSystem } from './../ControlSystem/ControlSystem';
import { CreateSystem } from './../CreateSystem/0-CreateSystem';
import { ExportSystem } from './../ExportImportSystem/0-ExportSystem';
import { ImportSystem } from './../ExportImportSystem/0-ImportSystem';
import { ExtraJsxSystem } from './../ExtraJsxSystem/0-ExtraJsxSystem';
import { FilepickSystem } from './../FilepickSystem/0-FilepickSystem';
import { FocusSystem } from './../FocusSystem/0-FocusSystem';
import { FractalSystem } from './../FractalSystem/0-FractalSystem';
import { GamificationSystem } from './../GamificationSystem/0-GamificationSystem';
import { GenerateSystem } from './../GenerateSystem/0-GenerateSystem';
import { HintSystem } from './../HintSystem/0-HintSystem';
import { IdentitySystem } from './../IdentitySystem/0-IdentitySystem';
import { LicenseSystem } from './../LicenseSystem/0-LicenseSystem';
import { ModuleStore } from './../ModuleStore/connectors/0-ModuleStore';
import { ArtSupportSyncer } from './../ModuleStore/Syncers/ArtSupportSyncer';
import { AttributeSupportSyncer } from './../ModuleStore/Syncers/AttributeSupportSyncer';
import { CornerstoneSyncer } from './../ModuleStore/Syncers/CornerstoneSyncer';
import { FileSupportSyncer } from './../ModuleStore/Syncers/FileSupportSyncer';
import { RouteAndBusinessSyncer } from './../ModuleStore/Syncers/RouteAndBusinessSyncer';
import { NotificationSystem } from './../NotificationSystem/0-NotificationSystem';
import { PointerSystem } from './../PointerSystem/0-PointerSystem';
import { RoutingSystem } from './../RoutingSystem/0-RoutingSystem';
import { SnapSystem } from './../SnapSystem/0-SnapSystem';
import { SoundSystem } from './../SoundSystem/0-SoundSystem';
import { StorageSystem } from './../StorageSystem/StorageSystem';
import { StyleSystem } from './../StyleSystem/0-StyleSystem';
import { ToolbarSystem } from './../ToolbarSystem/0-ToolbarSystem';
import { TranslationsSystem } from './../TranslationsSystem/0-TranslationsSystem';
import { VoiceSystem } from './../VoiceSystem/0-VoiceSystem';
import { ISystemsResolved } from './ISystemsResolved';
/**
 * Systems do everything in Collboard.
 * They can comunicate between or modules can do things through a systems
 *
 * @collboard-modules-sdk
 */
export declare type ISystems = Pick<ISystemsExtended, 'request'>;
/**
 * TODO: Remove this temporary solution when we merge feature/requesting-systems-pure
 */
export interface ISystemsExtended {
    request<T extends keyof Omit<ISystemsExtended, 'request'>>(
        ...requestedSystemsNames: T[]
    ): Promise<Pick<ISystemsResolved, T>>;
    /**
     * Generator: Systems
     * Omit: Serializer
     * Add: TouchController,ArtSerializer
     * Pattern: readonly <system>: Promise<<System>>;
     */
    readonly apiClient: Promise<ApiClient>;
    readonly boardApiClient: Promise<BoardApiClient>;
    readonly appState: Promise<AppState>;
    readonly materialArtVersioningSystem: Promise<MaterialArtVersioningSystem>;
    readonly virtualArtVersioningSystem: Promise<VirtualArtVersioningSystem>;
    readonly attributesSystem: Promise<AttributesSystem>;
    readonly businessSystem: Promise<BusinessSystem>;
    readonly closePreventionSystem: Promise<ClosePreventionSystem>;
    readonly collSpace: Promise<CollSpace>;
    readonly controlSystem: Promise<ControlSystem>;
    readonly createSystem: Promise<CreateSystem>;
    readonly exportSystem: Promise<ExportSystem>;
    readonly importSystem: Promise<ImportSystem>;
    readonly extraJsxSystem: Promise<ExtraJsxSystem>;
    readonly filepickSystem: Promise<FilepickSystem>;
    readonly focusSystem: Promise<FocusSystem>;
    readonly fractalSystem: Promise<FractalSystem>;
    readonly gamificationSystem: Promise<GamificationSystem>;
    readonly generateSystem: Promise<GenerateSystem>;
    readonly hintSystem: Promise<HintSystem>;
    readonly identitySystem: Promise<IdentitySystem>;
    readonly licenseSystem: Promise<LicenseSystem>;
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
    readonly toolbarSystem: Promise<ToolbarSystem>;
    readonly translationsSystem: Promise<TranslationsSystem>;
    readonly voiceSystem: Promise<VoiceSystem>;
    readonly touchController: Promise<TouchController>;
    readonly artSerializer: Promise<ArtSerializer>;
}
