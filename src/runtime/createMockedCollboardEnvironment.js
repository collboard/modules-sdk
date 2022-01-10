/**
 * This file contain global object (window) in state which will provide Collboard app for the modules
 * But this is lightweight faked version for just extracting manifest from the modules
 * Note: It is done in JavaScript (not TypeScript) because ...
 */

const deepFake = new Proxy({}, { get: () => deepFake });

function factor(factorable) {
    if (typeof factorable === 'function') {
        try {
            return factorable();
        } catch (error) {
            // TODO: Move class detection to all other factor implementations
            if (
                error instanceof Error &&
                /^Class constructor [a-zA-Z0-9_$]+ cannot be invoked without 'new'/.test(error.message)
            ) {
                return new factorable();
            } else {
                throw error;
            }
        }
    } else {
        return factorable;
    }
}

module.exports = function createMockedCollboardEnvironment(declaredModuleDefinitionCallback) {
    const virtualWindow = {
        document: {
            // Note: This fake currentScript is required to avoid error in VM2 when the bundle is created by webpack with option output.publicPath
            currentScript: {
                src: 'http://localhost/main.js',
            },
        },
        declareModule: (module) => {
            const moduleDefinition = factor(module);

            if (!moduleDefinition.manifest) {
                // Note: This should be trurly ModuleDeclarationMissingManifestError
                throw new Error(
                    `Cannot declare module without defined manifest. Modules without manifest (anonymous modules) are typically used as submodules for example as activated tool.`,
                );
            }

            declaredModuleDefinitionCallback(moduleDefinition);
        },
        CollboardSdk: new Proxy(
            {
                // Note: Here we are faking CollboardSdk
                // TODO: When there will be fully separated makers in separate library, faking makers would be useless

                makeArtModule(artClass) {
                    // TODO: Some clear rules how to name serializeName and module names (+ adding scopes and versions there)
                    // TODO: How to handle versioning in arts?
                    // TODO: Supports should be inferred from the setup behavior

                    return {
                        manifest: {
                            ...artClass.manifest,
                            supports: {
                                art: artClass.serializeName,
                            },
                        },
                        setup() {
                            return () => {
                                throw new Error(
                                    `This code should not be called because it is only mock for extracting manifests`,
                                );
                            };
                        },
                    };
                },

                makeAttributeModule(protoModule) {
                    // TODO: Supports should be inferred from the setup behavior
                    const module = {
                        ...protoModule,
                    };

                    if (protoModule.standard) {
                        module.manifest.supports = {
                            attribute: protoModule.attribute.name,
                        };
                    }

                    return module;
                },
            },
            {
                get: (target, property, receiver) => {
                    if (target[property]) {
                        return target[property];
                    } else if (/^make/.test(property)) {
                        return (protoModule) => {
                            return protoModule;
                        };
                    } else if (/^Abstract/.test(property)) {
                        return class {};
                    } else {
                        return deepFake;
                    }
                },
            },
        ),

        // Note: window,self and this will be assigned to virtualWindow statement bellow
        window: null,
        self: null,
        this: null,
    };
    virtualWindow.window = virtualWindow;
    // Note: This is making trouble in node runtime> virtualWindow.global = virtualWindow;
    virtualWindow.self = virtualWindow;
    virtualWindow.this = virtualWindow;

    return virtualWindow;
};
