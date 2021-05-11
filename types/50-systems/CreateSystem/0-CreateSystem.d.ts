// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { AbstractSystem } from '../AbstractSystem';
/**
 * CreateSystem allows importing which allows to import/create arts from other sources.
 * Note: CreateSystem - for individual arts, GenerateSystem - for whole board
 * Note: CreateSystem+GenerateSystem and ExportSystem are in some kind opposites.
 *
 * @collboard-system
 */
export declare class CreateSystem extends AbstractSystem {
    protected init(): Promise<void>;
}
