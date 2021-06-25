// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IDependenciesRecord } from './IDependencies';
/**
 * Install plan says instruction how modules are installed
 *
 * 1. There are installed all default modules
 * 2. There are uninstalled all modules which are here listed as **uninstall**
 * 3. There are installed all modules which are here listed as **install**
 *
 * @collboard-modules-sdk
 */
export interface IInstallPlan {
    uninstall: IDependenciesRecord;
    install: IDependenciesRecord;
}
