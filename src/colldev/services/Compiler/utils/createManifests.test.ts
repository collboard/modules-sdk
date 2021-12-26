import { createManifests } from './createManifests';

describe(`how are manifests extracted from the bundle`, () => {
    it(`works with simple module`, async () =>
        expect(
            await createManifests({
                bundleContent: `
                    window.declareModule({
                        manifest: {
                            name: '@foo/bar',
                        }
                    });
                `,
                packageJson: {},
            }),
        ).toEqual([{ name: '@foo/bar' }]));

    it(`works with multiple modules`, async () =>
        expect(
            await createManifests({
                bundleContent: `
                    window.declareModule({
                        manifest: {
                            name: '@foo/bar',
                        }
                    });
                    window.declareModule({
                        manifest: {
                            name: '@foo/foo',
                        }
                    });
                    window['declareModule']({
                        manifest: {
                            name: '@foo/foo'+'bar',
                        }
                    });
                `,
                packageJson: {},
            }),
        ).toEqual([{ name: '@foo/bar' }, { name: '@foo/foo' }, { name: '@foo/foobar' }]));

    it(`detects duplicite module names`, () =>
        expect(
            createManifests({
                bundleContent: `
                    window.declareModule({
                        manifest: {
                            name: '@foo/bar',
                        }
                    });
                    window.declareModule({
                        manifest: {
                            name: '@foo/bar',
                        }
                    });
                `,
                packageJson: {},
            }),
        ).rejects.toThrowError(`All modules must have different names`));

    it(`works with module returned by lambda`, async () =>
        expect(
            await createManifests({
                bundleContent: `
                    window.declareModule(() => {
                        const name = '@foo/lambda-module';
                        return {
                            manifest: {
                                name,
                            },
                        };
                    });
                `,
                packageJson: {},
            }),
        ).toEqual([{ name: '@foo/lambda-module' }]));

    it(`works with module created by simple maker`, async () =>
        expect(
            await createManifests({
                bundleContent: `
                    window.declareModule(
                        window.CollboardSdk.makeFooBarModule({
                            manifest: {
                                name: '@foo/module-maked-by-maker',
                            },
                        }),
                    );
                `,
                packageJson: {},
            }),
        ).toEqual([{ name: '@foo/module-maked-by-maker' }]));

    it(`works with module created by maker that manipulates manifest`, async () =>
        expect(
            await createManifests({
                bundleContent: `
                // TODO: When makers in external library, test this propperly
                    window.declareModule({
                        manifest: {
                            name: '@foo/module-maked-by-maker',
                        }
                    });
                `,
                packageJson: {},
            }),
        ).toEqual([{ name: '@foo/module-maked-by-maker' }]));

    it(`deanonymizace module with package.json`, async () =>
        expect(
            await createManifests({
                bundleContent: `
                window.declareModule({
                    // No manifest
                    setup: () => { /* ... */ }
                });
            `,
                packageJson: {
                    name: '@foo/module-name-from-package-json',
                },
            }),
        ).toEqual([{ name: '@foo/module-name-from-package-json' }]));

    // TODO: Combining multiple modules and packageJson
});
