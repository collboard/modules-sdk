// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { MaterialArtVersioningSystem } from '../../50-systems/ArtVersionSystem/0-MaterialArtVersioningSystem';
import { IOngoingMaterialOperation } from '../../50-systems/ArtVersionSystem/IOperation';
import { TextArt } from './TextArt';
/**
 * Create new text art operation
 *
 * Working with @singleton textOperations
 * @not-collboard-modules-sdk
 */
export declare function createTextOperation(
    materialArtVersioningSystem: MaterialArtVersioningSystem,
    art: TextArt,
): void;
/**
 * Gets ongoing operation with given TextArt OR create new one
 *
 * Working with @singleton textOperations
 * @not-collboard-modules-sdk
 */
export declare function getTextOperation(
    materialArtVersioningSystem: MaterialArtVersioningSystem,
    art: TextArt,
    isCreatedNewIfNotExist: boolean,
): IOngoingMaterialOperation | null;
/**
 * Abort and delete from list ongoing operation with given TextArt
 *
 * Working with @singleton textOperations
 * @not-collboard-modules-sdk
 */
export declare function abortTextOperation(operation: IOngoingMaterialOperation): void;
