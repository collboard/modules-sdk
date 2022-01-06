// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
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
