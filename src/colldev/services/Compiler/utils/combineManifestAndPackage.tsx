import { PackageJson } from 'type-fest';
import { IModuleManifest } from '../../../../../types';
import { deepClone } from '../../../utils/deepClone';

export interface ICombineManifestAndPackageOptions {
    manifest: IModuleManifest;
    packageJson: PackageJson;
}

export function combineManifestAndPackage({
    manifest,
    packageJson,
}: ICombineManifestAndPackageOptions): IModuleManifest {
    const combinedManifest = deepClone(manifest);

    // TODO: !!!

    return combinedManifest;
}
