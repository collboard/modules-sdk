import { string_file_relative_path, string_folder_relative_path } from '../../types';

export interface IColldevOptions {
    workingDir: string_folder_relative_path;
    entryPath: string_file_relative_path;
    output: 'human' | 'compact' | 'minimal' | 'json' | 'json-raw';
}

/**
 * TODO: Allow multiple entryPath
 */
