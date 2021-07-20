import { join } from 'path';
import { execCommand } from './utils/execCommand';
import { getCollboardUrlFlag } from './utils/getCollboardUrlFlag';
import { getFreshPortflag } from './utils/getFreshPortFlag';

jest.setTimeout(1000 * 60);

describe('the errored modules', () => {
    it('xxxxxxx', async () => {
        console.log(await getCollboardUrlFlag());
    });

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

    it(`should NOT crash when there is NO ERROR in the module`, async () => {
        await expect(
            execCommand({
                command: `ts-node ./src/colldev/main.ts develop ./test-samples/errors/no-error --open multiple --exit  --disconnect ${await getFreshPortflag()} ${await getCollboardUrlFlag()}`,
                cwd: join(__dirname, '..'),
            }),
        ).resolves.not.toThrow();
        expect.assertions(1);
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
        it(`should crash when there is a ${errorType.split('-').join(' ').toUpperCase()} in the module`, async () => {
            await expect(
                execCommand({
                    command: `ts-node ./src/colldev/main.ts develop ./test-samples/errors/${errorType} --open multiple --exit --headless -c --disconnect ${await getFreshPortflag()}  ${await getCollboardUrlFlag()}`,
                    cwd: join(__dirname, '..'),
                }),
            ).rejects.toThrow();
            expect.assertions(1);
        });
    });
});
