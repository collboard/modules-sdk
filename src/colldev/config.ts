import { join } from 'path';
import { string_file_relative_path } from '../../types';

/**
 * How may milliseconds to wait to declareModule in the bundle is called
 *
 * TODO: [🌟] Make this only DEFAULT_WAIT_FOR_MODULES_MS and allow to change in cli params
 */
export const WAIT_FOR_MODULES_MS = 1000;

/**
 * @deprecated
 */
export const VM_ERRORS_TEMPORARY_PATH = join(process.cwd(), '.colldev/vm/tmp');
export const DEVELOP_TEMPORARY_PATH = join(process.cwd(), '.colldev/develop/tmp');
export const TEST_TEMPORARY_RELATIVE_PATH = '.colldev/test/tmp';
export const PUBLISH_BUILD_RELATIVE_PATH = '.colldev/publish';

export const COLLDEV_CONFIG_BASENAMES = [
    'colldev.config.js',
    'colldev.config.json',
    'colldev.json',
    // Note: We can not have here colldev.js because some command lines will try to run colldev.js instaed of propper colldev and it will fail.
];
export const COLLDEV_CONFIG_POSSIBLE_DEFAULT_ENTRY_RELATIVE_PATHS: string_file_relative_path[] = [
    './index.ts',
    './index.tsx',
    './src/index.ts',
    './src/index.tsx',
];

/**
 * TODO: Put .gitignore automatically into .colldev - Is it a good idea?
 */
