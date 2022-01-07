import { join } from 'path';
import { string_file_relative_path } from '../../types';

export const DEVELOP_TEMPORARY_PATH = join(process.cwd(), '.colldev/develop/tmp');
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
