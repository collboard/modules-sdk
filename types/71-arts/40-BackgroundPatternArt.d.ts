// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

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
    static serializeName: string;
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
