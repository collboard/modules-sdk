import webpack from 'webpack';
import { string_file_relative_path, string_folder_relative_path } from '../../../../types';

export interface ICompilerStatus {
    isReady: boolean;
    stage: 'INITIALIZED' | 'COMPILING' | 'POSTPROCESSING' | 'DONE' | 'ERROR';
    errors: Array<Error>;
    compilerStats?: ICompilerStats;
    webpackStats?: webpack.Stats;
    mainBundlePath?: string;
}
export interface ICompilerStats {
    workingDir: string_folder_relative_path;
    entryPath: string_file_relative_path;
    webpackConfig: webpack.Configuration;
}
