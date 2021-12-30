// Note: vm2 library is using setimmediate and we need to run jest in jsdom in which setImmediate is not available. So we are using setimmediate polyfill.
import 'setimmediate';
import spaceTrim from 'spacetrim';
import { PackageJson } from 'type-fest';
import { NodeVM } from 'vm2';
import { IModuleManifest } from '../../../../../types';
import { IModule, IModuleDefinition } from '../../../../../types/CollboardSdk';
import { factor } from '../../../utils/factor';
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
    const manifests: IModuleManifest[] = [];
    const fake: any = new Proxy({}, { get: () => fake });

    const vm = new NodeVM({
        require: {
            external: true,
        },
    });

    const virtualWindow = {
        window: {},
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

    const manifestsWithPackages = manifests.map((manifest) => combineManifestAndPackage({ manifest, packageJson }));

    await checkManifests(...manifestsWithPackages);

    return manifestsWithPackages;
}

/**
 *
 * TODO: Split this into multiple functions
 * TODO: Maybe some service called "Verifier" that will test advanced things like performance profile, memory leaks, etc.
 */
