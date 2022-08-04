// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { ISystemsExtended, ISystemsMethods } from '../../00-SystemsContainer/ISystems';
import { IModuleSignature } from '../../ArtVersionSystem/IModuleSignature';
interface IParseMessageEventResult {
    requestId?: string | number;
    moduleSignature: IModuleSignature;
    systemName: keyof Omit<ISystemsExtended, ISystemsMethods>;
    actionName: string;
    options: any;
}
export declare function parseMessageEvent(event: MessageEvent): IParseMessageEventResult;
export {};
/**
 * TODO: Maybe use compileAsync
 * TODO: [👨‍👨‍👦‍👦] What is the right version to use for the schema? Currently 2020-12
 */
