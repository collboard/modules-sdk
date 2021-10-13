// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { CSSProperties } from 'react';
export declare function transform(
    transformations: string[],
    origin?: {
        x: number;
        y: number;
    },
): CSSProperties;
export declare function translate(x: number, y: number): string;
export declare function rotate(deg: number): string;
export declare function scale(xOrBoth: number, y?: number): string;
