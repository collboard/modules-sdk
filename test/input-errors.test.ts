import { join } from 'path';
import { execCommand } from './test-utils/execCommand/execCommand';

jest.setTimeout(1000 * 15);

describe('wrong usage of Colldev CLI command', () => {
    it(`should crash on wrong script`, () =>
        expect(
            execCommand({
                command: `npx ts-node ./wrong-script.ts`,
                timeout: 8000,
            }),
        ).rejects.toThrowError(`Cannot find module`));

    it(`should crash when you specify unknown flag`, () =>
        expect(
            execCommand({
                command: `npx ts-node ./src/colldev/main.ts develop ./test-samples/errors/no-error --exit --foooo`,
                cwd: join(__dirname, '..'),
                timeout: 15 * 1000,
            }),
        ).rejects.toThrowError(`unknown option '--foooo'`));

    it(`should crash when you specify unknown output`, () =>
        expect(
            execCommand({
                command: `npx ts-node ./src/colldev/main.ts develop ./test-samples/errors/no-error --exit --output monkey`,
                cwd: join(__dirname, '..'),
                timeout: 15 * 1000,
            }),
        ).rejects.toThrowError(`Unknown type of output "monkey"`));

    it(`should crash when you specify unknown browser`, () =>
        expect(
            execCommand({
                command: `npx ts-node ./src/colldev/main.ts develop ./test-samples/errors/no-error --exit --browser foooo`,
                cwd: join(__dirname, '..'),
                timeout: 15 * 1000,
            }),
        ).rejects.toThrowError(`Unknown browser "foooo"`));

    for (const outputMode of ['compact', 'minimal', 'json', 'json-raw']) {
        it(`makes no sense to use ${outputMode} output without exit flag`, () =>
            expect(
                execCommand({
                    command: `npx ts-node ./src/colldev/main.ts develop ./test-samples/errors/no-error --output ${outputMode}`,
                    cwd: join(__dirname, '..'),
                    timeout: 15 * 1000,
                }),
            ).rejects.toThrowError(/*
                Note: Can not specify error message because it will vary depending on the output mode
                > `It makes no sense to use output "${outputMode}"`
            */));
    }

    // TODO: makes no sense to use headless flag with system browser OR implement via the flags

    // TODO: More
});
