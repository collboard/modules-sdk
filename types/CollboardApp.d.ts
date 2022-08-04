// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Vector } from 'xyzt';
import { Commit } from './10-database/Commit';
import { ICommitData } from './10-database/interfaces/ICommitData';
import { string_translate_language, string_url } from './40-utils/typeAliases';
import { Serializer } from './50-systems/Serializer/0-Serializer';
import { AbstractArt } from './71-arts/20-AbstractArt';
interface ICollboardAppOptions {
    rootElement: HTMLDivElement;
    language: string_translate_language;
    apiUrl: string_url;
    moduleStoreUrl: string_url;
    proxyUrl: string_url;
    usercontentUrl: string_url;
}
export declare type ISerializableTypes = Commit | ICommitData | AbstractArt | Vector;
export declare type ArtSerializer = Serializer<ISerializableTypes>;
export declare class CollboardApp {
    private readonly options;
    private systems;
    constructor(options: ICollboardAppOptions);
    private loadTranslator;
    private logVersions;
    private render;
    private setupModuleStore;
    private run;
    private forEssencialSystemsAndItsParts;
    /**
     * TODO: !!  To some util which is destroyable and prepairs systems with a container as a whole
     */
    private changeVersioningSystems;
}
export {};
/**
 * TODO: This file is too big - maybe print on paper and split into multiple logical pieces + use Core(system) as a place
 * TODO: Join app and createApp
 *
 */
