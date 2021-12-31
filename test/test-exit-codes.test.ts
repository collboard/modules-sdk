import { join } from 'path';
import { execCommand } from './test-utils/execCommand/execCommand';

describe('test of the exit codes', () => {
    it('should PASS when testing exit codes', () =>
        expect(
            execCommand({
                command: 'npx ts-node ./test/test-utils/exitCodes/success.ts',
                cwd: join(__dirname, '..'),
            }),
        ).resolves.not.toThrowError());

    it('should FAIL when testing exit codes', () =>
        expect(
            execCommand({
                command: 'npx ts-node ./test/test-utils/exitCodes/error.ts',
                cwd: join(__dirname, '..'),
            }),
        ).rejects.toThrowError(`Sample error`));
});
