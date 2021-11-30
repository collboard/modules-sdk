import { Destroyable, IDestroyable } from 'destroyable';
import { join } from 'path';
import { BehaviorSubject } from 'rxjs';
import * as uuid from 'uuid';
import webpack, { Compiler as WebpackCompiler, WebpackError } from 'webpack';
import { ASSETS_PATH } from '../../../config';
import { ICompilerStats, ICompilerStatus } from './ICompilerStatus';
import { cleanupAssets } from './utils/cleanupAssets';
import { getModulePackageMainPath } from './utils/getModulePackageMainPath';
import { makeColldevFolder } from './utils/makeColldevFolder';

export interface ICompilerOptions {
    workingDir: string;
}

export abstract class Compiler<TOptions extends ICompilerOptions> extends Destroyable implements IDestroyable {
    protected bundleId: string;
    protected bundleFilename: string;
    protected packageMainPath: string;
    protected webpackConfig: webpack.Configuration;

    public constructor(protected readonly options: TOptions) {
        super();
        this.init();
    }

    /**
     * Note: We are not using here mobx-react because it does not work with ink
     */
    readonly compilerStatus: BehaviorSubject<ICompilerStatus> = new BehaviorSubject({ ready: false, errors: [] });

    private get compilerStats(): ICompilerStats {
        const { workingDir } = this.options;
        const { bundleId, bundleFilename, packageMainPath, webpackConfig } = this;
        return {
            workingDir,
            bundleId,
            bundleFilename,
            packageMainPath,
            webpackConfig,
        };
    }

    private compiler: WebpackCompiler;

    protected abstract getWebpackConfig(): Partial<webpack.Configuration> &
        Pick<webpack.Configuration, 'mode' | 'output'>;

    private async init() {
        try {
            await makeColldevFolder();
            await cleanupAssets();

            this.bundleId = uuid.v4();
            this.bundleFilename = `bundle-${this.bundleId}.min.js`;
            this.packageMainPath = await getModulePackageMainPath(this.options.workingDir);
            this.webpackConfig = {
                ...this.getWebpackConfig(),
                // TODO: !!! Generate sourcemaps
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
            };

            this.compiler = webpack(
                // TODO: Maybe use webpack watch instead of onchange
                // TODO: Wrap webpack to some util that outputs RxJS stream of compiled sources
                this.webpackConfig,
                async (uselessError /* Note: This error is probbably useless */, webpackStats) => {
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
        // TODO: await cleanupAssets();
        this.compiler.close(() => {
            /* TODO: What is this callback about */
        });
    }
}
