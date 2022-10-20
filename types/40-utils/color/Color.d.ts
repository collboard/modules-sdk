// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_color, string_url_image } from '../typeAliases';
/**
 * Color object is represents rbg color with alpha chanell
 *
 * Note: there is nothing as fromObject and toObject because much better and most logic way how top serialize color is to serialize it to hex string #009EDD
 *
 * @collboard-modules-sdk
 *
 */
export declare class Color {
    readonly red: number;
    readonly green: number;
    readonly blue: number;
    readonly alpha: number;
    /**
     * Creates a new Color instance from miscellaneous formats
     * - It can receive Color instance and just return the same instance
     * - It can receive color in string format for example #009EDD, rgb(0,158,221), rgb(0%,62%,86.7%), hsl(197.1,100%,43.3%)
     *
     * Note: This is not including fromImage because detecting color from an image is heavy task which requires async stuff and we cannot safely determine with overloading if return value will be a promise
     *
     * @param color
     * @returns Color object
     */
    static from(color: string_color | Color): Color;
    /**
     * Creates a new Color instance from miscellaneous string formats
     *
     * @param color as a string for example #009EDD, rgb(0,158,221), rgb(0%,62%,86.7%), hsl(197.1,100%,43.3%), red, darkgrey,...
     * @returns Color object
     */
    static fromString(color: string_color): Color;
    /**
     * Creates a new Color instance from average color of given image
     *
     * @param image as a source for example data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdjYJh39z8ABJgCe/ZvAS4AAAAASUVORK5CYII=
     * @returns Color object
     */
    static fromImage(image: string_url_image): Promise<Color>;
    /**
     * Creates a new Color instance from color in hex format
     *
     * @param color in hex for example  #009EDD
     * @returns Color object
     */
    static fromHex(hex: string_color): Color;
    /**
     * Creates a new Color instance from color in hsl format
     *
     * @param color as a hsl for example  hsl(197.1,100%,43.3%)
     * @returns Color object
     */
    static fromHsl(hsl: string_color): Color;
    /**
     * Creates a new Color instance from color in rgb format
     *
     * @param color as a rgb for example rgb(0,158,221), rgb(0%,62%,86.7%)
     * @returns Color object
     */
    static fromRgbString(rgb: string_color): Color;
    /**
     * Creates a new Color instance from color in rbga format
     *
     * @param color as a rgba for example rgba(0,158,221,0.5), rgb(0%,62%,86.7%,50%)
     * @returns Color object
     */
    static fromRgbaString(rgba: string_color): Color;
    private constructor();
    withAlpha(alpha: number): Color;
    addLightness(delta: number): Color;
    get negative(): Color;
    get grayscale(): Color;
    withMutation(
        modifier: (red: number, green: number, blue: number, opacity: number) => [number, number, number, number],
    ): Color;
    clone(): Color;
    get opaque(): Color;
    get transparent(): Color;
    toString(): string_color;
    toHex(): string_color;
    toHsl(): string_color;
}
/**
 * TODO: Maybe [🏌️‍♂️] change ACRY toString => (toHex) toRbg when there will be toRgb and toRgba united
 * TODO: Convert getters to methods - getters only for values
 * TODO: Write tests
 * TODO: Getters for alpha, opacity, transparency, r,b,g,h,s,l,a,...,
 * TODO: [0] Should be fromRgbString and fromRgbaString one or two functions + one or two regex
 * TODO: Use rgb, rgba, hsl for testing and parsing and use SAME regex
 * TODO: Regex for rgb, rgba, hsl does not support all options like deg, rad, turn,...
 * TODO: Getters (like negative and grayscale) should be a static method - same as vector.half()
 * TODO: Random color
 * TODO: Convolution matrix
 * TODO: Maybe connect with textures
 */
