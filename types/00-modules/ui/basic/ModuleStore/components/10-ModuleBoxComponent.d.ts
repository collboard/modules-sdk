// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

/// <reference types="react" />
import { IActivator } from '../../../../../50-systems/ModuleStore/interfaces/IActivator';
import { IInstaller } from '../../../../../50-systems/ModuleStore/interfaces/IInstaller';
import { IModuleManifest } from '../../../../../50-systems/ModuleStore/interfaces/IModuleManifest';
import { TranslationsSystem } from '../../../../../50-systems/TranslationsSystem/0-TranslationsSystem';
interface IModuleBoxComponentProps {
    shownModule: IModuleManifest;
    installer: IInstaller;
    activator: IActivator;
    translationsSystem: TranslationsSystem;
}
export declare function ModuleBoxComponent({
    shownModule,
    installer,
    activator,
    translationsSystem,
}: IModuleBoxComponentProps): JSX.Element;
export {};
