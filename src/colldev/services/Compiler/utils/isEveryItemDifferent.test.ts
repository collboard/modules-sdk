import { isEveryItemDifferent } from './isEveryItemDifferent';

describe('isEveryItemDifferent', () => {
    it(`resolves that is`, () => {
        expect(isEveryItemDifferent()).toBe(true);
        expect(isEveryItemDifferent(1)).toBe(true);
        expect(isEveryItemDifferent(1, 2, 3)).toBe(true);
    });

    it(`resolves that not`, () => {
        expect(isEveryItemDifferent(1, 1)).toBe(false);
        expect(isEveryItemDifferent(1, 2, 1)).toBe(false);
    });
});
