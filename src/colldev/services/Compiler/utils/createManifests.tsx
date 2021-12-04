import { readFile } from 'fs';
import spaceTrim from 'spacetrim';
import { PackageJson } from 'type-fest';
import { promisify } from 'util';
import { IModuleManifest } from '../../../../../types';
import { evaluate } from '../../../utils/evaluate';
import { checkManifest } from './checkManifest';
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

    if (manifests.length === 0) {
        throw new Error(
            spaceTrim(`
                No module found
                Please call declareModule() in your code to add a module
            `),
        );
    }

    const manifestsWithPackages = manifests.map((manifest) => combineManifestAndPackage({ manifest, packageJson }));

    // TODO: Add scope to names

    for (const manifestWithPackage of manifestsWithPackages) {
        await checkManifest(manifestWithPackage);
    }

    return manifestsWithPackages;
}

/**
 *
 * TODO: Maybe some service called "Verifier" that will test advanced things like performance profile, memory leaks, etc.
 */
