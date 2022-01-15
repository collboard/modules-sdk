// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
// tslint:disable
/// <reference path="../src/runtime/importImages.d.ts" />

import { IModule } from './50-systems/ModuleStore/interfaces/IModule';

export declare function declareModule(module: IModule): void;

// Note: bellow is all stuff marked with "@collboard SDK"
export * from './30-components/ArtScaler';
export * from './30-components/menu/Icon';
export * from './30-components/menu/icons';
export * from './30-components/menu/IIconAnonymous';
export * from './30-components/menu/Menu';
export * from './30-components/menu/Separator';
export * from './30-components/modal/CategorizedModal';
export * from './30-components/modal/Modal';
export * from './30-components/modal/ModalFooter';
export * from './30-components/modal/PageOverlay';
export * from './30-components/utils/AsyncButtonComponent';
export * from './30-components/utils/AsyncContentComponent';
export * from './30-components/utils/Clickable';
export * from './30-components/utils/CopyComponent';
export * from './30-components/utils/ErrorBoundary';
export * from './30-components/utils/Loader/Loader';
export * from './30-components/utils/Loader/LoaderInline';
export * from './30-components/utils/Loader/TextLoader';
export * from './30-components/utils/Obfuscate';
export * from './30-components/utils/ObservableContentComponent';
export * from './30-components/utils/QRCode';
export * from './30-components/utils/RefreshContentComponent';
export * from './30-components/utils/TestingSquare';
export * from './30-components/utils/UploadZone';
export * from './40-utils/Additional';
export * from './40-utils/blobToDataURI';
export * from './40-utils/capitalizeFirstLetter';
export * from './40-utils/classNames';
export * from './40-utils/color/Color';
export * from './40-utils/color/hslToRgb';
export * from './40-utils/color/rgbToHsl';
export * from './40-utils/create3dRotation';
export * from './40-utils/dialogues/alertDialogue';
export * from './40-utils/dialogues/confirmDialogue';
export * from './40-utils/dialogues/fileDialogue';
export * from './40-utils/dialogues/promptDialogue';
export * from './40-utils/enumToArray';
export * from './40-utils/errors/BoardAlreadyExistsError';
export * from './40-utils/errors/BoardNotFoundError';
export * from './40-utils/errors/CollisionError';
export * from './40-utils/errors/errorBoundary';
export * from './40-utils/errors/HighOrderError';
export * from './40-utils/errors/ModuleNotFoundError';
export * from './40-utils/errors/NotBoardError';
export * from './40-utils/errors/NotFoundError';
export * from './40-utils/flatternArray';
export * from './40-utils/getWindowSize';
export * from './40-utils/IFactory';
export * from './40-utils/IHandler';
export * from './40-utils/isEqualArray';
export * from './40-utils/isNumeric';
export * from './40-utils/isValidUriId';
export * from './40-utils/measureImageSize';
export * from './40-utils/normalizing/nameToUriPart';
export * from './40-utils/normalizing/normalize-to-kebab-case';
export * from './40-utils/normalizing/normalizeToCamelCase';
export * from './40-utils/normalizing/normalizeToSCREAMING_CASE';
export * from './40-utils/normalizing/parseKeywords';
export * from './40-utils/normalizing/removeDiacritics';
export * from './40-utils/normalizing/searchKeywords';
export * from './40-utils/randomEmoji';
export * from './40-utils/randomItem';
export * from './40-utils/randomString';
export * from './40-utils/randomUriId';
export * from './40-utils/scrapeContentFromUrl';
export * from './40-utils/sets/difference';
export * from './40-utils/Speech';
export * from './40-utils/svgUtils';
export * from './40-utils/tasks/Queue';
export * from './40-utils/tasks/ThrottleQueue';
export * from './40-utils/tasks/ThrottleQueues';
export * from './40-utils/toArray';
export * from './40-utils/toBabylon';
export * from './40-utils/typeAliases';
export * from './40-utils/typeHelpers';
export * from './50-systems/00-SystemsContainer/ISystems';
export * from './50-systems/ApiClient/0-ApiClient';
export * from './50-systems/ApiClient/BoardApiClient';
export * from './50-systems/AppState/0-AppState';
export * from './50-systems/ArtVersionSystem/0-MaterialArtVersioningSystem';
export * from './50-systems/ArtVersionSystem/0-VirtualArtVersioningSystem';
export * from './50-systems/AttributesSystem/0-AttributesSystem';
export * from './50-systems/BusinessSystem/0-BusinessSystem';
export * from './50-systems/BusinessSystem/configuration/BusinessName';
export * from './50-systems/ClosePreventionSystem/0-ClosePreventionSystem';
export * from './50-systems/CollSpace/0-CollSpace';
export * from './50-systems/CreateSystem/0-CreateSystem';
export * from './50-systems/ExportImportSystem/0-ExportSystem';
export * from './50-systems/ExportImportSystem/0-ImportSystem';
export * from './50-systems/ExtraJsxSystem/0-ExtraJsxSystem';
export * from './50-systems/FilepickSystem/0-FilepickSystem';
export * from './50-systems/FocusSystem/0-FocusSystem';
export * from './50-systems/FractalSystem/0-FractalSystem';
export * from './50-systems/GamificationSystem/0-GamificationSystem';
export * from './50-systems/GenerateSystem/0-GenerateSystem';
export * from './50-systems/HintSystem/0-HintSystem';
export * from './50-systems/IdentitySystem/0-IdentitySystem';
export * from './50-systems/ModuleStore/connectors/0-ModuleStore';
export * from './50-systems/ModuleStore/interfaces/IInstaller';
export * from './50-systems/ModuleStore/interfaces/IInstallPlan';
export * from './50-systems/ModuleStore/interfaces/IModule';
export * from './50-systems/ModuleStore/interfaces/IModuleManifest';
export * from './50-systems/ModuleStore/interfaces/IModulePersister';
export * from './50-systems/ModuleStore/interfaces/IModuleSearchCriteria';
export * from './50-systems/ModuleStore/interfaces/IModuleStatusReporter';
export * from './50-systems/ModuleStore/interfaces/IModuleStoreConnector';
export * from './50-systems/ModuleStore/interfaces/IModuleStoreConnectorSearchResult';
export * from './50-systems/ModuleStore/makers/makeArticlesSetModule';
export * from './50-systems/ModuleStore/makers/makeArtModule';
export * from './50-systems/ModuleStore/makers/makeAttributeModule';
export * from './50-systems/ModuleStore/makers/makeExtrajsxModule';
export * from './50-systems/ModuleStore/makers/makeIconModule';
export * from './50-systems/ModuleStore/makers/makeIconModuleOnModule';
export * from './50-systems/ModuleStore/makers/makeIconModuleOnRoute';
export * from './50-systems/ModuleStore/makers/makeModalModule';
export * from './50-systems/ModuleStore/makers/makeMultiModule';
export * from './50-systems/ModuleStore/makers/makeTrayModule';
export * from './50-systems/ModuleStore/Syncers/ArtSupportSyncer';
export * from './50-systems/ModuleStore/Syncers/AttributeSupportSyncer';
export * from './50-systems/ModuleStore/Syncers/CornerstoneSyncer';
export * from './50-systems/ModuleStore/Syncers/RouteAndBusinessSyncer';
export * from './50-systems/ModuleStore/Syncers/StorageSyncer';
export * from './50-systems/ModuleStore/utils/parseKeywordsFromManifest';
export * from './50-systems/NotificationSystem/0-NotificationSystem';
export * from './50-systems/PointerSystem/0-PointerSystem';
export * from './50-systems/RoutingSystem/0-RoutingSystem';
export * from './50-systems/ShortcutsSystem/0-ShortcutsSystem';
export * from './50-systems/SnapSystem/0-SnapSystem';
export * from './50-systems/SoundSystem/0-SoundSystem';
export * from './50-systems/StorageSystem/StorageSystem';
export * from './50-systems/StyleSystem/0-StyleSystem';
export * from './50-systems/StyleSystem/ISkin';
export * from './50-systems/StyleSystem/makers/makeSkinModule';
export * from './50-systems/ToolbarSystem/0-ToolbarSystem';
export * from './50-systems/TranslationsSystem/0-TranslationsSystem';
export * from './50-systems/TranslationsSystem/components/Translate';
export * from './50-systems/VoiceSystem/0-VoiceSystem';
export * from './71-arts/20-AbstractArt';
export * from './71-arts/25-AbstractEnvironmentArt';
export * from './71-arts/25-AbstractPlacedArt';
export * from './71-arts/25-AbstractUIArt';
export * from './71-arts/26-Abstract2dArt';
export * from './71-arts/26-AbstractBackgroundArt';
export * from './71-arts/27-Abstract2dBoxArt';
export * from './71-arts/28-AbstractTrayArt';
export * from './71-arts/30-CornerstoneArt';
export * from './71-arts/30-DeletedArt';
export * from './71-arts/35-ExportArt';
export * from './71-arts/35-ImportArt';
export * from './71-arts/40-BackgroundColorArt';
export * from './71-arts/40-BackgroundPatternArt';
export * from './71-arts/40-BackgroundWallpaperArt';
export * from './71-arts/50-FreehandArt';
export * from './71-arts/50-HTMLArt';
export * from './71-arts/50-ImageArt';
export * from './71-arts/50-LineArt';
export * from './71-arts/50-ShapeArt';
export * from './71-arts/50-TextArt';
export * from './72-tools/behaviors/IBehavoirProps';
export * from './72-tools/behaviors/selectionTool/_selectionToolBehavior';
export * from './72-tools/behaviors/selectionTool/selectionToolDraggingBehavior';
export * from './72-tools/behaviors/selectionTool/selectionToolScalingBehavior';
export * from './72-tools/behaviors/selectionTool/selectionToolSelectionBoxBehavior';
export * from './libraries';
