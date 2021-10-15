import { join } from 'path';
import { execCommand } from './test-utils/execCommand';
import { getBrowserFlag } from './test-utils/getBrowserFlag';
import { getCollboardUrlFlag } from './test-utils/getCollboardUrlFlag';
import { getFreshPortflag } from './test-utils/getFreshPortFlag';

jest.setTimeout(1000 * 60);

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

    async function createFlags() {
        const popupTestingBrowser = true;
        // TODO: Some more systematic exposed, headfull, other browser
        // TODO: Combination testing
        // TODO: Testing on multiple platforms - Linux, Windows, Mac, Docker, (maybe Android)
        return `--open multiple --exit --disconnect ${await getBrowserFlag()} ${await getFreshPortflag()} ${await getCollboardUrlFlag()}`;
    }

    it(`should NOT crash when there is NO ERROR in the module`, async () => {
        expect.assertions(1);
        return expect(
            execCommand({
                command: `ts-node ./src/colldev/main.ts develop ./test-samples/errors/no-error ${await createFlags()}`,
                cwd: join(__dirname, '..'),
            }),
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
        it(`should crash when there is a ${errorType.split('-').join(' ').toUpperCase()} in the module`, async () => {
            await expect(
                execCommand({
                    command: `ts-node ./src/colldev/main.ts develop ./test-samples/errors/${errorType} ${await createFlags()}`,
                    cwd: join(__dirname, '..'),
                }),
            ).rejects.toThrow();
            expect.assertions(1);
        });
    });
});
