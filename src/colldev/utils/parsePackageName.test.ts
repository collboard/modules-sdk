import { parsePackageName } from './parsePackageName';

describe('how parsing package name works', () => {
    it('works without scope', () => {
        expect(parsePackageName({ packageName: 'foo' })).toEqual({ scope: null, name: 'foo' });
        expect(parsePackageName({ packageName: 'foo_hoo' })).toEqual({ scope: null, name: 'foo_hoo' });
        expect(parsePackageName({ packageName: 'foo-hoo' })).toEqual({ scope: null, name: 'foo-hoo' });
    });

    it('works with scope', () => {
        expect(parsePackageName({ packageName: '@collboard/foo' })).toEqual({ scope: 'collboard', name: 'foo' });
    });

    it('fails on incorrect name', () => {
        expect(() => parsePackageName({ packageName: '' })).toThrowError(`Invalid package name`);
        expect(() => parsePackageName({ packageName: '  ' })).toThrowError(`Invalid package name`);
        expect(() => parsePackageName({ packageName: '_foo' })).toThrowError(`Invalid package name`);
        expect(() => parsePackageName({ packageName: 'aaa/bbb' })).toThrowError(`Invalid package name`);
        expect(() => parsePackageName({ packageName: '@/bbb' })).toThrowError(`Invalid package name`);
        expect(() => parsePackageName({ packageName: '@collboard' })).toThrowError(`Invalid package name`);
        expect(() => parsePackageName({ packageName: '@_collboard/foo' })).toThrowError(`Invalid package name`);
        expect(() => parsePackageName({ packageName: '@collboard/_foo' })).toThrowError(`Invalid package name`);
        expect(() => parsePackageName({ packageName: '@collboard/some-module@1.5.0' })).toThrowError(
            `Invalid package name`,
        );
        expect(() => parsePackageName({ packageName: '@foo' })).toThrowError(`Invalid package name`);
    });

    it('fails when missing required scope', () => {
        expect(() => parsePackageName({ packageName: 'foo', requireScope: true })).toThrowError(`Scope is required`);
        expect(() => parsePackageName({ packageName: 'bar', requireScope: true })).toThrowError(`Scope is required`);
    });
});
