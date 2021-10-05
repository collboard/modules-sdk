// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

/// <reference types="react" />
import { IVector, Vector } from 'xyzt';
import { ISystems } from '../../../50-systems/00-SystemsContainer/ISystems';
import { MaterialArtVersioningSystem } from '../../../50-systems/ArtVersionSystem/0-MaterialArtVersioningSystem';
import { CollSpace } from '../../../50-systems/CollSpace/0-CollSpace';
import { Abstract2dArt } from '../../../71-arts/26-Abstract2dArt';
import { FunctionBuilderDefinition } from '../interfaces/FunctionBuilderFunction';
import '../style.css';
export declare class FunctionBuilderArt extends Abstract2dArt {
    shift: IVector;
    private funct;
    __pointerOverOutput: boolean;
    __pointerOverInput: {
        [key: string]: boolean;
    };
    private __outputRef;
    private __inputRefs;
    private __lastPlotted;
    connections: {
        [key: string]: string | null;
    };
    private privateSize;
    color: string;
    constant: number | null;
    constructor(shift: IVector, funct: string);
    acceptedAttributes: never[];
    get topLeftCorner(): Vector;
    get bottomRightCorner(): Vector;
    get functionDefinition(): FunctionBuilderDefinition | null;
    registerInputIfOver(sourceId: string, position: Vector): void;
    private recountPointerOverInputByPosition;
    private clearAllPointerOverInputs;
    private locateRef;
    getOutputPosition(collSpace: CollSpace): Vector;
    getInputPosition(key: string, collSpace: CollSpace): Vector;
    evaluate(x: number, seenNodes: string[], materialArtVersioningSystem: MaterialArtVersioningSystem): number | null;
    render(_selected: boolean, systems: ISystems): Promise<JSX.Element>;
}
