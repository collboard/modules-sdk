// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { ISystems } from '../50-systems/00-SystemsContainer/ISystems';
/**
 * @collboard-modules-sdk
 */
export declare type IFactorableWithSystems<T> = T | ((systems: ISystems) => T);
/**
 *
 * @collboard-modules-sdk
 */
export declare function factorWithSystems<T>(valueOrFunction: IFactorableWithSystems<T>, systems: ISystems): T;
/**
 * TODO: Use IFactorableWithSystems + factorWithSystems across the code
 * TODO: Maybe better name as Create/Creatable/factor
 */
