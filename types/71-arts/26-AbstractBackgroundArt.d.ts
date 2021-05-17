// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { CSSProperties } from 'react';
import { Transform } from 'xyzt';
import { AbstractEnvironmentArt } from './25-AbstractEnvironmentArt';
/**
 * This art holds information about a backgroud image of the board.
 *
 * @collboard-modules-sdk
 */
export declare abstract class AbstractBackgroundArt extends AbstractEnvironmentArt {
    z: number;
    /**
     * @param z Z-position of background. Currently unused
     */
    constructor(z?: number);
    /**
     * Getter with static CSS properties for the `<div class="board-bg">`
     * rendered within `BoardComponent`
     */
    abstract additionalStyle(): CSSProperties;
    /**
     * Getter with dynamic CSS properties for the `<div class="board-bg">`
     * rendered within `BoardComponent`
     *
     * @argument transform AppState board transform
     */
    transformStyle(transform: Transform): CSSProperties;
}
