import webpack from 'webpack';

export interface ICompilerStatus {
    isReady: boolean;
    stage: 'INITIALIZED' | 'COMPILING' | 'POSTPROCESSING' | 'DONE' | 'ERROR';
    errors: Error[];
    compilerStats?: ICompilerStats;
    webpackStats?: webpack.Stats;
    mainBundlePath?: string;
}
export interface ICompilerStats {
    workingDir: string;
    moduleEntryPath: string;
    webpackConfig: webpack.Configuration;
}
