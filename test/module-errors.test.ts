import { join } from 'path';
import { execCommand } from './test-utils/execCommand';
import { getFlags } from './test-utils/getFlags';

jest.setTimeout(1000 * 30);

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

    it(`should NOT crash when there is NO ERROR in the module`, () => {
        return expect(
            getFlags().then((flags) =>
                execCommand({
                    command: `ts-node ./src/colldev/main.ts develop ./test-samples/errors/no-error ${flags}`,
                    cwd: join(__dirname, '..'),
                }),
            ),
        ).resolves.not.toThrow();
    });

    [
        'syntax-error',
        // TODO: 'type-error',
        'runtime-error-in-declare',
        'runtime-error-in-setup',
        // TODO: 'runtime-error-in-unsetup',
        'missing-package-error',
        'missing-entry-error',
        // TODO: 'version-mismatch-error',
    ].forEach((errorType) => {
        it(`should crash when there is a ${errorType.split('-').join(' ').toUpperCase()} in the module`, () => {
            return expect(
                getFlags().then((flags) =>
                    execCommand({
                        command: `ts-node ./src/colldev/main.ts develop ./test-samples/errors/${errorType} ${flags}`,
                        cwd: join(__dirname, '..'),
                    }),
                ),
            ).rejects.toThrow();
        });
    });
});
