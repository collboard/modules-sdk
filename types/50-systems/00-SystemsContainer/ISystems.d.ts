
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { TouchController } from 'touchcontroller';
import { ModuleStore } from '../ModuleStore/connectors/0-ModuleStore';
import { ArtSerializer } from './../../CollBoardApp';
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
import { FractalSystem } from './../FractalSystem/0-FractalSystem';
import { GamificationSystem } from './../GamificationSystem/0-GamificationSystem';
import { GenerateSystem } from './../GenerateSystem/0-GenerateSystem';
import { HintSystem } from './../HintSystem/0-HintSystem';
import { IdentitySystem } from './../IdentitySystem/0-IdentitySystem';
import { ArtSupportSyncer } from './../ModuleStore/Syncers/ArtSupportSyncer';
import { AttributeSupportSyncer } from './../ModuleStore/Syncers/AttributeSupportSyncer';
import { CornerstoneSyncer } from './../ModuleStore/Syncers/CornerstoneSyncer';
import { RouteSyncer } from './../ModuleStore/Syncers/RouteSyncer';
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
/**
 * Systems do everything in Collboard.
 * They can comunicate between or modules can do things through a systems
 * TODO: Every module needs to get permission to comunicate with each system
 */
export interface ISystems {
    /**
     * Generator: Systems
     * Omit: Serializer
     * Add: TouchController,ArtSerializer
     * Pattern: readonly <system>: <System>;readonly <system>Promise: Promise<<System>>;readonly <system>Nullable: <System> | null;
     */
    readonly apiClient: ApiClient;
    readonly apiClientPromise: Promise<ApiClient>;
    readonly apiClientNullable: ApiClient | null;
    readonly boardApiClient: BoardApiClient;
    readonly boardApiClientPromise: Promise<BoardApiClient>;
    readonly boardApiClientNullable: BoardApiClient | null;
    readonly appState: AppState;
    readonly appStatePromise: Promise<AppState>;
    readonly appStateNullable: AppState | null;
    readonly materialArtVersioningSystem: MaterialArtVersioningSystem;
    readonly materialArtVersioningSystemPromise: Promise<MaterialArtVersioningSystem>;
    readonly materialArtVersioningSystemNullable: MaterialArtVersioningSystem | null;
    readonly virtualArtVersioningSystem: VirtualArtVersioningSystem;
    readonly virtualArtVersioningSystemPromise: Promise<VirtualArtVersioningSystem>;
    readonly virtualArtVersioningSystemNullable: VirtualArtVersioningSystem | null;
    readonly attributesSystem: AttributesSystem;
    readonly attributesSystemPromise: Promise<AttributesSystem>;
    readonly attributesSystemNullable: AttributesSystem | null;
    readonly closePreventionSystem: ClosePreventionSystem;
    readonly closePreventionSystemPromise: Promise<ClosePreventionSystem>;
    readonly closePreventionSystemNullable: ClosePreventionSystem | null;
    readonly collSpace: CollSpace;
    readonly collSpacePromise: Promise<CollSpace>;
    readonly collSpaceNullable: CollSpace | null;
    readonly createSystem: CreateSystem;
    readonly createSystemPromise: Promise<CreateSystem>;
    readonly createSystemNullable: CreateSystem | null;
    readonly exportSystem: ExportSystem;
    readonly exportSystemPromise: Promise<ExportSystem>;
    readonly exportSystemNullable: ExportSystem | null;
    readonly importSystem: ImportSystem;
    readonly importSystemPromise: Promise<ImportSystem>;
    readonly importSystemNullable: ImportSystem | null;
    readonly extraJsxSystem: ExtraJsxSystem;
    readonly extraJsxSystemPromise: Promise<ExtraJsxSystem>;
    readonly extraJsxSystemNullable: ExtraJsxSystem | null;
    readonly filepickSystem: FilepickSystem;
    readonly filepickSystemPromise: Promise<FilepickSystem>;
    readonly filepickSystemNullable: FilepickSystem | null;
    readonly fractalSystem: FractalSystem;
    readonly fractalSystemPromise: Promise<FractalSystem>;
    readonly fractalSystemNullable: FractalSystem | null;
    readonly gamificationSystem: GamificationSystem;
    readonly gamificationSystemPromise: Promise<GamificationSystem>;
    readonly gamificationSystemNullable: GamificationSystem | null;
    readonly generateSystem: GenerateSystem;
    readonly generateSystemPromise: Promise<GenerateSystem>;
    readonly generateSystemNullable: GenerateSystem | null;
    readonly hintSystem: HintSystem;
    readonly hintSystemPromise: Promise<HintSystem>;
    readonly hintSystemNullable: HintSystem | null;
    readonly identitySystem: IdentitySystem;
    readonly identitySystemPromise: Promise<IdentitySystem>;
    readonly identitySystemNullable: IdentitySystem | null;
    readonly moduleStore: ModuleStore;
    readonly moduleStorePromise: Promise<ModuleStore>;
    readonly moduleStoreNullable: ModuleStore | null;
    readonly artSupportSyncer: ArtSupportSyncer;
    readonly artSupportSyncerPromise: Promise<ArtSupportSyncer>;
    readonly artSupportSyncerNullable: ArtSupportSyncer | null;
    readonly attributeSupportSyncer: AttributeSupportSyncer;
    readonly attributeSupportSyncerPromise: Promise<AttributeSupportSyncer>;
    readonly attributeSupportSyncerNullable: AttributeSupportSyncer | null;
    readonly cornerstoneSyncer: CornerstoneSyncer;
    readonly cornerstoneSyncerPromise: Promise<CornerstoneSyncer>;
    readonly cornerstoneSyncerNullable: CornerstoneSyncer | null;
    readonly routeSyncer: RouteSyncer;
    readonly routeSyncerPromise: Promise<RouteSyncer>;
    readonly routeSyncerNullable: RouteSyncer | null;
    readonly notificationSystem: NotificationSystem;
    readonly notificationSystemPromise: Promise<NotificationSystem>;
    readonly notificationSystemNullable: NotificationSystem | null;
    readonly pointerSystem: PointerSystem;
    readonly pointerSystemPromise: Promise<PointerSystem>;
    readonly pointerSystemNullable: PointerSystem | null;
    readonly routingSystem: RoutingSystem;
    readonly routingSystemPromise: Promise<RoutingSystem>;
    readonly routingSystemNullable: RoutingSystem | null;
    readonly shortcutsSystem: ShortcutsSystem;
    readonly shortcutsSystemPromise: Promise<ShortcutsSystem>;
    readonly shortcutsSystemNullable: ShortcutsSystem | null;
    readonly snapSystem: SnapSystem;
    readonly snapSystemPromise: Promise<SnapSystem>;
    readonly snapSystemNullable: SnapSystem | null;
    readonly soundSystem: SoundSystem;
    readonly soundSystemPromise: Promise<SoundSystem>;
    readonly soundSystemNullable: SoundSystem | null;
    readonly storageSystem: StorageSystem;
    readonly storageSystemPromise: Promise<StorageSystem>;
    readonly storageSystemNullable: StorageSystem | null;
    readonly styleSystem: StyleSystem;
    readonly styleSystemPromise: Promise<StyleSystem>;
    readonly styleSystemNullable: StyleSystem | null;
    readonly toolbarSystem: ToolbarSystem;
    readonly toolbarSystemPromise: Promise<ToolbarSystem>;
    readonly toolbarSystemNullable: ToolbarSystem | null;
    readonly translationsSystem: TranslationsSystem;
    readonly translationsSystemPromise: Promise<TranslationsSystem>;
    readonly translationsSystemNullable: TranslationsSystem | null;
    readonly voiceSystem: VoiceSystem;
    readonly voiceSystemPromise: Promise<VoiceSystem>;
    readonly voiceSystemNullable: VoiceSystem | null;
    readonly touchController: TouchController;
    readonly touchControllerPromise: Promise<TouchController>;
    readonly touchControllerNullable: TouchController | null;
    readonly artSerializer: ArtSerializer;
    readonly artSerializerPromise: Promise<ArtSerializer>;
    readonly artSerializerNullable: ArtSerializer | null;
}

                  