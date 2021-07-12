import { join } from 'path';
import { execCommand } from './utils/execCommand';

jest.setTimeout(1000 * 60);

async function xyz(pass: boolean) {
    if (!pass) {
        throw new Error(`abc`);
    }
}

describe('the errored modules', () => {
    /*
    it('pass', async () => {
        await expect(xyz(true)).resolves.not.toThrow();
        expect.assertions(1);
    });

    it('fail', async () => {
        await expect(xyz(false)).rejects.toThrow();
        expect.assertions(1);
    });
    */

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

    // DRY

    it('should crash when there is a SYNTAX ERROR in the module', async () => {
        await expect(
            execCommand({
                command: 'ts-node ./src/colldev/main.ts develop ./samples/errors/syntax-error --exit',
                cwd: join(__dirname, '..'),
            }),
        ).rejects.toThrow();
        expect.assertions(1);
    });

    /*
    it('should crash when there is a TYPE ERROR in the module', async () => {
        await expect(
            execCommand({
                command: 'ts-node src/colldev/main.ts develop ./samples/errors/type-error --exit',
                cwd: join(__dirname, '..'),
            }),
        ).rejects.toThrow('I should fail!!!');
        expect.assertions(1);
    });
    */
});
