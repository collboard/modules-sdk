// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IDependenciesRecord } from '../../ModuleStore/interfaces/IDependencies';
import { IWelcomeTemplates } from './IWelcomeTemplates';
export interface IBusinessConfiguration {
    /**
     * Modules activated always (continually on welcome screen and board wihoud reactivation) for this business
     */
    alwaysRequiredModules: IDependenciesRecord;
    /**
     * Modules activated on welcome page
     */
    welcomeRequiredModules: IDependenciesRecord;
    /**
     * Templates which will be show on welcome page module modal
     */
    welcomeTemplates: IWelcomeTemplates;
    /**
     * Modules always activated on board that can not be deacivated or seen from module store
     * Theese modules will apper for user as integral part of the Collboard
     */
    boardRequiredModules: IDependenciesRecord;
    /**
     *  When there will be nothing in cornerstone (fresh board) what dependencies will be installed by CornerstoneSyncer.
     */
    boardActiveModules: IDependenciesRecord;
}
