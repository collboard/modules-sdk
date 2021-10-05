// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

/// <reference types="react" />
import { IModulePersister } from '../../../../../50-systems/ModuleStore/interfaces/IModulePersister';
import { IInstaller } from '../../../../../50-systems/ModuleStore/interfaces/IInstaller';
import { IModuleManifest } from '../../../../../50-systems/ModuleStore/interfaces/IModuleManifest';
interface IModuleStatusComponentProps {
    shownModule: IModuleManifest;
    installer: IInstaller;
    persister: IModulePersister;
}
export declare function ModuleStatusComponent({
    shownModule,
    installer,
    persister,
}: IModuleStatusComponentProps): JSX.Element;
export {};
