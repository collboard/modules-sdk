// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { ISerializable } from 'everstorage';
import { ISerializer } from '../interfaces/ISerializer';
interface IDeepCloneOptions<TCloned extends ISerializable> {
    serializer: ISerializer<TCloned>;
    value: TCloned;
}
/**Route
 * Deeply clones object by serializing and deserializing it.
 *
 * @param instance to be clonned
 * @returns new instance of the same class with same data
 */
export declare function deepClone<TCloned extends ISerializable>(options: IDeepCloneOptions<TCloned>): Promise<TCloned>;
export {};
/**
 * TODO Use instead of deepClone the native structuredClone
 */
