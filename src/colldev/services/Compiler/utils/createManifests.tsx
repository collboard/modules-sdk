import { readFile, writeFile } from 'fs';
import { promisify } from 'util';
import { evaluate } from '../../../utils/evaluate';

/**
 * Note: This util function is standalone and not part of the Compiler class and its workflows.
 */
export async function createManifests(bundlePath: string): Promise<void> {
    // TODO: !!! Test that package.json and manifest has same content
    // TODO: Maybe some service called "Verifier"
    const bundleContent = await promisify(readFile)(bundlePath, 'utf8');

    const extractManifestsRuntime = await promisify(readFile)('./src/runtime/extractManifestsRuntime.js', 'utf8');
    const extractManifestsRuntimeWithBundleContent = extractManifestsRuntime.replace(
        /^.*bundle content.*$/m,
        '\n' + bundleContent,
    );

    const manifests = await evaluate(extractManifestsRuntimeWithBundleContent);

    // TODO: !!! Add info from package.json to manifests
    // TODO: !!! Test that package.json and manifest has same content

    await promisify(writeFile)(`${bundlePath}.manifests.json`, JSON.stringify(manifests, null, 4));
}
