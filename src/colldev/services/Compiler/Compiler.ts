import { Destroyable, IDestroyable } from 'destroyable';
import { join } from 'path';
import { BehaviorSubject } from 'rxjs';
import spaceTrim from 'spacetrim';
import { Promisable } from 'type-fest';
import webpack, { Compiler as WebpackCompiler, WebpackError } from 'webpack';
import { string_file_path, string_folder_path } from '../../../../types';
import { isFileExisting } from '../../utils/isFileExisting';
import { IService } from '../IService';
import { ICompilerStats, ICompilerStatus } from './ICompilerStatus';

export interface ICompilerOptions {
    workingDir: string_folder_path;
    entryPath: string_file_path;
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

    private compiler: WebpackCompiler;

    protected abstract createWebpackConfig(): Promisable<
        Partial<webpack.Configuration> & Pick<webpack.Configuration, 'mode' | 'output'>
    >;

    protected abstract runPreparation(): Promisable<void>;
    protected abstract runPostprocessing(mainBundlePath: string_file_path): Promisable<void>;

    private async init() {
        try {
            if (!this.options.workingDir) {
                this.options.workingDir = './';
                // TODO: Is this nessesary? WorkingDir is used only with context of join(process.cwd(), this.options.workingDir;
                // TODO: Maybe split workingDir vs. workingRelativeDir
                // TODO: Maybe workingPath not workingDir
            }

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

            this.webpackConfig = {
                ...(await this.createWebpackConfig()),
                entry,
                devtool: 'source-map',

                resolve: {
                    extensions: ['.tsx', '.ts', '.js'],
                },
            };

            //console.log(this.webpackConfig);
            //process.exit(0);

            const mainBundlePath = join(
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
                    const errors: Error[] = [];
                    if (validationError) {
                        errors.push(validationError);
                    }

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
        this.compiler.close(() => {
            /* TODO: What is this callback about */
        });
    }
}
