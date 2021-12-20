import { join } from 'path';
import { execCommand } from './test-utils/execCommand';
import { getFlags } from './test-utils/getFlags';

jest.setTimeout(1000 * 30);

function makeTest(errorType: string, shouldNotCrash: boolean): any {
    if (shouldNotCrash) {
        return expect(
            getFlags().then((flags) =>
                execCommand({
                    command: `ts-node ./src/colldev/main.ts develop ./test-samples/errors/${errorType} ${flags}`,
                    cwd: join(__dirname, '..'),
                }),
            ),
        ).resolves.not.toThrow();
    } else {
        return expect(
            getFlags().then((flags) =>
                execCommand({
                    command: `ts-node ./src/colldev/main.ts develop ./test-samples/errors/${errorType} ${flags}`,
                    cwd: join(__dirname, '..'),
                }),
            ),
        ).rejects.toThrow();
    }
}

describe('the errored modules', () => {
    /*/
    it('should PASS when testing exit codes', () => {
        return expect(
            execCommand({
                command: 'ts-node ./test/utils/exitCodes/success.ts',
                cwd: join(__dirname, '..'),
            }),
        ).resolves.not.toThrow();
    });

    it('should FAIL when testing exit codes', () => {
        return expect(
            execCommand({
                command: 'ts-node ./test/utils/exitCodes/error.ts',
                cwd: join(__dirname, '..'),
            }),
        ).rejects.toThrow();
    });
    /**/

    it(`should NOT crash when there is no error in the module`, makeTest('no-error', true));
    it(`should crash when there is a syntax-error in the module`, makeTest('syntax-error', false));
    it(`should crash when there is a type-error IN DECLARE in the module`, makeTest('type-error', false));
    it(
        `should crash when there is a runtime-error-in-declare in the module`,
        makeTest('runtime-error-in-declare', false),
    );
    it(`should crash when there is a runtime-error-in-setup in the module`, makeTest('runtime-error-in-setup', false));
    it(
        `should crash when there is a runtime-error-in-unsetup in the module`,
        makeTest('runtime-error-in-unsetup', false),
    );
    it(`should crash when there is a missing-package-error in the module`, makeTest('missing-package-error', false));
    it(`should crash when there is a missing-entry-error in the module`, makeTest('missing-entry-error', false));
    it(`should crash when there is a version-mismatch-error in the module`, makeTest('version-mismatch-error', false));
    it(`should crash when there is a empty-project in the module`, makeTest('empty-project', false));
    it(`should crash when there is a missing-scope in the module`, makeTest('missing-scope', false));
    it(`should crash when there is a name-collision in the module`, makeTest('name-collision', false));
});
