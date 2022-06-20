import { extractManifestsFromBundleContent } from './extractManifestsFromBundleContent';

jest.setTimeout(60 * 1000);

describe(`how are manifests extracted from the bundle`, () => {
    it(`works with simple module`, async () =>
        expect(
            await extractManifestsFromBundleContent(`
            window.declareModule({
                manifest: {
                    name: '@foo/bar',
                }
            });
        `),
        ).toEqual([{ name: '@foo/bar' }]));

    it(`works with multiple modules`, async () =>
        expect(
            await extractManifestsFromBundleContent(`
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
            await extractManifestsFromBundleContent(`
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

    it(`works with module extracted by simple maker`, async () =>
        expect(
            await extractManifestsFromBundleContent(`
                window.declareModule(
                    window.CollboardSdk.makeModalModule({
                        manifest: {
                            name: '@foo/module-maked-by-maker',
                        },
                    }),
                );
            `),
        ).toEqual([{ name: '@foo/module-maked-by-maker' }]));

    it(`works with module extractd by maker that manipulates manifest`, async () =>
        expect(
            await extractManifestsFromBundleContent(`
                // TODO: When makers in external library, test this propperly
                window.declareModule({
                    manifest: {
                        name: '@foo/module-maked-by-maker',
                    }
                });
            `),
        ).toEqual([{ name: '@foo/module-maked-by-maker' }]));
});
