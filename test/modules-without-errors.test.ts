import { createModuleDevelopTest } from './test-utils/createModuleDevelopTest';

jest.setTimeout(3* 60 * 1000);

describe('misc working modules', () => {
    /* Maybe TODO:
    it(`should work when running colldev without path only in the current directory`, () =>
        expect(
            getFlags().then((flags) =>
                execCommand({
                    command: `npx ts-node --project ../../tsconfig.json ../../src/colldev/main.ts develop ${flags}`,
                    cwd: join(__dirname, '../../test-samples/hello-world'),
                    timeout: 60 * 1000,
                }),
            ),
        ).resolves.not.toThrowError());
    */

    it(`should work when there is no error in the module`, createModuleDevelopTest('errors/no-error', null));
    it(`should work on hello-world sample`, createModuleDevelopTest('hello-world', null));
    it(`should work on multimodule sample`, createModuleDevelopTest('multimodule', null));
    it(`should work on testing assets sample`, createModuleDevelopTest('test-assets', null));

    // TODO: More tests with more sophisticated modules (and maybe external ones)
    // TODO: More tests with module makers (maybe in makers repository)
});
