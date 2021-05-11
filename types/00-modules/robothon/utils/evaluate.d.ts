// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { ISystems } from '../../../50-systems/00-SystemsContainer/ISystems';
import { FunctionBuilderArt } from '../modules/FunctionBuilderArtModule';
export declare function evaluate(
    art: FunctionBuilderArt,
    x: number,
    seenNodes: string[], // TODO: What this param menas
    systemsContainer: ISystems,
): number | null;
