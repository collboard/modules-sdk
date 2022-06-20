import { checkManifests } from './checkManifests';

describe('how are manifests checked', () => {
    it(`should crash on no manifests`, () =>
        expect(checkManifests()).rejects.toThrowError(`Expecting at least one module`));
    it(`should crash on missing scope`, () =>
        expect(checkManifests({ name: 'bar', version: '1.0.0' })).rejects.toThrowError(`Invalid module name`));
    it(`should NOT crash on simple correct manifest`, () =>
        expect(checkManifests({ name: '@collboard/bar', version: '1.0.0' })).resolves.not.toThrowError());

    it(`should NOT crash on multiple correct manifests`, () =>
        expect(
            checkManifests({ name: '@collboard/bar', version: '1.0.0' }, { name: '@collboard/foo', version: '1.0.0' }),
        ).resolves.not.toThrowError());

    it(`should crash on multiple scopes`, () =>
        expect(
            checkManifests({ name: '@collboard/foo', version: '1.0.0' }, { name: '@collboardx/bar', version: '1.0.0' }),
        ).rejects.toThrowError(`All modules must have the same scope`));

    it(`should crash on name collision`, () =>
        expect(
            checkManifests({ name: '@collboard/bar', version: '1.0.0' }, { name: '@collboard/bar', version: '1.0.0' }),
        ).rejects.toThrowError(`All modules must have different names`));

    it(`should crash on undefined version`, () =>
        expect(checkManifests({ name: '@collboard/bar' }, { name: '@collboard/bar' })).rejects.toThrowError(
            `Module @collboard/bar must have defined version`,
        ));

    it(`should crash on different versions`, () =>
        expect(
            checkManifests({ name: '@collboard/bar', version: '1.0.0' }, { name: '@collboard/foo', version: '1.2.0' }),
        ).rejects.toThrowError(`All modules must have same version`));

    it(`should crash on corrupted version`, () =>
        expect(
            checkManifests({ name: '@collboard/bar', version: 'foo' }, { name: '@collboard/foo', version: 'foo' }),
        ).rejects.toThrowError(`Module @collboard/bar must have a valid semantic version`));
});
