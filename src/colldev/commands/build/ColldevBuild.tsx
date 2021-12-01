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

        // TODO: !!! Test that package.json and manifest has same content
        // TODO: Maybe some service called "Verifier"
        const bundleContent = await promisify(readFile)(this.compiler.status.value.bundle!.path, 'utf8');

        const extractManifestsRuntime = await promisify(readFile)('./src/runtime/extractManifestsRuntime.js', 'utf8');
        const extractManifestsRuntimeWithBundleContent = extractManifestsRuntime.replace(
            /^.*bundle content.*$/m,
            '\n' + bundleContent,
        );

        // TODO: !!! Isolate into function like evaluate + in tmp folder + cleanup (and strategy how to garbage collect files that wasnt deleted propperly)
        await promisify(writeFile)('./build/fake.js', extractManifestsRuntimeWithBundleContent);

        //const manifests = await eval(fakeRuntimeWithBundleContent);

        const manifests = await require('../../../../build/fake.js');

        // TODO: !!! Add info from package.json to manifists
        // TODO: !!! Test that package.json and manifest has same content

        await promisify(writeFile)(
            this.compiler.status.value.bundle!.path + '.manifests.json',
            JSON.stringify(manifests, null, 4),
        );
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
