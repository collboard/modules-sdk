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

    for (const errorType of ['syntax', 'type']) {
        it(`should crash when there is a ${errorType.toUpperCase()} ERROR in the module`, async () => {
            await expect(
                execCommand({
                    command: `ts-node ./src/colldev/main.ts develop ./samples/errors/${errorType}-error --exit`,
                    cwd: join(__dirname, '..'),
                }),
            ).rejects.toThrow();
            expect.assertions(1);
        });
    }
});
