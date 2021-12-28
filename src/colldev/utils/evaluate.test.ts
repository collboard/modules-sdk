import { evaluateByRequire } from './evaluateByRequire';
import { evaluateBySafeEval } from './evaluateBySafeEval';

for (const [functionName, functionExecutable] of Object.entries({ evaluateByRequire, evaluateBySafeEval })) {
    describe(`evaluate by ${functionName}`, () => {
        it(`${functionName} simple javascript`, async () => {
            return expect(await functionExecutable(`module.exports='foo';`)).toBe('foo');
        });

        it(`${functionName} multiple lines of javascript`, async () => {
            return expect(await functionExecutable(`var a = 'foo';a+='bar';module.exports=a;`)).toBe('foobar');
        });

        it(`${functionName} iife javascript`, async () => {
            return expect(await functionExecutable(`module.exports=((()=>'bar')());`)).toBe('bar');
        });
    });
}
