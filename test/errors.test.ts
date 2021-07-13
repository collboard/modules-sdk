import { join } from 'path';
import { execCommand } from './utils/execCommand';

jest.setTimeout(1000 * 60);

describe('the errored modules', () => {
    /*/
    it('should PASS when testing exit codes', async () => {
        await expect(
            execCommand({
                command: 'ts-node ./test/utils/exitCodes/success.ts',
                cwd: join(__dirname, '..'),
            }),
        ).resolves.not.toThrow();
        expect.assertions(1);
    });

    it('should FAIL when testing exit codes', async () => {
        await expect(
            execCommand({
                command: 'ts-node ./test/utils/exitCodes/error.ts',
                cwd: join(__dirname, '..'),
            }),
        ).rejects.toThrow();
        expect.assertions(1);
    });
    /**/

    for (const errorType of [
        'syntax-error',
        'type-error',
        'runtime-error-in-declare',
        'runtime-error-in-setup',
        'runtime-error-in-unsetup',
        'missing-package-error',
        'missing-entry-error',
        // TODO: 'version-mismatch-error',
    ]) {
        it(`should crash when there is a ${errorType.split('-').join(' ').toUpperCase()} in the module`, async () => {
            await expect(
                execCommand({
                    command: `ts-node ./src/colldev/main.ts develop ./samples/errors/${errorType} --exit`,
                    cwd: join(__dirname, '..'),
                }),
            ).rejects.toThrow();
            expect.assertions(1);
        });
    }
});
