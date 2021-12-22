import { join } from 'path';
import { execCommand } from './test-utils/execCommand';
import { getFlags } from './test-utils/getFlags';

 jest.setTimeout(1000 * 15);

function createModuleDevelopTest(errorType: string, shouldNotCrash: boolean): any {
    console.log(errorType);
    if (shouldNotCrash) {
        return () =>
            expect(
                getFlags().then((flags) =>
                    execCommand({
                        command: `ts-node ./src/colldev/main.ts develop ./test-samples/errors/${errorType} ${flags}`,
                        cwd: join(__dirname, '..'),
                    }),
                ),
            ).resolves.not.toThrowError();
    } else {
        return () =>
            expect(
                getFlags().then((flags) =>
                    execCommand({
                        command: `ts-node ./src/colldev/main.ts develop ./test-samples/errors/${errorType} ${flags}`,
                        cwd: join(__dirname, '..'),
                    }),
                ),
            ).rejects.toThrowError();
    }
}

describe('the errored modules', () => {
    it(`should not crash when there is no error in the module`, createModuleDevelopTest('no-error', true));
    it(`should crash when there is a syntax-error in the module`, createModuleDevelopTest('syntax-error', false));
    it(
        `should crash when there is a type-error IN DECLARE in the module`,
        createModuleDevelopTest('type-error', false),
    );
    it(
        `should crash when there is a runtime-error-in-declare in the module`,
        createModuleDevelopTest('runtime-error-in-declare', false),
    );
    it(
        `should crash when there is a runtime-error-in-setup in the module`,
        createModuleDevelopTest('runtime-error-in-setup', false),
    );
    it(
        `should crash when there is a runtime-error-in-unsetup in the module`,
        createModuleDevelopTest('runtime-error-in-unsetup', false),
    );
    it(
        `should crash when there is a missing-package-error in the module`,
        createModuleDevelopTest('missing-package-error', false),
    );
    it(
        `should crash when there is a missing-entry-error in the module`,
        createModuleDevelopTest('missing-entry-error', false),
    );
    it(
        `should crash when there is a version-mismatch-error in the module`,
        createModuleDevelopTest('version-mismatch-error', false),
    );
    it(`should crash when there is a empty-project in the module`, createModuleDevelopTest('empty-project', false));
    it(`should crash when there is a missing-scope in the module`, createModuleDevelopTest('missing-scope', false));
    it(`should crash when there is a name-collision in the module`, createModuleDevelopTest('name-collision', false));
});
