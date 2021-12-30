import { packageJsonToManifest } from './packageJsonToManifest';

describe(`conversion of package.json to module manifest`, () => {
    it(`converts normal package.json`, () => {
        expect(
            packageJsonToManifest({
                name: 'module-name',
                version: '9.11.2',
                description: 'Some description',
                license: 'MIT',
                contributors: [
                    'Pavol Hejný <pavol.hejny@collboard.com>',
                    'Jonáš Rosecký <jonas.rosecky@collboard.com>',
                ],
                repository: {
                    type: 'git',
                    url: 'https://github.com/collboard/modules-sdk',
                },
                homepage: 'https://collboard.github.io/modules-sdk/',
                private: true,
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
            }),
        ).toEqual({
            name: 'module-name',
            version: '9.11.2',
            description: 'Some description',
            license: 'MIT',
            contributors: ['Pavol Hejný <pavol.hejny@collboard.com>', 'Jonáš Rosecký <jonas.rosecky@collboard.com>'],
            repository: {
                type: 'git',
                url: 'https://github.com/collboard/modules-sdk',
            },
            homepage: 'https://collboard.github.io/modules-sdk/',
            flags: {
                isPrivate: true,
            },
        });
    });
});


/**
 * TODO: !!! Move to makers library
 */
