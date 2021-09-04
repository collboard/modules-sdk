import { join } from 'path';
import { execCommand } from './test-utils/execCommand';

jest.setTimeout(1000 * 60);

describe('wrong usage of Colldev CLI command', () => {
    it(`should crash when you specify unknown flag`, async () => {
        await expect(
            execCommand({
                command: `ts-node ./src/colldev/main.ts develop ./test-samples/errors/no-error --exit --foooo`,
                cwd: join(__dirname, '..'),
            }),
        ).rejects.toThrow();
        expect.assertions(1);
    });

    it(`should crash when you specify unknown output`, async () => {
        await expect(
            execCommand({
                command: `ts-node ./src/colldev/main.ts develop ./test-samples/errors/no-error --exit --output monkey`,
                cwd: join(__dirname, '..'),
            }),
        ).rejects.toThrow();
        expect.assertions(1);
    });

    it(`should crash when you specify unknown browser`, async () => {
        await expect(
            execCommand({
                command: `ts-node ./src/colldev/main.ts develop ./test-samples/errors/no-error --exit --browser foooo`,
                cwd: join(__dirname, '..'),
            }),
        ).rejects.toThrow();
        expect.assertions(1);
    });

    it(`makes no sense to use json output without exit flag`, async () => {
        await expect(
            execCommand({
                command: `ts-node ./src/colldev/main.ts develop ./test-samples/errors/no-error --output json`,
                cwd: join(__dirname, '..'),
            }),
        ).rejects.toThrow();
        await expect(
            execCommand({
                command: `ts-node ./src/colldev/main.ts develop ./test-samples/errors/no-error --output json-raw`,
                cwd: join(__dirname, '..'),
            }),
        ).rejects.toThrow();
        expect.assertions(2);
    });

    // TODO: More
});
