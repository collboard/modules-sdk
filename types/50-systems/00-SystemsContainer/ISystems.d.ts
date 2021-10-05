// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { TouchController } from 'touchcontroller';
import { ArtSerializer } from '../../CollboardApp';
import { ApiClient } from './../ApiClient/0-ApiClient';
import { BoardApiClient } from './../ApiClient/BoardApiClient';
import { AppState } from './../AppState/0-AppState';
import { MaterialArtVersioningSystem } from './../ArtVersionSystem/0-MaterialArtVersioningSystem';
import { VirtualArtVersioningSystem } from './../ArtVersionSystem/0-VirtualArtVersioningSystem';
import { AttributesSystem } from './../AttributesSystem/0-AttributesSystem';
import { ClosePreventionSystem } from './../ClosePreventionSystem/0-ClosePreventionSystem';
import { CollSpace } from './../CollSpace/0-CollSpace';
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
import { ModuleStore } from './../ModuleStore/connectors/0-ModuleStore';
import { ArtSupportSyncer } from './../ModuleStore/Syncers/ArtSupportSyncer';
import { AttributeSupportSyncer } from './../ModuleStore/Syncers/AttributeSupportSyncer';
import { BusinessSyncer } from './../ModuleStore/Syncers/BusinessSyncer';
import { CornerstoneSyncer } from './../ModuleStore/Syncers/CornerstoneSyncer';
import { RouteSyncer } from './../ModuleStore/Syncers/RouteSyncer';
import { StorageSyncer } from './../ModuleStore/Syncers/StorageSyncer';
import { NotificationSystem } from './../NotificationSystem/0-NotificationSystem';
import { PointerSystem } from './../PointerSystem/0-PointerSystem';
import { RoutingSystem } from './../RoutingSystem/0-RoutingSystem';
import { ShortcutsSystem } from './../ShortcutsSystem/0-ShortcutsSystem';
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
    readonly closePreventionSystem: Promise<ClosePreventionSystem>;
    readonly collSpace: Promise<CollSpace>;
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
    readonly moduleStore: Promise<ModuleStore>;
    readonly artSupportSyncer: Promise<ArtSupportSyncer>;
    readonly attributeSupportSyncer: Promise<AttributeSupportSyncer>;
    readonly businessSyncer: Promise<BusinessSyncer>;
    readonly cornerstoneSyncer: Promise<CornerstoneSyncer>;
    readonly routeSyncer: Promise<RouteSyncer>;
    readonly storageSyncer: Promise<StorageSyncer>;
    readonly notificationSystem: Promise<NotificationSystem>;
    readonly pointerSystem: Promise<PointerSystem>;
    readonly routingSystem: Promise<RoutingSystem>;
    readonly shortcutsSystem: Promise<ShortcutsSystem>;
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
