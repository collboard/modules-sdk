// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { ITakeChain } from './interfaces/ITakeChain';
import { Takeable } from './interfaces/Takeable';
export declare function take<TValue extends Takeable>(initialValue: TValue): TValue & ITakeChain<TValue>;
/**
 * TODO: Optimize
 * TODO: Collision with lodash take utility
 * TODO: Better work with primitives
 * TODO: [🏌️‍♂️] Collision of TakeChain method names with initialValue subobjects property names
 * TODO: To documentation how to access deep proxy subobjects> .then(({ object }) => object)
 */
