// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IArt } from '../../../../50-systems/CollSpace/IArt';
import { IAppearance } from '../../../CollSpace/appearance/IAppearance';
import { IArtData } from '../../../CollSpace/IArtData';
import { IShape } from '../../../CollSpace/IShape';
import { IModuleDefinition } from '../../interfaces/IModule';
import { IModuleManifest } from '../../interfaces/IModuleManifest/IModuleManifest';
export declare type IArtModuleDefinition<
    TShape extends IShape = IShape,
    TAppearance extends IAppearance = IAppearance,
> = IModuleDefinition & /* TODO: !!x Remove IMakeFunctionalArtModuleOptions<TShape, TAppearance>*/ {
    /**
     * @@x
     * TODO: !!x to ICommonMakerOptions
     */
    manifest: IModuleManifest;
    /**
     * @@x
     */
    createArt(artData: IArtData<TShape, TAppearance>): IArt<TShape, TAppearance>;
};
export interface IMakeFunctionalArtModuleOptions<
    TShape extends IShape = IShape,
    TAppearance extends IAppearance = IAppearance,
> {
    /**
     * @@x
     * TODO: !!x to ICommonMakerOptions
     */
    manifest: IModuleManifest;
    /**
     * @@x
     */
    createArt(artData: IArtData<TShape, TAppearance>): Omit<IArt<TShape, TAppearance>, 'artId' | 'moduleName'>;
}
/**
 * @@x
 *
 * Note: Module still needs to be declared
 * @collboard-modules-sdk
 */
export declare function makeFunctionalArtModule<
    TShape extends IShape = IShape,
    TAppearance extends IAppearance = IAppearance,
>(options: IMakeFunctionalArtModuleOptions<TShape, TAppearance>): IArtModuleDefinition<TShape, TAppearance>;
/**
 * TODO: !!x Extract function createSerializerRuleForArt (or createSerializerRuleForFunctionalArt) (simmilar to createSerializerRuleForClass)
 * TODO: !!x [0] Get we get rid of serializeName and automatically infer it from module name
 * TODO: !!x Extend maker options from ICommonMakerOptions
 * TODO: !!x Unify naming of makers options
 * TODO: !!x Makers should have explicit options interface (use refactoring)
 */
