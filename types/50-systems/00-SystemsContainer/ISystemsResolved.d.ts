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
import { CornerstoneSyncer } from './../ModuleStore/Syncers/CornerstoneSyncer';
import { RouteAndBusinessSyncer } from './../ModuleStore/Syncers/RouteAndBusinessSyncer';
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
export interface ISystemsResolved {
    /**
     * Generator: Systems
     * Omit: Serializer
     * Add: TouchController,ArtSerializer
     * Pattern: readonly <system>: <System>;
     */
    readonly apiClient: ApiClient;
    readonly boardApiClient: BoardApiClient;
    readonly appState: AppState;
    readonly materialArtVersioningSystem: MaterialArtVersioningSystem;
    readonly virtualArtVersioningSystem: VirtualArtVersioningSystem;
    readonly attributesSystem: AttributesSystem;
    readonly businessSystem: BusinessSystem;
    readonly closePreventionSystem: ClosePreventionSystem;
    readonly collSpace: CollSpace;
    readonly createSystem: CreateSystem;
    readonly exportSystem: ExportSystem;
    readonly importSystem: ImportSystem;
    readonly extraJsxSystem: ExtraJsxSystem;
    readonly filepickSystem: FilepickSystem;
    readonly focusSystem: FocusSystem;
    readonly fractalSystem: FractalSystem;
    readonly gamificationSystem: GamificationSystem;
    readonly generateSystem: GenerateSystem;
    readonly hintSystem: HintSystem;
    readonly identitySystem: IdentitySystem;
    readonly moduleStore: ModuleStore;
    readonly artSupportSyncer: ArtSupportSyncer;
    readonly attributeSupportSyncer: AttributeSupportSyncer;
    readonly cornerstoneSyncer: CornerstoneSyncer;
    readonly routeAndBusinessSyncer: RouteAndBusinessSyncer;
    readonly notificationSystem: NotificationSystem;
    readonly pointerSystem: PointerSystem;
    readonly routingSystem: RoutingSystem;
    readonly shortcutsSystem: ShortcutsSystem;
    readonly snapSystem: SnapSystem;
    readonly soundSystem: SoundSystem;
    readonly storageSystem: StorageSystem;
    readonly styleSystem: StyleSystem;
    readonly toolbarSystem: ToolbarSystem;
    readonly translationsSystem: TranslationsSystem;
    readonly voiceSystem: VoiceSystem;
    readonly touchController: TouchController;
    readonly artSerializer: ArtSerializer;
}
