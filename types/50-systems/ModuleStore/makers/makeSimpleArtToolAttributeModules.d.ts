// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IShape } from '../../CollSpace/IShape';
import { IModuleDefinition } from '../interfaces/IModule';
import { IAppearance } from './../../CollSpace/appearance/IAppearance';
import { IMakeFunctionalArtModuleOptions } from './art/30-makeFunctionalArtModule';
interface ISimpleArtToolAttributeModulesOptions<
    TShape extends IShape = IShape,
    TAppearance extends IAppearance = IAppearance,
> extends IMakeFunctionalArtModuleOptions<TShape, TAppearance> {}
/**
 * @@@
 *
 * @param options @@@
 * @returns @@@
 *
 * @collboard-modules-sdk
 */
export declare function makeSimpleArtToolAttributeModules<
    TShape extends IShape = IShape,
    TAppearance extends IAppearance = IAppearance,
>(options: ISimpleArtToolAttributeModulesOptions<TShape, TAppearance>): [IModuleDefinition, IModuleDefinition];
export {};
/**
 * TODO: !!! Should be in the maker name attribute? If no rename also in 0-samples
 * TODO: !!! Some makers does not return ModuleDefinition but Art or multiple modules, (and things like proposed makeSimpleIcon), should they be called makers
 * TODO: !!!! pass here art module and not JSX component (and if you want to pass JSX, use two makers)
 * TODO: !!! Extract from here makeArtModule
 * TODO: !!! [0] Do we need attribute
 * TODO: Make this helper function for just a canvas (and babylon)
 * TODO: !!! Better name than options
 * TODO: !!! Better name
 * TODO: !!! Use or not to use simple prefix in maker
 */
