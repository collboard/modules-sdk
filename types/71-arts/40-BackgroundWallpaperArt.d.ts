// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { CSSProperties } from 'react';
import { string_url_image } from '../40-utils/typeAliases';
import { AbstractBackgroundArt } from './26-AbstractBackgroundArt';
/**
 * Art setting background with wallpaper style (not scrolling)
 *
 * @collboard-modules-sdk
 */
export declare class BackgroundWallpaperArt extends AbstractBackgroundArt {
    src: string_url_image;
    /**
     * @param src Source of the background pattern tile
     * @param z see `AbstractBackgroundArt`
     */
    constructor(src: string_url_image, z?: number);
    additionalStyle(): CSSProperties;
    transformStyle(): CSSProperties;
}
