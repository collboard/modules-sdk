// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IAppearance } from '../../CollSpace/appearance/IAppearance';
import { IShape } from '../../CollSpace/IShape';
import { IModuleDefinition } from '../interfaces/IModule';
import { IMakeFunctionalArtModuleOptions } from './art/30-makeFunctionalArtModule';
interface ISimpleArtoatModulesOptions<TShape extends IShape = IShape, TAppearance extends IAppearance = IAppearance>
    extends IMakeFunctionalArtModuleOptions<TShape, TAppearance> {}
/**
 * @@x
 *
 * @param options @@x
 * @returns @@x
 *
 * @collboard-modules-sdk
 */
export declare function makeSimpleArtoolModules<
    TShape extends IShape = IShape,
    TAppearance extends IAppearance = IAppearance,
>(options: ISimpleArtoatModulesOptions<TShape, TAppearance>): [IModuleDefinition, IModuleDefinition];
export { };
/**
 * TODO: !!x Should be in the maker name attribute? If no rename also in 0-samples
 * TODO: !!x Some makers does not return ModuleDefinition but Art or multiple modules, (and things like proposed makeSimpleIcon), should they be called makers
 * TODO: !!x! pass here art module and not JSX component (and if you want to pass JSX, use two makers)
 * TODO: !!x Extract from here makeArtModule
 * TODO: !!x [0] Do we need attribute
 * TODO: Make this helper function for just a canvas (and babylon)
 * TODO: !!x Better name than options
 * TODO: !!x Better name
 * TODO: !!x Use or not to use simple prefix in maker
 */
