
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { Vector } from 'xyzt';
import { Commit } from './10-database/Commit';
import { Serializer } from './50-systems/Serializer/0-Serializer';
import { AbstractArt } from './71-arts/20-AbstractArt';
export declare type ISerializableTypes = Commit | AbstractArt | Vector;
export declare type ArtSerializer = Serializer<ISerializableTypes>;
export declare class CollBoardApp {
    private rootElement;
    private apiUrl;
    private systems;
    /**
     *
     * @param rootElement
     * @param apiUrl
     */
    constructor(rootElement: HTMLDivElement, apiUrl: string);
    private loadTranslator;
    private logVersions;
    private run;
    /**
     * TODO: !!  To some util which is destroyable and prepairs systems with a container as a whole
     */
    private changeVersioningSystems;
    private initConsoleAccess;
}
/**
TODO: This file is too big
 */

                  