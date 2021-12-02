import { readFile } from 'fs';
import { PackageJson } from 'type-fest';
import { promisify } from 'util';
import { IModuleManifest } from '../../../../../types';
import { evaluate } from '../../../utils/evaluate';
import { combineManifestAndPackage } from './combineManifestAndPackage';

interface ICreateManifestsOptions {
    bundleContent: string;
    packageJson: PackageJson;
}

export async function createManifests({
    bundleContent,
    packageJson,
}: ICreateManifestsOptions): Promise<IModuleManifest[]> {
    const extractManifestsRuntime = await promisify(readFile)('./src/runtime/extractManifestsRuntime.js', 'utf8');
    const extractManifestsRuntimeWithBundleContent = extractManifestsRuntime.replace(
        /^.*bundle content.*$/m,
        '\n' + bundleContent,
    );

    const manifests = await evaluate<IModuleManifest[]>(extractManifestsRuntimeWithBundleContent);
    const manifestsWithPackages = manifests.map((manifest) => combineManifestAndPackage({ manifest, packageJson }));

    return manifestsWithPackages;
}


/**
 *
 * TODO: Maybe some service called "Verifier"
 * TODO: !!! Add info from package.json to manifests
 * TODO: !!! Test that package.json and manifest has same content
 */




