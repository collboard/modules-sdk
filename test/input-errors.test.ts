import { join } from 'path';
import { execCommand } from './test-utils/execCommand';

jest.setTimeout(1000 * 15);

describe('wrong usage of Colldev CLI command', () => {
    it(`should crash when you specify unknown flag`, () => {
        return expect(
            execCommand({
                command: `ts-node ./src/colldev/main.ts develop ./test-samples/errors/no-error --exit --foooo`,
                cwd: join(__dirname, '..'),
            }),
        ).rejects.toThrow();
    });

    it(`should crash when you specify unknown output`, () => {
        return expect(
            execCommand({
                command: `ts-node ./src/colldev/main.ts develop ./test-samples/errors/no-error --exit --output monkey`,
                cwd: join(__dirname, '..'),
            }),
        ).rejects.toThrow();
    });

    it(`should crash when you specify unknown browser`, () => {
        return expect(
            execCommand({
                command: `ts-node ./src/colldev/main.ts develop ./test-samples/errors/no-error --exit --browser foooo`,
                cwd: join(__dirname, '..'),
            }),
        ).rejects.toThrow();
    });

    for (const outputMode of ['minimal', 'minimal-strict', 'json', 'json-raw']) {
        it(`makes no sense to use ${outputMode} output without exit flag`, () => {
            return expect(
                execCommand({
                    command: `ts-node ./src/colldev/main.ts develop ./test-samples/errors/no-error --output ${outputMode}`,
                    cwd: join(__dirname, '..'),
                }),
            ).rejects.toThrow();
        });
    }

    // TODO: More
});
