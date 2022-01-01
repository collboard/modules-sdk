import { join } from 'path';
import { IColldevConfig } from './commands/IColldevConfig';

export const ASSETS_PATH = join(process.cwd(), '.colldev/assets');
export const PUBLISH_BUILD_PATH = join(process.cwd(), '.colldev/publish');

export const COLLDEV_CONFIG_BASENAMES = ['colldev.js', 'colldev.json'];
export const COLLDEV_CONFIG_DEFAULT: IColldevConfig = { entryPath: './src/index.tsx' };

/**
 * TODO: Put .gitignore automatically into .colldev - Is it a good idea?
 */
