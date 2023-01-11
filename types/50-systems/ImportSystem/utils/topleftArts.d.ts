// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { AbstractPlacedArt } from '../../../71-arts/25-AbstractPlacedArt';
import { CollSpace } from '../../CollSpace/0-CollSpace';
interface ITopleftArtsOptions {
    arts: Array<AbstractPlacedArt>;
    collSpace: CollSpace;
}
/**
 * Moves given arts to be in top left position
 *
 * @sideeffect This will mutate passed arts
 *
 * @collboard-modules-sdk
 */
export declare function topleftArts({ arts, collSpace }: ITopleftArtsOptions): void;
export {};
/**
 * TODO: [🎼] Relation between topleftArts and centerArts
 * TODO: This should be done by LIB xyzt boundingBox and AbstractPlacedArt should implement interface IBoundingBox
 * TODO: Use rotation and scale we should probbably bahave isotropically and isometrically (pass here transform instead of center)
 */
