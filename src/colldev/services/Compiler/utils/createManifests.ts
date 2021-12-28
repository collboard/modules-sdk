import { readFile } from 'fs';
import { join } from 'path';
import spaceTrim from 'spacetrim';
import { PackageJson } from 'type-fest';
import { promisify } from 'util';
import { IModuleManifest } from '../../../../../types';
import { evaluate } from '../../../utils/evaluate';
import { checkManifests } from './checkManifests';
import { combineManifestAndPackage } from './combineManifestAndPackage';

interface ICreateManifestsOptions {
    bundleContent: string;
    packageJson: PackageJson;
}

export async function createManifests({
    bundleContent,
    packageJson,
}: ICreateManifestsOptions): Promise<IModuleManifest[]> {
    const extractManifestsRuntime = await promisify(readFile)(
        join(__dirname, '../../../../runtime/extractManifestsRuntime.js'),
        'utf8',
    );
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

    await checkManifests(...manifestsWithPackages);

    return manifestsWithPackages;
}

/**
 *
 * TODO: Maybe some service called "Verifier" that will test advanced things like performance profile, memory leaks, etc.
 */
