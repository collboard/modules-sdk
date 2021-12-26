import { join } from 'path';
import { execCommand } from './test-utils/execCommand/execCommand';

jest.setTimeout(1000 * 15);

describe('wrong usage of Colldev CLI command', () => {
    it(`should crash on wrong script`, () =>
        expect(
            execCommand({
                command: `npx ts-node ./wrong-script.ts`,
                timeout: 1500,
            }),
        ).rejects.toThrowError(`Cannot find module`));

    it(`should crash when you specify unknown flag`, () =>
        expect(
            execCommand({
                command: `npx ts-node ./src/colldev/main.ts develop ./test-samples/errors/no-error --exit --foooo`,
                cwd: join(__dirname, '..'),
                timeout: 8000,
            }),
        ).rejects.toThrowError(`unknown option '--foooo'`));

    it(`should crash when you specify unknown output`, () =>
        expect(
            execCommand({
                command: `npx ts-node ./src/colldev/main.ts develop ./test-samples/errors/no-error --exit --output monkey`,
                cwd: join(__dirname, '..'),
                timeout: 8000,
            }),
        ).rejects.toThrowError(`Unknown type of output "monkey"`));

    it(`should crash when you specify unknown browser`, () =>
        expect(
            execCommand({
                command: `npx ts-node ./src/colldev/main.ts develop ./test-samples/errors/no-error --exit --browser foooo`,
                cwd: join(__dirname, '..'),
                timeout: 8000,
            }),
        ).rejects.toThrowError(`Unknown browser "foooo"`));

    for (const outputMode of ['minimal', 'minimal-strict', 'json', 'json-raw']) {
        it(`makes no sense to use ${outputMode} output without exit flag`, () =>
            expect(
                execCommand({
                    command: `npx ts-node ./src/colldev/main.ts develop ./test-samples/errors/no-error --output ${outputMode}`,
                    cwd: join(__dirname, '..'),
                    timeout: 8000,
                }),
            ).rejects.toThrowError(`It makes no sense to use "--output ${outputMode}" without --exit flag.`));
    }

    // TODO: More
});
