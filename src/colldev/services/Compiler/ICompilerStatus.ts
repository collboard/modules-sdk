import webpack from 'webpack';

export interface ICompilerStatus {
    isReady: boolean;
    errors: Error[];
    compilerStats?: ICompilerStats;
    webpackStats?: webpack.Stats;
    mainBundlePath?: string;
}
export interface ICompilerStats {
    workingDir: string;
    packageMainPath: string;
    webpackConfig: webpack.Configuration;
}
