// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { AbstractSystem } from '../AbstractSystem';
/**
 * GenerateSystem is a kind of import system which allows us to import/create whole boards from other sources.
 * Note: CreateSystem - for individual arts, GenerateSystem - for whole board
 * Note: CreateSystem+GenerateSystem and ExportSystem are in some kind opposites.
 *
 * @private
 * @collboard-system
 */
export declare class GenerateSystem extends AbstractSystem {
    protected init(): Promise<void>;
}
