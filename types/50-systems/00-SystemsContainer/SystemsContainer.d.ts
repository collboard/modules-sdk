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
import { ISystems } from './ISystems';
/**
 * TODO: Protected systems and permissions
 */
export declare class SystemsContainer implements ISystems {
    /**
     * Generator: Systems
     * Omit: Serializer
     * Add: TouchController,ArtSerializer
     * Pattern: private _<system>: <System> | null = null;
     */
    private _apiClient;
    private _boardApiClient;
    private _appState;
    private _materialArtVersioningSystem;
    private _virtualArtVersioningSystem;
    private _attributesSystem;
    private _closePreventionSystem;
    private _collSpace;
    private _createSystem;
    private _exportSystem;
    private _importSystem;
    private _extraJsxSystem;
    private _filepickSystem;
    private _fractalSystem;
    private _gamificationSystem;
    private _generateSystem;
    private _hintSystem;
    private _identitySystem;
    private _moduleStore;
    private _artSupportSyncer;
    private _attributeSupportSyncer;
    private _businessSyncer;
    private _cornerstoneSyncer;
    private _routeSyncer;
    private _storageSyncer;
    private _notificationSystem;
    private _pointerSystem;
    private _routingSystem;
    private _shortcutsSystem;
    private _snapSystem;
    private _soundSystem;
    private _storageSystem;
    private _styleSystem;
    private _toolbarSystem;
    private _translationsSystem;
    private _voiceSystem;
    private _touchController;
    private _artSerializer;
    get ready(): Promise<void>;
    /**
     * Generator: Systems
     * Omit: Serializer
     * Add: TouchController,ArtSerializer
     * Pattern:

    public get <system>(): <System> {
        if(this._<system>){
            return this._<system>;
        }else{
            throw new Error(`<System> wasn\`t provided to SystemsContainer.`);
        }
    }
    public get <system>Nullable(): <System> | null {
        return this._<system>;
    }

    public get <system>Promise(): Promise<<System>> {
        return new Promise(async (resolve)=>{
            // TODO: wait for set method not such a supid way by forValueDefined
            resolve(await errorBoundary(async ()=>await forValueDefined(()=>this._<system> || undefined),`<System> was not available in reasonable time.`));
        });
    }

    public async set<System>(<system>: <System>) {
        if(this._<system>){
          console.warn(`<System> was set twice to SystemsContainer.`);
          await this._<system>.destroy();
        }
        this._<system> = <system>;
    }

    public async remove<System>() {
        if(this._<system>){
          await this._<system>.destroy();
        }
        this._<system>=null;
    }
    // ----
    */
    get apiClient(): ApiClient;
    get apiClientNullable(): ApiClient | null;
    get apiClientPromise(): Promise<ApiClient>;
    setApiClient(apiClient: ApiClient): Promise<void>;
    removeApiClient(): Promise<void>;
    get boardApiClient(): BoardApiClient;
    get boardApiClientNullable(): BoardApiClient | null;
    get boardApiClientPromise(): Promise<BoardApiClient>;
    setBoardApiClient(boardApiClient: BoardApiClient): Promise<void>;
    removeBoardApiClient(): Promise<void>;
    get appState(): AppState;
    get appStateNullable(): AppState | null;
    get appStatePromise(): Promise<AppState>;
    setAppState(appState: AppState): Promise<void>;
    removeAppState(): Promise<void>;
    get materialArtVersioningSystem(): MaterialArtVersioningSystem;
    get materialArtVersioningSystemNullable(): MaterialArtVersioningSystem | null;
    get materialArtVersioningSystemPromise(): Promise<MaterialArtVersioningSystem>;
    setMaterialArtVersioningSystem(materialArtVersioningSystem: MaterialArtVersioningSystem): Promise<void>;
    removeMaterialArtVersioningSystem(): Promise<void>;
    get virtualArtVersioningSystem(): VirtualArtVersioningSystem;
    get virtualArtVersioningSystemNullable(): VirtualArtVersioningSystem | null;
    get virtualArtVersioningSystemPromise(): Promise<VirtualArtVersioningSystem>;
    setVirtualArtVersioningSystem(virtualArtVersioningSystem: VirtualArtVersioningSystem): Promise<void>;
    removeVirtualArtVersioningSystem(): Promise<void>;
    get attributesSystem(): AttributesSystem;
    get attributesSystemNullable(): AttributesSystem | null;
    get attributesSystemPromise(): Promise<AttributesSystem>;
    setAttributesSystem(attributesSystem: AttributesSystem): Promise<void>;
    removeAttributesSystem(): Promise<void>;
    get closePreventionSystem(): ClosePreventionSystem;
    get closePreventionSystemNullable(): ClosePreventionSystem | null;
    get closePreventionSystemPromise(): Promise<ClosePreventionSystem>;
    setClosePreventionSystem(closePreventionSystem: ClosePreventionSystem): Promise<void>;
    removeClosePreventionSystem(): Promise<void>;
    get collSpace(): CollSpace;
    get collSpaceNullable(): CollSpace | null;
    get collSpacePromise(): Promise<CollSpace>;
    setCollSpace(collSpace: CollSpace): Promise<void>;
    removeCollSpace(): Promise<void>;
    get createSystem(): CreateSystem;
    get createSystemNullable(): CreateSystem | null;
    get createSystemPromise(): Promise<CreateSystem>;
    setCreateSystem(createSystem: CreateSystem): Promise<void>;
    removeCreateSystem(): Promise<void>;
    get exportSystem(): ExportSystem;
    get exportSystemNullable(): ExportSystem | null;
    get exportSystemPromise(): Promise<ExportSystem>;
    setExportSystem(exportSystem: ExportSystem): Promise<void>;
    removeExportSystem(): Promise<void>;
    get importSystem(): ImportSystem;
    get importSystemNullable(): ImportSystem | null;
    get importSystemPromise(): Promise<ImportSystem>;
    setImportSystem(importSystem: ImportSystem): Promise<void>;
    removeImportSystem(): Promise<void>;
    get extraJsxSystem(): ExtraJsxSystem;
    get extraJsxSystemNullable(): ExtraJsxSystem | null;
    get extraJsxSystemPromise(): Promise<ExtraJsxSystem>;
    setExtraJsxSystem(extraJsxSystem: ExtraJsxSystem): Promise<void>;
    removeExtraJsxSystem(): Promise<void>;
    get filepickSystem(): FilepickSystem;
    get filepickSystemNullable(): FilepickSystem | null;
    get filepickSystemPromise(): Promise<FilepickSystem>;
    setFilepickSystem(filepickSystem: FilepickSystem): Promise<void>;
    removeFilepickSystem(): Promise<void>;
    get fractalSystem(): FractalSystem;
    get fractalSystemNullable(): FractalSystem | null;
    get fractalSystemPromise(): Promise<FractalSystem>;
    setFractalSystem(fractalSystem: FractalSystem): Promise<void>;
    removeFractalSystem(): Promise<void>;
    get gamificationSystem(): GamificationSystem;
    get gamificationSystemNullable(): GamificationSystem | null;
    get gamificationSystemPromise(): Promise<GamificationSystem>;
    setGamificationSystem(gamificationSystem: GamificationSystem): Promise<void>;
    removeGamificationSystem(): Promise<void>;
    get generateSystem(): GenerateSystem;
    get generateSystemNullable(): GenerateSystem | null;
    get generateSystemPromise(): Promise<GenerateSystem>;
    setGenerateSystem(generateSystem: GenerateSystem): Promise<void>;
    removeGenerateSystem(): Promise<void>;
    get hintSystem(): HintSystem;
    get hintSystemNullable(): HintSystem | null;
    get hintSystemPromise(): Promise<HintSystem>;
    setHintSystem(hintSystem: HintSystem): Promise<void>;
    removeHintSystem(): Promise<void>;
    get identitySystem(): IdentitySystem;
    get identitySystemNullable(): IdentitySystem | null;
    get identitySystemPromise(): Promise<IdentitySystem>;
    setIdentitySystem(identitySystem: IdentitySystem): Promise<void>;
    removeIdentitySystem(): Promise<void>;
    get moduleStore(): ModuleStore;
    get moduleStoreNullable(): ModuleStore | null;
    get moduleStorePromise(): Promise<ModuleStore>;
    setModuleStore(moduleStore: ModuleStore): Promise<void>;
    removeModuleStore(): Promise<void>;
    get artSupportSyncer(): ArtSupportSyncer;
    get artSupportSyncerNullable(): ArtSupportSyncer | null;
    get artSupportSyncerPromise(): Promise<ArtSupportSyncer>;
    setArtSupportSyncer(artSupportSyncer: ArtSupportSyncer): Promise<void>;
    removeArtSupportSyncer(): Promise<void>;
    get attributeSupportSyncer(): AttributeSupportSyncer;
    get attributeSupportSyncerNullable(): AttributeSupportSyncer | null;
    get attributeSupportSyncerPromise(): Promise<AttributeSupportSyncer>;
    setAttributeSupportSyncer(attributeSupportSyncer: AttributeSupportSyncer): Promise<void>;
    removeAttributeSupportSyncer(): Promise<void>;
    get businessSyncer(): BusinessSyncer;
    get businessSyncerNullable(): BusinessSyncer | null;
    get businessSyncerPromise(): Promise<BusinessSyncer>;
    setBusinessSyncer(businessSyncer: BusinessSyncer): Promise<void>;
    removeBusinessSyncer(): Promise<void>;
    get cornerstoneSyncer(): CornerstoneSyncer;
    get cornerstoneSyncerNullable(): CornerstoneSyncer | null;
    get cornerstoneSyncerPromise(): Promise<CornerstoneSyncer>;
    setCornerstoneSyncer(cornerstoneSyncer: CornerstoneSyncer): Promise<void>;
    removeCornerstoneSyncer(): Promise<void>;
    get routeSyncer(): RouteSyncer;
    get routeSyncerNullable(): RouteSyncer | null;
    get routeSyncerPromise(): Promise<RouteSyncer>;
    setRouteSyncer(routeSyncer: RouteSyncer): Promise<void>;
    removeRouteSyncer(): Promise<void>;
    get storageSyncer(): StorageSyncer;
    get storageSyncerNullable(): StorageSyncer | null;
    get storageSyncerPromise(): Promise<StorageSyncer>;
    setStorageSyncer(storageSyncer: StorageSyncer): Promise<void>;
    removeStorageSyncer(): Promise<void>;
    get notificationSystem(): NotificationSystem;
    get notificationSystemNullable(): NotificationSystem | null;
    get notificationSystemPromise(): Promise<NotificationSystem>;
    setNotificationSystem(notificationSystem: NotificationSystem): Promise<void>;
    removeNotificationSystem(): Promise<void>;
    get pointerSystem(): PointerSystem;
    get pointerSystemNullable(): PointerSystem | null;
    get pointerSystemPromise(): Promise<PointerSystem>;
    setPointerSystem(pointerSystem: PointerSystem): Promise<void>;
    removePointerSystem(): Promise<void>;
    get routingSystem(): RoutingSystem;
    get routingSystemNullable(): RoutingSystem | null;
    get routingSystemPromise(): Promise<RoutingSystem>;
    setRoutingSystem(routingSystem: RoutingSystem): Promise<void>;
    removeRoutingSystem(): Promise<void>;
    get shortcutsSystem(): ShortcutsSystem;
    get shortcutsSystemNullable(): ShortcutsSystem | null;
    get shortcutsSystemPromise(): Promise<ShortcutsSystem>;
    setShortcutsSystem(shortcutsSystem: ShortcutsSystem): Promise<void>;
    removeShortcutsSystem(): Promise<void>;
    get snapSystem(): SnapSystem;
    get snapSystemNullable(): SnapSystem | null;
    get snapSystemPromise(): Promise<SnapSystem>;
    setSnapSystem(snapSystem: SnapSystem): Promise<void>;
    removeSnapSystem(): Promise<void>;
    get soundSystem(): SoundSystem;
    get soundSystemNullable(): SoundSystem | null;
    get soundSystemPromise(): Promise<SoundSystem>;
    setSoundSystem(soundSystem: SoundSystem): Promise<void>;
    removeSoundSystem(): Promise<void>;
    get storageSystem(): StorageSystem;
    get storageSystemNullable(): StorageSystem | null;
    get storageSystemPromise(): Promise<StorageSystem>;
    setStorageSystem(storageSystem: StorageSystem): Promise<void>;
    removeStorageSystem(): Promise<void>;
    get styleSystem(): StyleSystem;
    get styleSystemNullable(): StyleSystem | null;
    get styleSystemPromise(): Promise<StyleSystem>;
    setStyleSystem(styleSystem: StyleSystem): Promise<void>;
    removeStyleSystem(): Promise<void>;
    get toolbarSystem(): ToolbarSystem;
    get toolbarSystemNullable(): ToolbarSystem | null;
    get toolbarSystemPromise(): Promise<ToolbarSystem>;
    setToolbarSystem(toolbarSystem: ToolbarSystem): Promise<void>;
    removeToolbarSystem(): Promise<void>;
    get translationsSystem(): TranslationsSystem;
    get translationsSystemNullable(): TranslationsSystem | null;
    get translationsSystemPromise(): Promise<TranslationsSystem>;
    setTranslationsSystem(translationsSystem: TranslationsSystem): Promise<void>;
    removeTranslationsSystem(): Promise<void>;
    get voiceSystem(): VoiceSystem;
    get voiceSystemNullable(): VoiceSystem | null;
    get voiceSystemPromise(): Promise<VoiceSystem>;
    setVoiceSystem(voiceSystem: VoiceSystem): Promise<void>;
    removeVoiceSystem(): Promise<void>;
    get touchController(): TouchController;
    get touchControllerNullable(): TouchController | null;
    get touchControllerPromise(): Promise<TouchController>;
    setTouchController(touchController: TouchController): Promise<void>;
    removeTouchController(): Promise<void>;
    get artSerializer(): ArtSerializer;
    get artSerializerNullable(): ArtSerializer | null;
    get artSerializerPromise(): Promise<ArtSerializer>;
    setArtSerializer(artSerializer: ArtSerializer): Promise<void>;
    removeArtSerializer(): Promise<void>;
}
