import { evaluate } from './evaluate';

describe(`evaluate`, () => {
    it(`evaluates simple javascript`, async () => {
        return expect(await evaluate(`module.exports='foo';`)).toBe('foo');
    });

    it(`evaluates iife javascript`, async () => {
        return expect(await evaluate(`module.exports=((()=>'bar')());`)).toBe('bar');
    });
});
