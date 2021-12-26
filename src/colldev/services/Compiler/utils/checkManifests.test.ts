import { checkManifests } from './checkManifests';

describe('how are manifests checked', () => {
    it(`should crash on no manifests`, () =>
        expect(checkManifests()).rejects.toThrowError(`Expecting at least one module`));
    it(`should crash on missing scope`, () =>
        expect(checkManifests({ name: 'bar' })).rejects.toThrowError(`Scope is required`));
    it(`should NOT crash on simple correct manifest`, () =>
        expect(checkManifests({ name: '@collboard/bar' })).resolves.not.toThrowError());

    it(`should NOT crash on multiple correct manifests`, () =>
        expect(checkManifests({ name: '@collboard/bar' }, { name: '@collboard/foo' })).resolves.not.toThrowError());

    it(`should crash on multiple scopes`, () =>
        expect(checkManifests({ name: '@collboard/foo' }, { name: '@collboardx/bar' })).rejects.toThrowError(
            `All modules must have the same scope`,
        ));

    it(`should crash on name collision`, () =>
        expect(checkManifests({ name: '@collboard/bar' }, { name: '@collboard/bar' })).rejects.toThrowError(
            `All modules must have different names`,
        ));
});
