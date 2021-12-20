import { Destroyable, IDestroyable } from 'destroyable';
import { join } from 'path';
import { BehaviorSubject } from 'rxjs';
import { Promisable } from 'type-fest';
import webpack, { Compiler as WebpackCompiler, WebpackError } from 'webpack';
import { IService } from '../IService';
import { ICompilerStats, ICompilerStatus } from './ICompilerStatus';
import { getModuleEntryPath } from './utils/getModuleEntryPath';

export interface ICompilerOptions {
    workingDir: string;
}

export abstract class Compiler<TOptions extends ICompilerOptions>
    extends Destroyable
    implements IService, IDestroyable
{
    protected moduleEntryPath: string;
    protected webpackConfig: webpack.Configuration;

    public constructor(protected readonly options: TOptions) {
        super();
        this.init();
    }

    /**
     * Note: We are not using here mobx-react because it does not work with ink
     */
    readonly status: BehaviorSubject<ICompilerStatus> = new BehaviorSubject({ isReady: false, errors: [] });

    private get compilerStats(): ICompilerStats {
        const { workingDir } = this.options;
        const { moduleEntryPath, webpackConfig } = this;
        return {
            workingDir,
            moduleEntryPath,
            webpackConfig,
        };
    }

    private compiler: WebpackCompiler;

    protected abstract createWebpackConfig(): Promisable<
        Partial<webpack.Configuration> & Pick<webpack.Configuration, 'mode' | 'output'>
    >;

    protected abstract runPostprocessing(mainBundlePath: string): Promisable<void>;

    private async init() {
        try {
            this.moduleEntryPath = await getModuleEntryPath(this.options.workingDir);

            this.webpackConfig = {
                ...(await this.createWebpackConfig()),
                entry: this.moduleEntryPath,
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

            const mainBundlePath = join(
                this.webpackConfig!.output!.path!,
                this.webpackConfig!.output!.filename! as string,
            );

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

                    try {
                        await this.runPostprocessing(mainBundlePath);
                    } catch (error) {
                        errors.push(error);
                    }

                    this.status.next({
                        isReady: true,
                        errors,
                        compilerStats: this.compilerStats,
                        webpackStats,
                        mainBundlePath,
                    });
                },
            );
        } catch (error) {
            this.status.next({
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
