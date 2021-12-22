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
        expect(() => parsePackageName({ packageName: '' })).toThrowError();
        expect(() => parsePackageName({ packageName: '  ' })).toThrowError();
        expect(() => parsePackageName({ packageName: '_foo' })).toThrowError();
        expect(() => parsePackageName({ packageName: 'aaa/bbb' })).toThrowError();
        expect(() => parsePackageName({ packageName: '@/bbb' })).toThrowError();
        expect(() => parsePackageName({ packageName: '@collboard' })).toThrowError();
        expect(() => parsePackageName({ packageName: '@_collboard/foo' })).toThrowError();
        expect(() => parsePackageName({ packageName: '@collboard/_foo' })).toThrowError();
        expect(() => parsePackageName({ packageName: '@collboard/some-module@1.5.0' })).toThrowError();
        expect(() => parsePackageName({ packageName: 'foo', requireScope: true })).toThrowError();
    });
});
