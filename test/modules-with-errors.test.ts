import { createModuleDevelopTest } from './test-utils/createModuleDevelopTest';

jest.setTimeout(60 * 1000);

describe('the errored modules', () => {
    it(`should work when there is no error in the module`, createModuleDevelopTest('errors/no-error', true));
    it(`should work on hello-world sample`, createModuleDevelopTest('hello-world', true));
    it(`should work on multimodule sample`, createModuleDevelopTest('multimodule', true));

    // TODO: More tests with more sophisticated modules (and maybe external ones)
    // TODO: More tests with module makers (maybe in makers repository)
});
