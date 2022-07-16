// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
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
import { ExportSystem } from './../ExportSystem/0-ExportSystem';
import { FilepickSystem } from './../FilepickSystem/0-FilepickSystem';
import { FocusSystem } from './../FocusSystem/0-FocusSystem';
import { FractalSystem } from './../FractalSystem/0-FractalSystem';
import { GamificationSystem } from './../GamificationSystem/0-GamificationSystem';
import { GenerateSystem } from './../GenerateSystem/0-GenerateSystem';
import { HintSystem } from './../HintSystem/0-HintSystem';
import { IdentitySystem } from './../IdentitySystem/0-IdentitySystem';
import { ImportSystem } from './../ImportSystem/0-ImportSystem';
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
import { UsercontentSystem } from './../UsercontentSystem/0-UsercontentSystem';
import { UserInterfaceSystem } from './../UserInterfaceSystem/0-UserInterfaceSystem';
import { VoiceSystem } from './../VoiceSystem/0-VoiceSystem';
import { ISystemsExtended, ISystemsMethods } from './ISystems';
import { ISystemsResolved } from './ISystemsResolved';
/**
 * TODO: Protected systems and permissions
 */
export declare class SystemsContainer implements ISystemsExtended {
    /**
     * Request to use systems in the module
     *
     * @param requestedSystemsNames Names of requested systems
     * @returns Promise of all record object which contains all requested systems which will be resolved after permissions are granted
     */
    request<T extends keyof Omit<ISystemsExtended, ISystemsMethods>>(
        ...requestedSystemsNames: Array<T>
    ): Promise<Pick<ISystemsResolved, T>>;
    /**
     * Use previously requested systems
     *
     * Note: You need first to request the systems you want to use
     *
     * @param requestedSystemsNames Names of requested systems
     * @returns record object which contains all requested systems
     */
    use<T extends keyof Omit<ISystemsExtended, ISystemsMethods>>(
        ...requestedSystemsNames: Array<T>
    ): Pick<ISystemsResolved, T>;
    /**
     * Generator: Systems
     * Omit: Serializer
     * Add: TouchController,ArtSerializer
     * Pattern: private readonly <system>Subject = new BehaviorSubject<<System> | null>(null);
     */
    private readonly apiClientSubject;
    private readonly boardApiClientSubject;
    private readonly appStateSubject;
    private readonly materialArtVersioningSystemSubject;
    private readonly virtualArtVersioningSystemSubject;
    private readonly attributesSystemSubject;
    private readonly businessSystemSubject;
    private readonly closePreventionSystemSubject;
    private readonly collSpaceSubject;
    private readonly controlSystemSubject;
    private readonly createSystemSubject;
    private readonly exportSystemSubject;
    private readonly filepickSystemSubject;
    private readonly focusSystemSubject;
    private readonly fractalSystemSubject;
    private readonly gamificationSystemSubject;
    private readonly generateSystemSubject;
    private readonly hintSystemSubject;
    private readonly identitySystemSubject;
    private readonly importSystemSubject;
    private readonly licenseSystemSubject;
    private readonly moduleStoreSubject;
    private readonly artSupportSyncerSubject;
    private readonly attributeSupportSyncerSubject;
    private readonly cornerstoneSyncerSubject;
    private readonly fileSupportSyncerSubject;
    private readonly routeAndBusinessSyncerSubject;
    private readonly notificationSystemSubject;
    private readonly pointerSystemSubject;
    private readonly routingSystemSubject;
    private readonly snapSystemSubject;
    private readonly soundSystemSubject;
    private readonly storageSystemSubject;
    private readonly styleSystemSubject;
    private readonly toolbarSystemSubject;
    private readonly translationsSystemSubject;
    private readonly usercontentSystemSubject;
    private readonly userInterfaceSystemSubject;
    private readonly voiceSystemSubject;
    private readonly touchControllerSubject;
    private readonly artSerializerSubject;
    /**
* Generator: Systems
* Omit: Serializer
* Add: TouchController,ArtSerializer
* Pattern:

public get <system>(): Promise<<System>> {
return this.<system>Subject.value
? Promise.resolve(this.<system>Subject.value)
: new Promise((resolve) => {
const subscription = this.<system>Subject.subscribe((<system>) => {
if (<system>) {
subscription.unsubscribe();
resolve(<system>);
}
});
});
}

public async set<System>(<system>: <System>| null) {
if(this.<system>Subject.value){
if(<system>){
consolex.warn(`<System> is going to be set twice to SystemsContainer.`);
}
await this.<system>Subject.value.destroy();
}
this.<system>Subject.next(<system>);
}

// ----
*/
    get apiClient(): Promise<ApiClient>;
    setApiClient(apiClient: ApiClient | null): Promise<void>;
    get boardApiClient(): Promise<BoardApiClient>;
    setBoardApiClient(boardApiClient: BoardApiClient | null): Promise<void>;
    get appState(): Promise<AppState>;
    setAppState(appState: AppState | null): Promise<void>;
    get materialArtVersioningSystem(): Promise<MaterialArtVersioningSystem>;
    setMaterialArtVersioningSystem(materialArtVersioningSystem: MaterialArtVersioningSystem | null): Promise<void>;
    get virtualArtVersioningSystem(): Promise<VirtualArtVersioningSystem>;
    setVirtualArtVersioningSystem(virtualArtVersioningSystem: VirtualArtVersioningSystem | null): Promise<void>;
    get attributesSystem(): Promise<AttributesSystem>;
    setAttributesSystem(attributesSystem: AttributesSystem | null): Promise<void>;
    get businessSystem(): Promise<BusinessSystem>;
    setBusinessSystem(businessSystem: BusinessSystem | null): Promise<void>;
    get closePreventionSystem(): Promise<ClosePreventionSystem>;
    setClosePreventionSystem(closePreventionSystem: ClosePreventionSystem | null): Promise<void>;
    get collSpace(): Promise<CollSpace>;
    setCollSpace(collSpace: CollSpace | null): Promise<void>;
    get controlSystem(): Promise<ControlSystem>;
    setControlSystem(controlSystem: ControlSystem | null): Promise<void>;
    get createSystem(): Promise<CreateSystem>;
    setCreateSystem(createSystem: CreateSystem | null): Promise<void>;
    get exportSystem(): Promise<ExportSystem>;
    setExportSystem(exportSystem: ExportSystem | null): Promise<void>;
    get filepickSystem(): Promise<FilepickSystem>;
    setFilepickSystem(filepickSystem: FilepickSystem | null): Promise<void>;
    get focusSystem(): Promise<FocusSystem>;
    setFocusSystem(focusSystem: FocusSystem | null): Promise<void>;
    get fractalSystem(): Promise<FractalSystem>;
    setFractalSystem(fractalSystem: FractalSystem | null): Promise<void>;
    get gamificationSystem(): Promise<GamificationSystem>;
    setGamificationSystem(gamificationSystem: GamificationSystem | null): Promise<void>;
    get generateSystem(): Promise<GenerateSystem>;
    setGenerateSystem(generateSystem: GenerateSystem | null): Promise<void>;
    get hintSystem(): Promise<HintSystem>;
    setHintSystem(hintSystem: HintSystem | null): Promise<void>;
    get identitySystem(): Promise<IdentitySystem>;
    setIdentitySystem(identitySystem: IdentitySystem | null): Promise<void>;
    get importSystem(): Promise<ImportSystem>;
    setImportSystem(importSystem: ImportSystem | null): Promise<void>;
    get licenseSystem(): Promise<LicenseSystem>;
    setLicenseSystem(licenseSystem: LicenseSystem | null): Promise<void>;
    get moduleStore(): Promise<ModuleStore>;
    setModuleStore(moduleStore: ModuleStore | null): Promise<void>;
    get artSupportSyncer(): Promise<ArtSupportSyncer>;
    setArtSupportSyncer(artSupportSyncer: ArtSupportSyncer | null): Promise<void>;
    get attributeSupportSyncer(): Promise<AttributeSupportSyncer>;
    setAttributeSupportSyncer(attributeSupportSyncer: AttributeSupportSyncer | null): Promise<void>;
    get cornerstoneSyncer(): Promise<CornerstoneSyncer>;
    setCornerstoneSyncer(cornerstoneSyncer: CornerstoneSyncer | null): Promise<void>;
    get fileSupportSyncer(): Promise<FileSupportSyncer>;
    setFileSupportSyncer(fileSupportSyncer: FileSupportSyncer | null): Promise<void>;
    get routeAndBusinessSyncer(): Promise<RouteAndBusinessSyncer>;
    setRouteAndBusinessSyncer(routeAndBusinessSyncer: RouteAndBusinessSyncer | null): Promise<void>;
    get notificationSystem(): Promise<NotificationSystem>;
    setNotificationSystem(notificationSystem: NotificationSystem | null): Promise<void>;
    get pointerSystem(): Promise<PointerSystem>;
    setPointerSystem(pointerSystem: PointerSystem | null): Promise<void>;
    get routingSystem(): Promise<RoutingSystem>;
    setRoutingSystem(routingSystem: RoutingSystem | null): Promise<void>;
    get snapSystem(): Promise<SnapSystem>;
    setSnapSystem(snapSystem: SnapSystem | null): Promise<void>;
    get soundSystem(): Promise<SoundSystem>;
    setSoundSystem(soundSystem: SoundSystem | null): Promise<void>;
    get storageSystem(): Promise<StorageSystem>;
    setStorageSystem(storageSystem: StorageSystem | null): Promise<void>;
    get styleSystem(): Promise<StyleSystem>;
    setStyleSystem(styleSystem: StyleSystem | null): Promise<void>;
    get toolbarSystem(): Promise<ToolbarSystem>;
    setToolbarSystem(toolbarSystem: ToolbarSystem | null): Promise<void>;
    get translationsSystem(): Promise<TranslationsSystem>;
    setTranslationsSystem(translationsSystem: TranslationsSystem | null): Promise<void>;
    get usercontentSystem(): Promise<UsercontentSystem>;
    setUsercontentSystem(usercontentSystem: UsercontentSystem | null): Promise<void>;
    get userInterfaceSystem(): Promise<UserInterfaceSystem>;
    setUserInterfaceSystem(userInterfaceSystem: UserInterfaceSystem | null): Promise<void>;
    get voiceSystem(): Promise<VoiceSystem>;
    setVoiceSystem(voiceSystem: VoiceSystem | null): Promise<void>;
    get touchController(): Promise<TouchController>;
    setTouchController(touchController: TouchController | null): Promise<void>;
    get artSerializer(): Promise<ArtSerializer>;
    setArtSerializer(artSerializer: ArtSerializer | null): Promise<void>;
}
