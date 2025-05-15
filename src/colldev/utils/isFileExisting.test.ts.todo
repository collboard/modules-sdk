import { isFileExisting } from './isFileExisting';

describe(`isFileExisting`, () => {
    it(`exists`, () => expect(isFileExisting(__filename)).resolves.toEqual(true));

    it(`NOT exists`, () => expect(isFileExisting('non-existing-file')).resolves.toEqual(false));

    it(`exists but it is a folder`, () => expect(isFileExisting(__dirname)).resolves.toEqual(false));
});
