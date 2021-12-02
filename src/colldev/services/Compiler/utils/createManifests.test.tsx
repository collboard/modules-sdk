import { createManifests } from './createManifests';

describe(`how are manifests extracted from the bundle`, () => {
    it(`works with simple module`, async () =>
        expect(
            await createManifests({
                bundleContent: `
                    window.declareModule({
                        manifest: {
                            name: 'foo',
                        }
                    });
                `,
                packageJson: {},
            }),
        ).toEqual([{ name: 'foo' }]));

    it(`works with multiple modules`, async () =>
        expect(
            await createManifests({
                bundleContent: `
                    window.declareModule({
                        manifest: {
                            name: 'foo',
                        }
                    });
                    window.declareModule({
                        manifest: {
                            name: 'bar',
                        }
                    });
                    window['declareModule']({
                        manifest: {
                            name: 'foo'+'bar',
                        }
                    });
                `,
                packageJson: {},
            }),
        ).toEqual([{ name: 'foo' }, { name: 'bar' }, { name: 'foobar' }]));

    it(`works with module returned by lambda`, async () =>
        expect(
            await createManifests({
                bundleContent: `
                    window.declareModule(() => {
                        const name = 'lambdaModule';
                        return {
                            manifest: {
                                name,
                            },
                        };
                    });
                `,
                packageJson: {},
            }),
        ).toEqual([{ name: 'lambdaModule' }]));

    it(`works with module created by simple maker`, async () =>
        expect(
            await createManifests({
                bundleContent: `
                    window.declareModule(
                        window.CollboardSdk.makeFooBarModule({
                            manifest: {
                                name: 'moduleMakedByMaker',
                            },
                        }),
                    );
                `,
                packageJson: {},
            }),
        ).toEqual([{ name: 'moduleMakedByMaker' }]));

    it(`works with module created by maker that manipulates manifest`, async () =>
        expect(
            await createManifests({
                bundleContent: `
                // TODO: When makers in external library, test this propperly
                    window.declareModule({
                        manifest: {
                            name: 'moduleMakedByMaker',
                        }
                    });
                `,
                packageJson: {},
            }),
        ).toEqual([{ name: 'moduleMakedByMaker' }]));

    // TODO: Combining multiple modules and packageJson
});
