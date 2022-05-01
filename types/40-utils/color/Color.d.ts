// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_color } from '../typeAliases';
/**
 * @collboard-modules-sdk
 */
export declare class Color {
    readonly red: number;
    readonly green: number;
    readonly blue: number;
    readonly alpha: number;
    static fromHex(hex: string_color): Color;
    static from(color: string_color | Color): Color;
    private constructor();
    withAlpha(alpha: number): Color;
    addLightness(delta: number): Color;
    /**
     * TODO: This should be a static method - same as vector.half()
     */
    get negative(): Color;
    withMutation(
        modifier: (red: number, green: number, blue: number, opacity: number) => [number, number, number, number],
    ): Color;
    clone(): Color;
    toString(): string_color;
    get opaque(): Color;
    get rgb(): string_color;
    get hsl(): string_color;
    static aliceblue: Color;
    static antiquewhite: Color;
    static aqua: Color;
    static aquamarine: Color;
    static azure: Color;
    static beige: Color;
    static bisque: Color;
    static black: Color;
    static blanchedalmond: Color;
    static blue: Color;
    static blueviolet: Color;
    static brown: Color;
    static burlywood: Color;
    static cadetblue: Color;
    static chartreuse: Color;
    static chocolate: Color;
    static coral: Color;
    static cornflowerblue: Color;
    static cornsilk: Color;
    static crimson: Color;
    static cyan: Color;
    static darkblue: Color;
    static darkcyan: Color;
    static darkgoldenrod: Color;
    static darkgray: Color;
    static darkgrey: Color;
    static darkgreen: Color;
    static darkkhaki: Color;
    static darkmagenta: Color;
    static darkolivegreen: Color;
    static darkorange: Color;
    static darkorchid: Color;
    static darkred: Color;
    static darksalmon: Color;
    static darkseagreen: Color;
    static darkslateblue: Color;
    static darkslategray: Color;
    static darkslategrey: Color;
    static darkturquoise: Color;
    static darkviolet: Color;
    static deeppink: Color;
    static deepskyblue: Color;
    static dimgray: Color;
    static dimgrey: Color;
    static dodgerblue: Color;
    static firebrick: Color;
    static floralwhite: Color;
    static forestgreen: Color;
    static fuchsia: Color;
    static gainsboro: Color;
    static ghostwhite: Color;
    static gold: Color;
    static goldenrod: Color;
    static gray: Color;
    static grey: Color;
    static green: Color;
    static greenyellow: Color;
    static honeydew: Color;
    static hotpink: Color;
    static indianred: Color;
    static indigo: Color;
    static ivory: Color;
    static khaki: Color;
    static lavender: Color;
    static lavenderblush: Color;
    static lawngreen: Color;
    static lemonchiffon: Color;
    static lightblue: Color;
    static lightcoral: Color;
    static lightcyan: Color;
    static lightgoldenrodyellow: Color;
    static lightgray: Color;
    static lightgrey: Color;
    static lightgreen: Color;
    static lightpink: Color;
    static lightsalmon: Color;
    static lightseagreen: Color;
    static lightskyblue: Color;
    static lightslategray: Color;
    static lightslategrey: Color;
    static lightsteelblue: Color;
    static lightyellow: Color;
    static lime: Color;
    static limegreen: Color;
    static linen: Color;
    static magenta: Color;
    static maroon: Color;
    static mediumaquamarine: Color;
    static mediumblue: Color;
    static mediumorchid: Color;
    static mediumpurple: Color;
    static mediumseagreen: Color;
    static mediumslateblue: Color;
    static mediumspringgreen: Color;
    static mediumturquoise: Color;
    static mediumvioletred: Color;
    static midnightblue: Color;
    static mintcream: Color;
    static mistyrose: Color;
    static moccasin: Color;
    static navajowhite: Color;
    static navy: Color;
    static oldlace: Color;
    static olive: Color;
    static olivedrab: Color;
    static orange: Color;
    static orangered: Color;
    static orchid: Color;
    static palegoldenrod: Color;
    static palegreen: Color;
    static paleturquoise: Color;
    static palevioletred: Color;
    static papayawhip: Color;
    static peachpuff: Color;
    static peru: Color;
    static pink: Color;
    static plum: Color;
    static powderblue: Color;
    static purple: Color;
    static rebeccapurple: Color;
    static red: Color;
    static rosybrown: Color;
    static royalblue: Color;
    static saddlebrown: Color;
    static salmon: Color;
    static sandybrown: Color;
    static seagreen: Color;
    static seashell: Color;
    static sienna: Color;
    static silver: Color;
    static skyblue: Color;
    static slateblue: Color;
    static slategray: Color;
    static slategrey: Color;
    static snow: Color;
    static springgreen: Color;
    static steelblue: Color;
    static tan: Color;
    static teal: Color;
    static thistle: Color;
    static tomato: Color;
    static turquoise: Color;
    static violet: Color;
    static wheat: Color;
    static white: Color;
    static whitesmoke: Color;
    static yellow: Color;
    static yellowgreen: Color;
}
/**
 * TODO: Random color
 */
