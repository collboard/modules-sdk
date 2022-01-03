import commander from 'commander';
import { Destroyable } from 'destroyable';
import { Box } from 'ink';
import * as React from 'react';
import { map } from 'rxjs/operators';
import { string_folder_path } from '../../../../types';
import { CompilerStatusOutputComponent } from '../../services/Compiler/CompilerStatusOutputComponent';
import { ProductionCompiler } from '../../services/Compiler/ProductionCompiler';
import { compilerStatusToJson } from '../../services/Compiler/utils/compilerStatusToJson';
import { forServicesReady } from '../../utils/forServicesReady';
import { ObservableContentComponent } from '../../utils/ObservableContentComponent';
import { ICommand } from '../ICommand';
import { IColldevBuildOptions } from './IColldevBuildOptions';
import { IColldevBuildStatus } from './IColldevBuildStatus';

export class ColldevBuild extends Destroyable implements ICommand<IColldevBuildOptions, IColldevBuildStatus> {
    public readonly name = 'build';
    private compiler: ProductionCompiler;

    public init(program: commander.Command) {
        return program
            .command('build [path]')
            .alias('deploy')
            .description(`Deploy collboard module`)
            .option('-o, --out-dir <directory>', `Directory to save production build files.`, './build')
            .action(this.run.bind(this));
    }

    public async run(workingDir: string_folder_path, options: IColldevBuildOptions) {
        const { outDir, entryPath } = options;

        this.compiler = new ProductionCompiler({ workingDir, entryPath, outDir });
        await forServicesReady(this.compiler);

        return `Module was build to "${outDir}".`;
    }

    public render() {
        // TODO: DRY ColldevBuild and ColldevPublish
        return (
            <>
                <ObservableContentComponent
                    content={this.compiler.status.pipe(
                        map((compilerStatus) => (
                            <Box
                                borderStyle="round"
                                display="flex"
                                flexDirection="column"
                                borderColor={
                                    compilerStatus.errors.length ? 'red' : !compilerStatus.isReady ? 'yellow' : 'white'
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
            compiler: this.compiler && compilerStatusToJson(this.compiler.status.value),
        };
    }
}


/**
 * !!! Make Assets working
 */