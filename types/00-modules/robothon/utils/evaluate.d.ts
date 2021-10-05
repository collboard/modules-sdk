// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { MaterialArtVersioningSystem } from '../../../50-systems/ArtVersionSystem/0-MaterialArtVersioningSystem';
import { FunctionBuilderArt } from '../modules/FunctionBuilderArtModule';
export declare function evaluate(
    art: FunctionBuilderArt,
    x: number,
    seenNodes: string[], // TODO: What this param menas
    materialArtVersioningSystem: MaterialArtVersioningSystem,
): number | null;
