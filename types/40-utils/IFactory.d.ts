// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/**
 * @collboard-modules-sdk
 */
export type Factory<TValue> = () => TValue;
/**
 * @collboard-modules-sdk
 */
export type Factorable<TValue> = TValue | Factory<TValue>;
/**
 *
 * @collboard-modules-sdk
 */
export declare function factor<Value>(valueOrFunction: Factorable<Value>): Value;
/**
 *
 * @collboard-modules-sdk
 */
export declare const NOT_CONSTRUCTABLE: unique symbol;
/**
 * TODO: Probably better name as Create/Creatable/factor
 */
