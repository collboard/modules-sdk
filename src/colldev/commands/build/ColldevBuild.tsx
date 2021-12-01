import commander from 'commander';
import { Destroyable } from 'destroyable';
import { readFile, writeFile } from 'fs';
import { Box } from 'ink';
import * as React from 'react';
import { map } from 'rxjs/operators';
import { promisify } from 'util';
import { CompilerStatusOutputComponent } from '../../services/Compiler/CompilerStatusOutputComponent';
import { ProductionCompiler } from '../../services/Compiler/ProductionCompiler';
import { compilerStatusToJson } from '../../services/Compiler/utils/compilerStatusToJson';
import { createManifests } from '../../services/Compiler/utils/createManifests';
import { forServicesReady } from '../../utils/forServicesReady';
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

        await forServicesReady(this.compiler);
        await createManifests(this.compiler.status.value.bundle!.path);
      
    }

    public render() {
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
