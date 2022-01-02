import { string_file_path } from '../../types';

export interface IColldevOptions {
    entryPath: string_file_path;
    output: 'human' | 'compact' | 'minimal' | 'json' | 'json-raw';
}

/**
 * TODO: Allow to set config file instead of default colldev.js
 * TODO: Allow multiple entryPath
 */
