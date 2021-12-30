import { combineManifestAndPackage } from './combineManifestAndPackage';

describe(`how module manifest with package.json is combined`, () => {
    it(`works when only manifest available`, async () =>
        expect(
            combineManifestAndPackage({
                manifest: {
                    name: '@foo/bar',
                    license: 'Apache',
                    author: 'Pavol Hejný <pavol.hejny@collboard.com>',
                    description: 'Foo bar',
                    keywords: ['foo', 'bar'],
                },
                packageJson: {},
            }),
        ).toEqual({
            name: '@foo/bar',
            license: 'Apache',
            author: 'Pavol Hejný <pavol.hejny@collboard.com>',
            description: 'Foo bar',
            keywords: ['foo', 'bar'],
        }));
    //=======================================================================================

    it(`works when only package.json available`, async () =>
        expect(
            combineManifestAndPackage({
                manifest: undefined,
                packageJson: {
                    name: '@foo/bar',
                    license: 'Apache',
                    author: 'Pavol Hejný <pavol.hejny@collboard.com>',
                    description: 'Foo bar',
                },
            }),
        ).toEqual({
            name: '@foo/bar',
            license: 'Apache',
            author: 'Pavol Hejný <pavol.hejny@collboard.com>',
            description: 'Foo bar',
        }));
    //=======================================================================================

    it(`works when some properties are in manifest and some OTHER in package.json`, async () =>
        expect(
            combineManifestAndPackage({
                manifest: {
                    name: '@foo/bar',
                    license: 'Apache',
                },
                packageJson: {
                    author: 'Pavol Hejný <pavol.hejny@collboard.com>',
                    description: 'Foo bar',
                },
            }),
        ).toEqual({
            name: '@foo/bar',
            license: 'Apache',
            author: 'Pavol Hejný <pavol.hejny@collboard.com>',
            description: 'Foo bar',
        }));
    //=======================================================================================

    it(`ignores collboard agnostic propertis from package.json`, async () =>
        expect(
            combineManifestAndPackage({
                manifest: {
                    name: '@foo/bar',
                },
                packageJson: {
                    version: '42.256.83',
                    description: 'Modules SDK toolkit for Collboard.com',
                    license: 'SEE LICENSE IN LICENSE',
                    contributors: [
                        'Pavol Hejný <pavol.hejny@collboard.com> (https://collboard.com/-/about/team)',
                        'Jonáš Rosecký <jonas.rosecky@collboard.com> (https://collboard.com/-/about/team)',
                    ],
                    repository: {
                        type: 'git',
                        url: 'https://github.com/collboard/modules-sdk',
                    },
                    homepage: 'https://collboard.github.io/modules-sdk/',
                    private: false,
                    main: './dist/runtime/runtime.js',
                    types: './types/index.d.ts',
                    bin: {
                        colldev: 'dist/colldev/main.js',
                    },
                    scripts: {
                        test: 'jest --config jestconfig.json',
                        lint: 'tslint -p tsconfig.json',
                        prepare: 'tsc',
                        prepack: 'npm run lint && npm run test',
                        documentation: 'typedoc',
                    },
                    dependencies: {
                        '@types/express': '^4.17.11',
                        '@types/localtunnel': '^2.0.1',
                        '@types/react': '^16.9.49',
                        '@types/uuid': '^8.3.0',
                        babylonjs: '^4.2.0',
                        chalk: '^4.1.2',
                        commander: '^7.2.0',
                        destroyable: '^0.5.0',
                        everstorage: '^1.2.0',
                        express: '^4.17.1',
                        ink: '^3.0.8',
                        'ink-spinner': '^4.0.2',
                        'ink-table': '^3.0.0',
                        localtunnel: '^2.0.1',
                        'locate-app': '^1.2.0',
                        'puppeteer-core': '^10.1.0',
                        react: '^16.13.1',
                        'react-dom': '16.14.*',
                        rxjs: '^6.6.7',
                        'serve-static': '^1.14.1',
                        'socket.io': '^4.0.1',
                        touchcontroller: '^4.0.0',
                        'ts-loader': '^8.2.0',
                        'type-fest': '^2.7.0',
                        typescript: '^4.0.3',
                        uuid: '^8.3.2',
                        waitasecond: '^1.7.0',
                        webpack: '^5.35.1',
                        xyzt: '=4.4.2',
                    },
                    devDependencies: {
                        '@types/jest': '^26.0.24',
                        '@types/node-fetch': '^2.5.11',
                        jest: '^27.0.6',
                        'node-fetch': '^2.6.1',
                        'ts-jest': '^27.0.3',
                        'ts-node-dev': '^1.1.8',
                        tslint: '^6.1.3',
                        typedoc: '^0.20.36',
                    },
                },
            }),
        ).toEqual({
            name: '@foo/bar',
            version: '42.256.83',
            description: 'Modules SDK toolkit for Collboard.com',
            license: 'SEE LICENSE IN LICENSE',
            contributors: [
                'Pavol Hejný <pavol.hejny@collboard.com> (https://collboard.com/-/about/team)',
                'Jonáš Rosecký <jonas.rosecky@collboard.com> (https://collboard.com/-/about/team)',
            ],
            repository: {
                type: 'git',
                url: 'https://github.com/collboard/modules-sdk',
            },
            homepage: 'https://collboard.github.io/modules-sdk/',
            flags: {
                isPrivate: false,
            },
        }));
    //=======================================================================================

    it(`works when SAME properties are in manifest and SAME in package.json`, async () =>
        expect(
            combineManifestAndPackage({
                manifest: {
                    name: '@foo/bar',
                    license: 'Apache',
                    author: 'Pavol Hejný <pavol.hejny@collboard.com>',
                    description: 'Foo bar',
                },
                packageJson: {
                    name: '@foo/bar',
                    license: 'Apache',
                    author: 'Pavol Hejný <pavol.hejny@collboard.com>',
                    description: 'Foo bar',
                },
            }),
        ).toEqual({
            name: '@foo/bar',
            license: 'Apache',
            author: 'Pavol Hejný <pavol.hejny@collboard.com>',
            description: 'Foo bar',
        }));
    //=======================================================================================

    it(`throws when some REQUIRED properties are NOT available`, async () =>
        expect(() =>
            combineManifestAndPackage({
                manifest: undefined,
                packageJson: {},
            }),
        ).toThrowError());

    //=======================================================================================

    it(`throws when some properties are in manifest and SAME WITH CONFLICTING values in package.json`, async () =>
        expect(() =>
            combineManifestAndPackage({
                manifest: {
                    name: '@foo/bar',
                    license: 'Apache',
                    author: 'Pavol Hejný <pavol.hejny@collboard.com>',
                    description: 'Foo bar',
                },
                packageJson: {
                    name: '@foo/bar',
                    license: 'Apache',
                    author: 'Jonáš Rosecký <jonas.rosecky@collboard.com>',
                    description: 'Foo bar',
                },
            }),
        ).toThrowError());

    //=======================================================================================

    it(`throws when scopes are not same`, async () =>
        expect(() =>
            combineManifestAndPackage({
                manifest: { name: '@foo/bar' },
                packageJson: { name: '@fiz/bar' },
            }),
        ).toThrowError());

    /* Maybe TODO later
    it(`combines package without scope and manifest with scope`, async () =>
        expect(
            combineManifestAndPackage({
                manifest: { name: '@foo/bar' },
                packageJson: { name: 'bar' },
            }),
        ).toEqual({
            name: '@foo/bar',
        }));
    */
});


/**
 * TODO: !!! Move to makers library
 */
