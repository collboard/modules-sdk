import { Destroyable, IDestroyable } from 'destroyable';
import { unlink } from 'fs/promises';
import { join } from 'path';
import { BehaviorSubject } from 'rxjs';
import webpack, { Compiler as WebpackCompiler, WebpackError } from 'webpack';
import { ICompilerStats, ICompilerStatus } from './ICompilerStatus';
import { getModulePackageMainPath } from './utils/getModulePackageMainPath';

export interface ICompilerOptions {
    workingDir: string;
}

export abstract class Compiler<TOptions extends ICompilerOptions> extends Destroyable implements IDestroyable {
    protected packageMainPath: string;
    protected webpackConfig: webpack.Configuration;

    public constructor(protected readonly options: TOptions) {
        super();
        this.init();
    }

    /**
     * Note: We are not using here mobx-react because it does not work with ink
     */
    readonly compilerStatus: BehaviorSubject<ICompilerStatus> = new BehaviorSubject({ isReady: false, errors: [] });

    private get compilerStats(): ICompilerStats {
        const { workingDir } = this.options;
        const { packageMainPath, webpackConfig } = this;
        return {
            workingDir,
            packageMainPath,
            webpackConfig,
        };
    }

    private compiler: WebpackCompiler;

    protected abstract getWebpackConfig(): Promise<
        Partial<webpack.Configuration> & Pick<webpack.Configuration, 'mode' | 'output'>
    >;

    private async init() {
        try {
            this.packageMainPath = await getModulePackageMainPath(this.options.workingDir);

            this.webpackConfig = {
                ...(await this.getWebpackConfig()),
                entry: this.packageMainPath,
                devtool: 'source-map',
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

            // console.log(this.webpackConfig);
            // process.exit(0);

            const bundle = {
                path: join(this.webpackConfig!.output!.path!, this.webpackConfig!.output!.filename! as string),
            };

            this.compiler = webpack(
                // TODO: Maybe use webpack watch instead of onchange
                // TODO: Wrap webpack to some util that outputs RxJS stream of compiled sources
                this.webpackConfig,
                async (uselessError /* Note: This error is probbably useless */, webpackStats) => {
                    await unlink(bundle.path + '.LICENSE.txt').catch(() => false);

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
                        isReady: true,
                        errors,
                        compilerStats: this.compilerStats,
                        webpackStats,
                        bundle,
                    });
                },
            );
        } catch (error) {
            this.compilerStatus.next({
                isReady: true,
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
