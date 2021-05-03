
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { CSSProperties } from 'react';
import { Transform } from 'xyzt';
import { AbstractEnvironmentArt } from './25-AbstractEnvironmentArt';
/**
 * This art will in future changes backgroud image of the board.
 *
 * @collboard SDK
 */
export declare abstract class AbstractBackgroundArt extends AbstractEnvironmentArt {
    z: number;
    constructor(z?: number);
    abstract additionalStyle(): CSSProperties;
    transformStyle(transform: Transform): CSSProperties;
    get acceptedAttributes(): never[];
}

                  