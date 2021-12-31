import { getColldevConfig } from './getColldevConfig';

describe('getting colldev config', () => {
    it('should get config of sample without-config', () =>
        expect(
            getColldevConfig({
                workingDir: './test-samples/config-types/without-config',
                commandName: 'develop',
                flags: {},
            }),
        ).resolves.toEqual({
            entryPath: './src/index.tsx',
        }));

    it('should get config of sample config-in-cli-flags', () =>
        expect(
            getColldevConfig({
                workingDir: './test-samples/config-types/config-in-cli-flags',
                commandName: 'develop',
                flags: {
                    entryPath: './module.tsx',
                },
            }),
        ).resolves.toEqual({
            entryPath: './module.tsx',
        }));

    /*
    TODO:
    it('should get config of sample config-in-colldev-ts', () => 
        expect(
            getColldevConfig({
                workingDir: './test-samples/config-types/config-in-colldev-ts',
                commandName: 'develop',
                flags: {},
            }),
        ).resolves.toEqual({
            entryPath: './src/index.tsx',
        })
    );
    */

    it('should get config of sample config-in-colldev-js', () =>
        expect(
            getColldevConfig({
                workingDir: './test-samples/config-types/config-in-colldev-js',
                commandName: 'develop',
                flags: {},
            }),
        ).resolves.toEqual({
            entryPath: './module.tsx',
        }));

    it('should get config of sample config-in-colldev-json', () =>
        expect(
            getColldevConfig({
                workingDir: './test-samples/config-types/config-in-colldev-json',
                commandName: 'develop',
                flags: {},
            }),
        ).resolves.toEqual({
            entryPath: './module.tsx',
        }));

    it('should get config of sample config-in-colldev-yml', () =>
        expect(
            getColldevConfig({
                workingDir: './test-samples/config-types/config-in-colldev-yml',
                commandName: 'develop',
                flags: {},
            }),
        ).resolves.toEqual({
            entryPath: './module.tsx',
        }));

    it('should get config of sample config-in-package', () =>
        expect(
            getColldevConfig({
                workingDir: './test-samples/config-types/config-in-package',
                commandName: 'develop',
                flags: {},
            }),
        ).resolves.toEqual({
            entryPath: './module.tsx',
        }));

    it('should get config of sample config-in-tsconfig', () =>
        expect(
            getColldevConfig({
                workingDir: './test-samples/config-types/config-in-tsconfig',
                commandName: 'develop',
                flags: {},
            }),
        ).resolves.toEqual({
            entryPath: './module.tsx',
        }));
});
