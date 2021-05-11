// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IDependenciesRecord } from './IDependencies';
import { IInstaller } from './IInstaller';
export interface ISyncer extends IInstaller {
    sync(dependenciesTarget: IDependenciesRecord): Promise<void>;
}
