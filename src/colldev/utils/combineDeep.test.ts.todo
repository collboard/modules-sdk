import { combineDeep } from './combineDeep';

describe(`combining deep two objects`, () => {
    it(`preserves one object`, () => {
        expect(combineDeep({ name: 'foo' })).toEqual({ name: 'foo' });
    });

    it(`performs simple combine`, () => {
        expect(combineDeep({ name: 'foo' }, { author: 'John Smith' })).toEqual({ name: 'foo', author: 'John Smith' });
    });

    it(`performs deep combine`, () => {
        expect(combineDeep({ name: 'foo', properties: { a: 1, b: 2 } }, { properties: { c: 3 } })).toEqual({
            name: 'foo',
            properties: { a: 1, b: 2, c: 3 },
        });
    });

    it(`takes defined values`, () => {
        expect(combineDeep({ name: 'foo', description: undefined }, { name: null, description: 'bar' })).toEqual({
            name: 'foo',
            description: 'bar',
        });
    });

    it(`performs simple array merge`, () => {
        expect(combineDeep(['a', 'b'], ['c'])).toEqual(['a', 'b', 'c']);
    });

    it(`performs array merge`, () => {
        expect(combineDeep({ name: 'foo', keywords: ['a', 'b'] }, { keywords: ['a', 'c'] })).toEqual({
            name: 'foo',
            keywords: ['a', 'b', 'c'],
        });
    });

    it(`throws on conflict`, () => {
        expect(() => combineDeep({ name: 'foo' }, { name: 'bar' })).toThrowError();
        expect(() => combineDeep({ name: 'foo' }, { name: 123 })).toThrowError();
    });
});
