import { isManifestComplete } from './isManifestComplete';

describe(`how manifest is complete`, () => {
    it(`works with complete manifest`, async () =>
        expect(
            isManifestComplete({
                name: 'foo',
            }),
        ).toBeTruthy());

    it(`works with NOT complete manifest`, async () => expect(isManifestComplete({})).toBeFalsy());
});
