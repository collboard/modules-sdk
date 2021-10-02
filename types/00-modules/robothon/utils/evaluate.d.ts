// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { MaterialArtVersioningSystem } from '../../../50-systems/ArtVersionSystem/0-MaterialArtVersioningSystem';
import { FunctionBuilderArt } from '../modules/FunctionBuilderArtModule';
export declare function evaluate(
    art: FunctionBuilderArt,
    x: number,
    seenNodes: string[], // TODO: What this param menas
    materialArtVersioningSystem: MaterialArtVersioningSystem,
): number | null;
