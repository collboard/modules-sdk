import { createManifestsFromBundleContent } from './createManifestsFromBundleContent';

describe(`how are manifests extracted from the bundle`, () => {
    it(`works with simple module`, async () =>
        expect(
            await createManifestsFromBundleContent(`
            window.declareModule({
                manifest: {
                    name: '@foo/bar',
                }
            });
        `),
        ).toEqual([{ name: '@foo/bar' }]));

    it(`works with multiple modules`, async () =>
        expect(
            await createManifestsFromBundleContent(`
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
        `),
        ).toEqual([{ name: '@foo/bar' }, { name: '@foo/foo' }, { name: '@foo/foobar' }]));

    it(`works with module returned by lambda`, async () =>
        expect(
            await createManifestsFromBundleContent(`
            window.declareModule(() => {
                const name = '@foo/lambda-module';
                return {
                    manifest: {
                        name,
                    },
                };
            });
        `),
        ).toEqual([{ name: '@foo/lambda-module' }]));

    it(`works with module created by simple maker`, async () =>
        expect(
            await createManifestsFromBundleContent(`
            window.declareModule(
                window.CollboardSdk.makeFooBarModule({
                    manifest: {
                        name: '@foo/module-maked-by-maker',
                    },
                }),
            );
        `),
        ).toEqual([{ name: '@foo/module-maked-by-maker' }]));

    it(`works with module created by maker that manipulates manifest`, async () =>
        expect(
            await createManifestsFromBundleContent(`
            // TODO: When makers in external library, test this propperly
                window.declareModule({
                    manifest: {
                        name: '@foo/module-maked-by-maker',
                    }
                });
            `),
        ).toEqual([{ name: '@foo/module-maked-by-maker' }]));
});
