// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IVectorData } from 'xyzt';
import { AbstractPlacedArt } from '../../../71-arts/25-AbstractPlacedArt';
/**
 * Note: This will mutate passed arts
 * TODO: Use rotation and scale we should probbably bahave isotropically and isometrically (pass here transform instead of center)
 *
 * @collboard-modules-sdk
 */
export declare function centerArts({
    arts,
    boardPosition,
}: {
    arts: AbstractPlacedArt[];
    boardPosition: IVectorData;
}): void;
/**
 * TODO: [🐽] Where is the best location for this function
 */
