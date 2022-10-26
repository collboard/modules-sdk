// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { CSSProperties } from 'react';
import { Color } from '../40-utils/color/Color';
import { AbstractBackgroundArt } from './26-AbstractBackgroundArt';
/**
 * Art setting background with color style
 *
 * @collboard-modules-sdk
 */
export declare class BackgroundColorArt extends AbstractBackgroundArt {
    color: Color;
    static serializeName: string;
    static manifest: {
        name: string;
    };
    /**
     * @param color
     * @param z see `AbstractBackgroundArt`
     */
    constructor(color: Color, z?: number);
    additionalStyle(): CSSProperties;
    transformStyle(): CSSProperties;
}
/**
 * TODO: [🎚️] Implement IArt
 */
