// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Promisable } from 'type-fest';
import { Vector } from 'xyzt';
import { Arrayable } from '../../../40-utils/typeHelpers';
import { Abstract2dArt } from '../../../71-arts/26-Abstract2dArt';
import { ISystems } from '../../00-SystemsContainer/ISystems';
import { IOngoingMaterialOperation } from '../../ArtVersionSystem/IOperation';
import { IModuleDefinition } from '../interfaces/IModule';
import { IModuleManifest } from '../interfaces/IModuleManifest/IModuleManifest';
/**
 * Internal module maker used by makeTrayModule (which gets exported and should be used)
 *
 * @not-collboard-modules-sdk
 */
export declare function makeTrayToolModule<TArt extends Abstract2dArt>(protoModule: {
    manifest?: IModuleManifest;
    getSelectedItemId(): string | null;
    isMouseOverToolbar(): boolean;
    newArtMaker(options: {
        itemId: string;
        boardPosition: Vector;
        systems: ISystems;
    }): Promisable<Arrayable<TArt> | IOngoingMaterialOperation>;
    getToolbarBodyRef(): HTMLDivElement | null;
}): IModuleDefinition;
/**
 * TODO: Add with click on tray
 */
