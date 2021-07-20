import webpack from 'webpack';

export interface ICompilerStatus {
    ready: boolean;
    errors: Error[];
    compilerStats?: ICompilerStats;
    webpackStats?: webpack.Stats;
    bundle?: { path: string };
}
export interface ICompilerStats {
    workingDir: string;
    bundleId: string;
    bundleFilename: string;
    packageMainPath: string;
    webpackConfig: webpack.Configuration;
}
