import { getColldevConfig } from './getColldevConfig';

describe('getting colldev config', () => {
    it('should get config of sample without-config', () =>
        expect(
            getColldevConfig('./test-samples/config-types/without-config'),
        ).resolves.toEqual({
            entryPath: './src/index.tsx',
        }));

    /*
    TODO:
    it('should get config of sample config-in-colldev-ts', () =>
        expect(
            getColldevConfig('./test-samples/config-types/config-in-colldev-ts'),
        ).resolves.toEqual({
            entryPath: './src/index.tsx',
        })
    );
    */

    it('should get config of sample config-in-colldev-js', () =>
        expect(
            getColldevConfig('./test-samples/config-types/config-in-colldev-js'),
        ).resolves.toEqual({
            entryPath: './module.tsx',
        }));

    it('should get config of sample config-in-colldev-json', () =>
        expect(
            getColldevConfig('./test-samples/config-types/config-in-colldev-json'),
        ).resolves.toEqual({
            entryPath: './module.tsx',
        }));

    /* TODO:
    it('should get config of sample config-in-colldev-yml', () =>
        expect(
            getColldevConfig('./test-samples/config-types/config-in-colldev-yml'),
        ).resolves.toEqual({
            entryPath: './module.tsx',
        }));
    */

    it('should get config of sample config-in-package', () =>
        expect(
            getColldevConfig('./test-samples/config-types/config-in-package'),
        ).resolves.toEqual({
            entryPath: './module.tsx',
        }));

    it('should get config of sample config-in-tsconfig', () =>
        expect(
            getColldevConfig('./test-samples/config-types/config-in-tsconfig'),
        ).resolves.toEqual({
            entryPath: './module.tsx',
        }));
});
