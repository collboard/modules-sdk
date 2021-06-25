// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

/// <reference types="react" />
import { IInstaller } from '../../../../../50-systems/ModuleStore/interfaces/IInstaller';
import { IModuleManifest } from '../../../../../50-systems/ModuleStore/interfaces/IModuleManifest';
import { IModulePersister } from '../../../../../50-systems/ModuleStore/interfaces/IModulePersister';
import { TranslationsSystem } from '../../../../../50-systems/TranslationsSystem/0-TranslationsSystem';
interface IModuleBoxComponentProps {
    shownModule: IModuleManifest;
    installer: IInstaller;
    persister: IModulePersister;
    translationsSystem: TranslationsSystem;
}
export declare function ModuleBoxComponent({
    shownModule,
    installer,
    persister,
    translationsSystem,
}: IModuleBoxComponentProps): JSX.Element;
export {};
