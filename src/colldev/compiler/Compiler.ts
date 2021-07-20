import { Destroyable, IDestroyable } from 'destroyable';
import { join } from 'path';
import { BehaviorSubject } from 'rxjs';
import * as uuid from 'uuid';
import webpack, { Compiler as WebpackCompiler, WebpackError } from 'webpack';
import { ASSETS_PATH } from '../config';
import { ICompilerStats, ICompilerStatus } from './ICompilerStatus';
import { cleanupAssets } from './utils/cleanupAssets';
import { getModulePackageMainPath } from './utils/getModulePackageMainPath';
import { makeColldevFolder } from './utils/makeColldevFolder';

export class Compiler extends Destroyable implements IDestroyable {
    private bundleId: string;
    private bundleFilename: string;
    private packageMainPath: string;
    private webpackConfig: webpack.Configuration;

    constructor(private readonly workingDir: string) {
        super();
        this.init();
    }

    /**
     * Note: We are not using here mobx-react because it does not work with ink
     */
    readonly compilerStatus: BehaviorSubject<ICompilerStatus> = new BehaviorSubject({ ready: false, errors: [] });

    private get compilerStats(): ICompilerStats {
        const { workingDir, bundleId, bundleFilename, packageMainPath, webpackConfig } = this;
        return {
            workingDir,
            bundleId,
            bundleFilename,
            packageMainPath,
            webpackConfig,
        };
    }

    private compiler: WebpackCompiler;

    private async init() {
        try {
            await makeColldevFolder();
            await cleanupAssets();

            this.bundleId = uuid.v4();
            this.bundleFilename = `bundle-${this.bundleId}.min.js`;
            this.packageMainPath = await getModulePackageMainPath(this.workingDir);
            this.webpackConfig = {
                // TODO: Generate sourcemaps
                watch: true,
                mode: 'development', //'production',
                devtool: 'source-map',
                entry: this.packageMainPath,
                module: {
                    rules: [
                        {
                            test: /\.tsx?$/,
                            use: 'ts-loader',
                            exclude: /node_modules/,
                        },
                    ],
                },
                resolve: {
                    extensions: ['.tsx', '.ts', '.js'],
                },
                output: {
                    // TODO: Bypass files and just keep output in memory probbably via "compiler.outputFileSystem = fs;"
                    filename: this.bundleFilename,
                    path: ASSETS_PATH,
                },
            };

            this.compiler = webpack(
                // TODO: Maybe use webpack watch instead of onchange
                // TODO: Wrap webpack to some util that outputs RxJS stream of compiled sources
                this.webpackConfig,
                async (__error /* Note: This error is probbably useless */, webpackStats) => {
                    const errors: Error[] = [];
                    if (webpackStats?.hasErrors()) {
                        errors.push(
                            new WebpackError(
                                webpackStats?.toString({
                                    chunks: false, // Makes the build much quieter
                                    colors: true, // Shows colors in the console
                                }),
                            ),
                        );
                    }

                    this.compilerStatus.next({
                        ready: true,
                        errors,
                        compilerStats: this.compilerStats,
                        webpackStats,
                        bundle: { path: join(ASSETS_PATH, this.bundleFilename) },
                    });
                },
            );
        } catch (error) {
            this.compilerStatus.next({
                ready: true,
                errors: [error],
                compilerStats: this.compilerStats,
            });
        }
    }

    public async destroy() {
        await super.destroy();
        // !!! console.log(`--------`);
        // !!! await cleanupAssets();
        this.compiler.close(() => {
            /* TODO: What is this callback about */
        });
    }
}
