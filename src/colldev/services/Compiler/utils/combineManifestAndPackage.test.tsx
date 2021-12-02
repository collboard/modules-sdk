describe(`how module manifest with package.json is combined`, () => {
    it(`works when only manifest available`, async () => expect(
           // ...
        ).toEqual(/*...*/));

    it(`works when only package.json available`, async () => expect(
           // ...
        ).toEqual(/*...*/));

    it(`works when some properties are in manifest and some OTHER in package.json`, async () => expect(
           // ...
        ).toEqual(/*...*/));

    it(`works when some properties are in manifest and SAME in package.json`, async () => expect(
           // ...
        ).toEqual(/*...*/));

    it(`throws when some properties are not available`, async () => expect(
           // ...
        ).toEqual(/*...*/));

    it(`throws when some properties are in manifest and SAME WITH CONFLICTING values in package.json`, async () => expect(
           // ...
        ).toEqual(/*...*/));
});
