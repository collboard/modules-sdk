import { createModuleDevelopTest } from './test-utils/createModuleDevelopTest';

jest.setTimeout(1000 * 15);

describe('the errored modules', () => {
    it(
        `should crash when there is a syntax-error in the module`,
        createModuleDevelopTest('errors/syntax-error', false),
    );
    it(
        `should crash when there is a type-error IN DECLARE in the module`,
        createModuleDevelopTest('errors/type-error', false),
    );
    it(
        `should crash when there is a runtime-error-in-declare in the module`,
        createModuleDevelopTest('errors/runtime-error-in-declare', false),
    );
    it(
        `should crash when there is a runtime-error-in-setup in the module`,
        createModuleDevelopTest('errors/runtime-error-in-setup', false),
    );
    it(
        `should crash when there is a runtime-error-in-unsetup in the module`,
        createModuleDevelopTest('errors/runtime-error-in-unsetup', false),
    );
    it(
        `should crash when there is a missing-package-error in the module`,
        createModuleDevelopTest('errors/missing-package-error', false),
    );
    it(
        `should crash when there is a missing-entry-error in the module`,
        createModuleDevelopTest('errors/missing-entry-error', false),
    );
    it(
        `should crash when there is a version-mismatch-error in the module`,
        createModuleDevelopTest('errors/version-mismatch-error', false),
    );
    it(
        `should crash when there is a empty-project in the module`,
        createModuleDevelopTest('errors/empty-project', false),
    );
    it(
        `should crash when there is a missing-scope in the module`,
        createModuleDevelopTest('errors/missing-scope', false),
    );
    it(
        `should crash when there is a name-collision in the module`,
        createModuleDevelopTest('errors/name-collision', false),
    );
});
