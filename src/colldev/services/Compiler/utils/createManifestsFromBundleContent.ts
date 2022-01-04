// Note: vm2 library is using setimmediate and we need to run jest in jsdom in which setImmediate is not available. So we are using setimmediate polyfill.
import 'setimmediate';
import spaceTrim from 'spacetrim';
import { NodeVM } from 'vm2';
import { IModule, IModuleDefinition, IModuleManifest } from '../../../../../types';
import { factor } from '../../../utils/factor';

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

    const virtualWindow = {
        window: {
            /* Note: will be assigned to virtualWindow statement bellow */
        },
        document: {
            // Note:  !!!
            currentScript: {
                src: 'http://localhost/main.js',
            },
        },
        declareModule: (module: IModule) => {
            const moduleDefinition = factor(module);

            if (!moduleDefinition.manifest) {
                // Note: This should be trurly ModuleDeclarationMissingManifestError
                throw new Error(
                    `Cannot declare module without defined manifest. Modules without manifest (anonymous modules) are typically used as submodules for example as activated tool.`,
                );
            }

            manifests.push(moduleDefinition.manifest);
        },
        CollboardSdk: new Proxy(
            {
                // Note: Here we are faking CollboardSdk
            },
            {
                get: (target, property, receiver) => {
                    if (/^make/.test(property as string)) {
                        // TODO: !! Makers should be in external library
                        return (protoModule: IModuleDefinition) => {
                            return protoModule;
                        };
                    } else {
                        return fake;
                    }
                },
            },
        ),
    };
    virtualWindow.window = virtualWindow;

    vm.setGlobals(virtualWindow);
    vm.run(bundleContent);

    if (manifests.length === 0) {
        throw new Error(
            spaceTrim(`
                No module found
                Please call declareModule() in your code to add a module
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
