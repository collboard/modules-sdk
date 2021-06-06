// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

/// <reference types="react" />
import { IActivator } from '../../../../../50-systems/ModuleStore/interfaces/IActivator';
import { IInstaller } from '../../../../../50-systems/ModuleStore/interfaces/IInstaller';
import { IModuleManifest } from '../../../../../50-systems/ModuleStore/interfaces/IModuleManifest';
interface IModuleStatusComponentProps {
    shownModule: IModuleManifest;
    installer: IInstaller;
    activator: IActivator;
}
export declare function ModuleStatusComponent({
    shownModule,
    installer,
    activator,
}: IModuleStatusComponentProps): JSX.Element;
export {};
