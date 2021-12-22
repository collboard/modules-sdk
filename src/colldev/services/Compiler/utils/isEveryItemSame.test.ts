import { isEveryItemSame } from './isEveryItemSame';

describe('isEveryItemSame', () => {
    it(`resolves that is`, () => {
        expect(isEveryItemSame()).toBe(true);
        expect(isEveryItemSame(1)).toBe(true);
        expect(isEveryItemSame(1, 1, 1)).toBe(true);
    });

    it(`resolves that not`, () => {
        expect(isEveryItemSame(1, 2)).toBe(false);
        expect(isEveryItemSame(1, 2, 3)).toBe(false);
    });
});
