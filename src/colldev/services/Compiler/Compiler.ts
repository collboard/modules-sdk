import { Destroyable, IDestroyable } from 'destroyable';
import { join } from 'path';
import { BehaviorSubject } from 'rxjs';
import spaceTrim from 'spacetrim';
import { Promisable } from 'type-fest';
import webpack from 'webpack';
import { string_file_absolute_path, string_file_relative_path, string_folder_relative_path } from '../../../../types';
import { combineDeep } from '../../utils/combineDeep';
import { isFileExisting } from '../../utils/isFileExisting';
import { IService } from '../IService';
import { ICompilerStats, ICompilerStatus } from './ICompilerStatus';

export interface ICompilerOptions {
    workingDir: string_folder_relative_path;
    entryPath: string_file_relative_path;
}

export abstract class Compiler<TOptions extends ICompilerOptions>
    extends Destroyable
    implements IService, IDestroyable
{
    protected webpackConfig: webpack.Configuration;

    public constructor(protected readonly options: TOptions) {
        super();
        this.init();
    }

    /**
     * Note: We are not using here mobx-react because it does not work with ink
     */
    readonly status: BehaviorSubject<ICompilerStatus> = new BehaviorSubject({
        isReady: false,
        stage: 'INITIALIZED',
        errors: [],
    });

    private get compilerStats(): ICompilerStats {
        const { workingDir, entryPath } = this.options;
        const { webpackConfig } = this;
        return {
            workingDir,
            entryPath,
            webpackConfig,
        };
    }

    private compiler: webpack.Compiler;

    protected abstract createWebpackConfig(): Promisable<
        Partial<webpack.Configuration> & Pick<webpack.Configuration, 'mode' | 'output'>
    >;

    protected abstract runPreparation(): Promisable<void>;
    protected abstract runPostprocessing(mainBundlePath: string_file_absolute_path): Promisable<void>;

    private async init() {
        try {
            await this.runPreparation();

            const entry = join(process.cwd(), this.options.workingDir, this.options.entryPath);

            if (!(await isFileExisting(entry))) {
                throw new Error(
                    spaceTrim(`
                        Cannot acces entryPath
                        File ${entry} not found
                    `),
                );
            }

            this.webpackConfig = combineDeep(
                {
                    entry,
                    devtool: 'source-map',
                    module: {
                        rules: [
                            {
                                test: /\.tsx?$/,
                                use: 'ts-loader',
                                exclude: /node_modules/,
                            },
                            {
                                test: /\.css$/i,
                                use: ['style-loader', 'css-loader'],

                                exclude: /node_modules/,
                            },
                        ],
                    },

                    resolve: {
                        extensions: ['.tsx', '.ts', '.js'],
                    },
                },
                await this.createWebpackConfig(),
            );

            console.log('!!! this.webpackConfig', this.webpackConfig);

            const mainBundlePath: string_file_absolute_path = join(
                this.webpackConfig!.output!.path!,
                this.webpackConfig!.output!.filename! as string,
            );

            this.status.next({
                ...this.status.value,
                stage: 'COMPILING',
            });

            this.compiler = webpack(
                // TODO: Maybe use webpack watch instead of onchange
                // TODO: Wrap webpack to some util that outputs RxJS stream of compiled sources
                this.webpackConfig,
                async (validationError, webpackStats) => {
                    const errors: Array<Error> = [];
                    if (validationError) {
                        errors.push(validationError);
                    }

                    if (webpackStats?.hasErrors()) {
                        errors.push(
                            new webpack.WebpackError(
                                webpackStats?.toString({
                                    chunks: false, // Makes the build much quieter
                                    colors: true, // Shows colors in the console
                                }),
                            ),
                        );
                    }

                    try {
                        this.status.next({
                            ...this.status.value,
                            stage: 'POSTPROCESSING',
                        });
                        await this.runPostprocessing(mainBundlePath);
                    } catch (error) {
                        errors.push(error);
                    }

                    this.status.next({
                        isReady: true,
                        stage: 'DONE',
                        errors,
                        compilerStats: this.compilerStats,
                        webpackStats,
                        mainBundlePath,
                    });
                },
            );
        } catch (error) {
            // TODO: Same pattern on every error >  } catch (error) {
            if (error instanceof Error) {
                this.status.next({
                    isReady: true,
                    stage: 'ERROR',
                    errors: [error],
                    compilerStats: this.compilerStats,
                });
            }
        }
    }

    public async destroy() {
        await super.destroy();
        // TODO: await cleanupAssets();
        this.compiler?.close(() => {
            /* TODO: What is this callback about */
        });
    }
}
