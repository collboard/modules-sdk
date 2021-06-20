// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IDependenciesRecord } from './IDependencies';
/**
 * Install plan says what 1. modules are uninstalled and 2. what are installed by an installer
 *
 * @collboard-modules-sdk
 */
export interface IInstallPlan {
    uninstall: IDependenciesRecord;
    install: IDependenciesRecord;
}
