import commander from 'commander';
import { Destroyable } from 'destroyable';
import { Box } from 'ink';
import * as React from 'react';
import { map } from 'rxjs/operators';
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
            .option('-c, --cleanup', `Cleanup build directory before building`, false)
            .action(this.run.bind(this));
    }

    public async run(options: IColldevBuildOptions) {
        const { workingDir, outDir, entryPath, cleanup } = options;

        this.compiler = new ProductionCompiler({ workingDir, entryPath, outDir, cleanup });
        await forServicesReady(this.compiler);

        return `Modules were build to "${outDir}".`;
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
