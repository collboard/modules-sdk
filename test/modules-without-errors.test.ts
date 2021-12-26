import { createModuleDevelopTest } from './test-utils/createModuleDevelopTest';

jest.setTimeout(60 * 1000);

describe('the errored modules', () => {
    it(
        `should crash when there is a syntax-error in the module`,
        createModuleDevelopTest('errors/syntax-error', 'asset' /*'Invalid character'*/),
    );

    /*
    it(
        `should crash when there is a type-error IN DECLARE in the module`,
        createModuleDevelopTest('errors/type-error', '!!!!!!!!!!!2'),
    );
    */
    it(
        `should crash when there is a runtime-error-in-declare in the module`,
        createModuleDevelopTest('errors/runtime-error-in-declare', 'Testing here runtime error in declare'),
    );
    /*
    it(
        `should crash when there is a runtime-error-in-setup in the module`,
        createModuleDevelopTest('errors/runtime-error-in-setup', '!!!!!!!!!!!3'),
    );
    */
    /*
    it(
        `should crash when there is a runtime-error-in-unsetup in the module`,
        createModuleDevelopTest('errors/runtime-error-in-unsetup', '!!!!!!!!!!!4'),
    );
    */
    it(
        `should crash when there is a missing-package-error in the module`,
        createModuleDevelopTest('errors/missing-package-error', 'Colldev did not found valid package.json'),
    );
    it(
        `should crash when there is a missing-entry-error in the module`,
        createModuleDevelopTest('errors/missing-entry-error', 'Colldev cannot acces main entry'),
    );
    /*
    it(
        `should crash when there is a version-mismatch-error in the module`,
        createModuleDevelopTest('errors/version-mismatch-error', '...'),
    );
    */

    /*
    it(
        `should crash when there is a empty-project in the module`,
        createModuleDevelopTest('errors/empty-project', '!!!!!!!!!!!5'),
    );
    */
    /*
    it(
        `should crash when there is a missing-scope in the module`,
        createModuleDevelopTest('errors/missing-scope', 'All modules must have the same scope'),
    );
    */
    /*
    it(
        `should crash when there is a name-collision in the module`,
        createModuleDevelopTest('errors/name-collision', 'All modules must have different names'),
    );
    */
});

/**
 * TODO: Commented tests are not supported yet
 */
