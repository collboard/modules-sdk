// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { RequireAtLeastOne } from 'type-fest';
import { IMaterial } from './IMaterial';
/**
 * Appearance describes complete appearance of the art.
 * It can be one of the following:
 * - **IMaterial** when you want to use just a single material for every spots, edges and fills of the art
 * - **IAdvancedAppearance**, **IFullAdvancedAppearance** when you want to specify materials for different spots, edges and fills of the art
 *
 * 🟦🟦🟦🟦
 * 🟦🟦🟦🟦
 * 🟦🟦🟦🟦
 * 🟦🟦🟦🟦
 *
 * @collboard-modules-sdk
 */
export declare type IAppearance = IMaterial | IAdvancedAppearance | IFullAdvancedAppearance;
/**
 * Appearance when you want to specify materials for different spots, edges and fills of the art and set the default for the rest.
 * For example polygon with red edge and blue fill
 *
 * 🟥🟥🟥🟥
 * 🟥🟦🟦🟥
 * 🟥🟦🟦🟥
 * 🟥🟥🟥🟥
 *
 * @collboard-modules-sdk
 */
export declare type IAdvancedAppearance = RequireAtLeastOne<
    IFullAdvancedAppearance & {
        default: IMaterial;
    }
>;
/**
 * Appearance when you want to specify every material for different spots, edges and fills of the art.
 * For example polygon with red edge and blue fill
 *
 * ❎🟥🟥❎
 * 🟥🟦🟦🟥
 * 🟥🟦🟦🟥
 * ❎🟥🟥❎
 *
 * @collboard-modules-sdk
 */
export interface IFullAdvancedAppearance {
    spot: IMaterial;
    edge: IMaterial;
    fill: IMaterial;
}
/**
 * TODO: !! Appearance should be able to describe different mabterial for each spot/cap - same for different edge
 * TODO: What about bulk,... spot, edge, fill, bulk,...
 * TODO: [👨‍⚖️] !! Allow extending for specific arts> [index: string]: IMaterial
 */
