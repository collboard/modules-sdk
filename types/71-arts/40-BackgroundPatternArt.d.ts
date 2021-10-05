// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { CSSProperties } from 'react';
import { IVector, Transform } from 'xyzt';
import { string_url_image } from '../40-utils/typeAliases';
import { AbstractBackgroundArt } from './26-AbstractBackgroundArt';
/**
 * Art setting background with pattern style (scrolling)
 *
 * @collboard-modules-sdk
 */
export declare class BackgroundPatternArt extends AbstractBackgroundArt {
    src: string_url_image;
    size: IVector;
    opacity: number;
    /**
     * @param src Source of the background pattern tile
     * @param size Size of the background pattern tile
     * @param opacity Opacity applied to background image
     * @param z see `AbstractBackgroundArt`
     */
    constructor(src: string_url_image, size: IVector, opacity?: number, z?: number);
    additionalStyle(): CSSProperties;
    transformStyle(transform: Transform): CSSProperties;
}
