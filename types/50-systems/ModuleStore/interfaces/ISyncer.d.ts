// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IDependenciesRecord } from './IDependencies';
import { IInstaller } from './IInstaller';
/**
 * Syncer watches some signal and sync (install/uninstall) modules according to it.
 * This signal can be for example activated modules in the cornerstone or route
 */
export interface ISyncer extends IInstaller {
    sync(dependenciesTarget: IDependenciesRecord): Promise<void>;
}
