import { parseModuleName } from './parseModuleName';

/**
 * @copy of @see https://github.com/collboard/collboard/blob/main/src/40-utils/parseModuleName.test.ts
 */
describe('how parsing module name works', () => {
    it('works in simple cases', () => {
        expect(parseModuleName('@collboard/foo')).toEqual({ scope: 'collboard', name: ['foo'] });
        expect(parseModuleName('@collboard/bar')).toEqual({ scope: 'collboard', name: ['bar'] });
        expect(parseModuleName('@2collboard/1bar')).toEqual({ scope: '2collboard', name: ['1bar'] });
    });

    it('works in advanced cases', () => {
        expect(parseModuleName('@collboard/foo/bar')).toEqual({ scope: 'collboard', name: ['foo', 'bar'] });
        expect(parseModuleName('@collboard/bar/foo/hello')).toEqual({
            scope: 'collboard',
            name: ['bar', 'foo', 'hello'],
        });
    });

    it('fails without scope', () => {
        expect(() => parseModuleName('foo')).toThrowError(`Invalid module name`);
        expect(() => parseModuleName('foo_hoo')).toThrowError(`Invalid module name`);
        expect(() => parseModuleName('foo-hoo')).toThrowError(`Invalid module name`);
    });

    it('fails on incorrect name', () => {
        expect(() => parseModuleName('')).toThrowError(`Invalid module name`);
        expect(() => parseModuleName('  ')).toThrowError(`Invalid module name`);
        expect(() => parseModuleName('_foo')).toThrowError(`Invalid module name`);
        expect(() => parseModuleName('aaa/bbb')).toThrowError(`Invalid module name`);
        expect(() => parseModuleName('@/bbb')).toThrowError(`Invalid module name`);
        expect(() => parseModuleName('@collboard')).toThrowError(`Invalid module name`);
        expect(() => parseModuleName('@_collboard/foo')).toThrowError(`Invalid module name`);
        expect(() => parseModuleName('@collboard/_foo')).toThrowError(`Invalid module name`);
        expect(() => parseModuleName('@collboard/some-module@1.5.0')).toThrowError(`Invalid module name`);
        expect(() => parseModuleName('@foo')).toThrowError(`Invalid module name`);
        expect(() => parseModuleName('@collboard/bar/')).toThrowError(`Invalid module name`);
    });
});
