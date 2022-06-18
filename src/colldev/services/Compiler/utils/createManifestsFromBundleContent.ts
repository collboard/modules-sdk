// Note: vm2 library is using setimmediate and we need to run jest in jsdom in which setImmediate is not available. So we are using setimmediate polyfill.
import { mkdir, readFile, writeFile } from 'fs';
import { dirname, join } from 'path';
import 'setimmediate';
import spaceTrim from 'spacetrim';
import { promisify } from 'util';
import { NodeVM } from 'vm2';
import { IModuleDefinition, IModuleManifest } from '../../../../../types';
import createMockedCollboardEnvironment from '../../../../runtime/createMockedCollboardEnvironment';
import { VM_ERRORS_TEMPORARY_PATH } from '../../../config';
import { getUniqueFoldername } from '../../../utils/getUniqueFoldername';

/**
 * Analyzes javascript bundle content and search for all declared modules
 *
 * @param bundleContent Javascript bundle content to analyze
 * @returns at least one module manifest if there is none, it will throw an error
 */
export async function createManifestsFromBundleContent(bundleContent: string): Promise<IModuleManifest[]> {
    const manifests: IModuleManifest[] = [];
    const fake: any = new Proxy({}, { get: () => fake });

    const vm = new NodeVM({
        require: {
            external: true,
        },
    });

    const virtualWindow = createMockedCollboardEnvironment((moduleDefinition: IModuleDefinition) => {
        manifests.push(moduleDefinition.manifest!);
    });

    vm.setGlobals(virtualWindow);

    async function createExtractedDebugScript() {
        const vmFilePath = join(
            VM_ERRORS_TEMPORARY_PATH,
            getUniqueFoldername(),
            'colldev-extract-manifests.js' /* <- TODO: Probbably name with project name like pdf-support-manifests.js */,
        );
        await promisify(mkdir)(dirname(vmFilePath), { recursive: true });
        const createMockedCollboardEnvironmentContent = await promisify(readFile)(
            join(__dirname, '../../../../runtime/createMockedCollboardEnvironment.js'),
            'utf8',
        );
        await promisify(writeFile)(
            vmFilePath,
            spaceTrim(
                (block) => `
                /**
                 * Note: This is a temporary file created by colldev.
                 *       It reproduces the errors that occured during manifest extraction from the bundle.
                 * /

                ${block(createMockedCollboardEnvironmentContent)}

                const virtualWindow = module.exports((moduleDefinition)=>{
                  console.log(moduleDefinition.manifest);
                })
                Object.assign(global, virtualWindow);

                ${block(bundleContent)}
            `,
            ),
        );

        return vmFilePath.split('\\').join('/');
    }

    try {
        vm.run(bundleContent);
    } catch (error) {
        const path = await createExtractedDebugScript();
        throw new Error(
            spaceTrim(
                (block) => `
                Error while running bundle content to extract manifests of modules
                See the bundle file ${path}
                Or you can try to run the following command:

                $ node ${path}

                ${block(error.message)}
                ${block(error.stack)}
                ---
            `,
            ),
        );
    }

    if (manifests.length === 0) {
        const path = await createExtractedDebugScript();
        throw new Error(
            spaceTrim(`
                No module found
                Please call declareModule() in your code to add a module

                See the bundle file ${path}
                Or you can try to run the following command:

                $ node ${path}
            `),
        );
    }

    return manifests;
}

/**
 *
 * TODO: Split this into multiple functions
 * TODO: Maybe some service called "Verifier" that will test advanced things like performance profile, memory leaks, etc.
 */
