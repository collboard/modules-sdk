import { flatternArray } from './flatternArray';

describe(`flattening of array`, () => {
    it(`simple array will be flattened`, () => {
        expect(
            flatternArray([
                [1, 2],
                [3, 4],
            ]),
        ).toEqual([1, 2, 3, 4]);
        expect(flatternArray([['a'], ['b']])).toEqual(['a', 'b']);
        expect(flatternArray<string | number>([[1], ['b']])).toEqual([1, 'b']);
    });
});
