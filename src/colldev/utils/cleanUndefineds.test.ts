import { cleanUndefineds } from './cleanUndefineds';

describe(`cleanup of undefineds`, () => {
    it(`cleanup undefineds`, () => {
        expect(cleanUndefineds({ name: 'foo', description: undefined })).toEqual({ name: 'foo' });
    });
});
