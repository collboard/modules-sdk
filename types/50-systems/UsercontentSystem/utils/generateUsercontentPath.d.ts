// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="node" />
import { string_uri } from '../../../40-utils/typeAliases';
import { BusinessName } from '../../BusinessSystem/configuration/BusinessName';
interface IGenerateUsercontentPathOptions {
    name: string;
    type: string;
    content: Buffer;
    businessName: BusinessName;
}
/**
 * Generates a path for the user content.
 *
 */
export declare function generateUsercontentPath({
    name,
    type,
    content,
    businessName,
}: IGenerateUsercontentPathOptions): Promise<string_uri>;
export {};
/**
 * TODO: Efficient way how to garbage collect old files
 * TODO: Maybe saparate util countBufferHash
 * TODO: [🍁] Get rid of sjcl in whole project
 */
