import commander from 'commander';
import { Destroyable } from 'destroyable';
import { Box } from 'ink';
import * as React from 'react';
import { map } from 'rxjs/operators';
import { forImmediate } from 'waitasecond';
import { CompilerStatusOutputComponent } from '../../services/Compiler/CompilerStatusOutputComponent';
import { ProductionCompiler } from '../../services/Compiler/ProductionCompiler';
import { compilerStatusToJson } from '../../services/Compiler/utils/compilerStatusToJson';
import { joinErrors } from '../../utils/joinErrors';
import { ObservableContentComponent } from '../../utils/ObservableContentComponent';
import { ICommand } from '../ICommand';
import { IColldevBuildOptions } from './IColldevBuildOptions';
import { IColldevBuildStatus } from './IColldevBuildStatus';

export class ColldevBuild extends Destroyable implements ICommand<IColldevBuildOptions, IColldevBuildStatus> {
    private compiler: ProductionCompiler;

    public init(program: commander.Command) {
        return program
            .command('build [path]')
            .alias('deploy')
            .description(`Deploy collboard module.`)
            .option('-o, --out-dir <directory>', `Directory to save production build files.`, './build')
            .action(this.run.bind(this));
    }

    public async run(path: string, options: IColldevBuildOptions) {
        const { outDir } = options;
        this.compiler = new ProductionCompiler({ workingDir: path || './', outDir });

        // TODO: Make some util for translating (compiler)Status to promise
        await new Promise((resolve, reject) => {
            this.compiler.compilerStatus.subscribe(async ({ errors, ready }) => {
                if (ready) {
                    await forImmediate();
                    const error = joinErrors(...errors);
                    if (error) {
                        reject(error);
                    } else {
                        resolve(undefined);
                    }
                }
            });
        });
    }

    public render() {
        return (
            <>
                <ObservableContentComponent
                    content={this.compiler.compilerStatus.pipe(
                        map((compilerStatus) => (
                            <Box
                                borderStyle="round"
                                display="flex"
                                flexDirection="column"
                                borderColor={
                                    compilerStatus.errors.length ? 'red' : !compilerStatus.ready ? 'yellow' : 'white'
                                }
                            >
                                <CompilerStatusOutputComponent {...{ compilerStatus }} />
                            </Box>
                        )),
                    )}
                />
            </>
        );
    }

    public status() {
        return {
            compiler: this.compiler && compilerStatusToJson(this.compiler.compilerStatus.value),
        };
    }
}
