import { join } from 'path';
import { string_file_path } from '../../types';

// !!! Distinct relative and absolute paths by name
export const DEVELOP_TEMPORARY_PATH = join(process.cwd(), '.colldev/develop/tmp');
export const PUBLISH_BUILD_PATH = '.colldev/publish';

export const COLLDEV_CONFIG_BASENAMES = ['colldev.js', 'colldev.json'];
export const COLLDEV_CONFIG_POSSIBLE_DEFAULT_ENTRY_PATH: string_file_path[] = [
    './index.ts',
    './index.tsx',
    './src/index.ts',
    './src/index.tsx',
];

/**
 * TODO: Put .gitignore automatically into .colldev - Is it a good idea?
 */
