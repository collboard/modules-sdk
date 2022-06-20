import { createModuleDevelopTest } from './test-utils/createModuleDevelopTest';

jest.setTimeout(3*60 * 1000);

describe('the errored modules', () => {
    it(
        `should crash when there is a syntax-error in the module`,
        createModuleDevelopTest('errors/syntax-error', 'Error:  asset' /*... 'TS1127: Invalid character.'*/),
    );

    /*
    TODO:
    it(
        `should crash when there is a type-error IN DECLARE in the module`,
        createModuleDevelopTest('errors/type-error', 'TODO'),
    );
    */
    it(
        `should crash when there is a runtime-error-in-declare in the module`,
        createModuleDevelopTest('errors/runtime-error-in-declare', 'Testing here runtime error in declare'),
    );
    /*
    TODO:
    it(
        `should crash when there is a runtime-error-in-setup in the module`,
        createModuleDevelopTest('errors/runtime-error-in-setup', 'TODO'),
    );
    */
    /*
    TODO:
    it(
        `should crash when there is a runtime-error-in-unsetup in the module`,
        createModuleDevelopTest('errors/runtime-error-in-unsetup', 'TODO'),
    );
    */
    it(
        `should crash when there is a missing-entry-error in the module`,
        createModuleDevelopTest('errors/missing-entry-error', 'Cannot acces entryPath'),
    );
    /*
    TODO:
    it(
        `should crash when there is a version-mismatch-error in the module`,
        createModuleDevelopTest('errors/version-mismatch-error', 'TODO'),
    );
    */

    /*
    TODO:
    it(
        `should crash when there is a empty-project in the module`,
        createModuleDevelopTest('errors/empty-project', 'TODO'),
    );
    */
    /*
    TODO:
    it(
        `should crash when there is a missing-scope in the module`,
        createModuleDevelopTest('errors/missing-scope', 'All modules must have the same scope'),
    );
    */
    /*
    TODO:
    it(
        `should crash when there is a name-collision in the module`,
        createModuleDevelopTest('errors/name-collision', 'All modules must have different names'),
    );
    */

    it(
        `should crash when you try to declare anonymous module`,
        createModuleDevelopTest(
            'errors/declare-anonymous-module',
            'Cannot declare module without defined manifest. Modules without manifest',
        ),

        // TODO: Test this scenario also for publishing
    );

    /*
    TODO:
    it(
        `should crash when you try to include unsupported file type into the module`,
        createModuleDevelopTest('errors/unsupported-asset-type', 'Unsupported asset type'),

    );
    */
});

/**
 * TODO: Commented tests are not supported yet
 */
