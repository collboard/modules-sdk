import { join } from 'path';
import { execCommand } from './test-utils/execCommand';

// jest.setTimeout(1000 * 15);

describe('wrong usage of Colldev CLI command', () => {
    it(`should crash on unknown command`, () =>
        expect(
            execCommand({
                command: `unknown-command`,
            }),
        ).rejects.toThrowError());

    it(`should crash on wrong script`, () =>
        expect(
            execCommand({
                command: `ts-node ./wrong-script.ts`,
            }),
        ).rejects.toThrowError());

    it(`should crash when you specify unknown flag`, () =>
        expect(
            execCommand({
                command: `ts-node ./src/colldev/main.ts develop ./test-samples/errors/no-error --exit --foooo`,
                cwd: join(__dirname, '..'),
            }),
        ).rejects.toThrowError());

    it(`should crash when you specify unknown output`, () =>
        expect(
            execCommand({
                command: `ts-node ./src/colldev/main.ts develop ./test-samples/errors/no-error --exit --output monkey`,
                cwd: join(__dirname, '..'),
            }),
        ).rejects.toThrowError());

    it(`should crash when you specify unknown browser`, () =>
        expect(
            execCommand({
                command: `ts-node ./src/colldev/main.ts develop ./test-samples/errors/no-error --exit --browser foooo`,
                cwd: join(__dirname, '..'),
            }),
        ).rejects.toThrowError());

    for (const outputMode of ['minimal', 'minimal-strict', 'json', 'json-raw']) {
        it(`makes no sense to use ${outputMode} output without exit flag`, () =>
            expect(
                execCommand({
                    command: `ts-node ./src/colldev/main.ts develop ./test-samples/errors/no-error --output ${outputMode}`,
                    cwd: join(__dirname, '..'),
                }),
            ).rejects.toThrowError());
    }

    // TODO: More
});
