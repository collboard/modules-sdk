// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IVector } from 'xyzt';
import { string_url } from '../40-utils/typeAliases';
import { Abstract2dArt } from './26-Abstract2dArt';
/**
 * TODO: !! Import should be only LINK type so remove this and MATERIALIZE strategy move to frontend MimeSupportSystem
 *
 * @collboard-modules-sdk
 */
export declare enum ImportStrategy {
    Materialize = 'MATERIALIZE',
}
/**
 * ImportArt is art for importing external content into the board.
 * @see ExportArt implementation and comments before looking at this
 * Note: This is not in the internal module because some of the Arts are so tightly connected with the core that they need to be there, not in optionally deactivateable module.
 *
 * @collboard-modules-sdk
 */
export declare class ImportArt extends Abstract2dArt {
    source: string_url;
    strategy: ImportStrategy;
    /**
     *
     * @param source  should be pointed to URL compatible with ExportArt='NATIVE'
     * @param strategy should be import live-linked or just destroyed and converted to copyied objects?
     */
    constructor(source: string_url, strategy: ImportStrategy);
    get topLeftCorner(): import('xyzt').IVectorObject;
    get bottomRightCorner(): import('xyzt').IVectorObject;
    isNear(point2: IVector): boolean;
    get acceptedAttributes(): never[];
    render(selected: boolean): null;
}
/**
 * Note: number is just a file prefix to feep it on the top of file list.
 */
