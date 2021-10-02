// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { AbstractSystem } from '../AbstractSystem';
/**
 * FractalSystem can do procedurally generated part of the board - patterns, iterations, etc.
 * Modules can use it for creating the fractal boards or creating massive scales like sun and atoms by procedural generating.
 *
 * @private
 * @collboard-system
 */
export declare class FractalSystem extends AbstractSystem {
    protected init(): Promise<void>;
}
