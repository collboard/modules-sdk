import { PackageJson } from 'type-fest';
import { IModuleManifest } from '../../../../../types';
import { combineDeep } from '../../../utils/combineDeep';
import { isManifestComplete } from './isManifestComplete';
import { packageJsonToManifest } from './packageJsonToManifest';

export interface ICombineManifestAndPackageOptions {
    manifest?: IModuleManifest;
    packageJson: PackageJson;
}

export function combineManifestAndPackage({
    manifest,
    packageJson,
}: ICombineManifestAndPackageOptions): IModuleManifest {
    const manifestFromPackage = packageJsonToManifest(packageJson);

    if (!manifest) {
        if (!isManifestComplete(manifestFromPackage)) {
            throw new Error('You need to provide module manifest or fullfilled package.json');
        }
        return manifestFromPackage;
    } else {
        try{
        return combineDeep(manifest, manifestFromPackage as IModuleManifest);
        }catch(error){
            throw new Error(`Module manifest is incompatible with package.json\n${error.message}`);
        }
    }
}


/**
 * TODO: !!! Move to makers library
 */
