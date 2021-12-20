import { readFile, writeFile } from 'fs';
//import { unlink } from 'fs/promises';
import { join } from 'path';
import { promisify } from 'util';
import { Compiler, ICompilerOptions } from './Compiler';
import { createManifests } from './utils/createManifests';
import { getModulePackageJsonContent } from './utils/getModulePackageJsonContent';

interface IDevelopmentCompilerOptions extends ICompilerOptions {
    outDir: string;
}

export class ProductionCompiler extends Compiler<IDevelopmentCompilerOptions> {
    protected async createWebpackConfig() {
        return {
            mode: 'production' as 'production',
            output: {
                filename: `bundle.min.js`,
                path: join(process.cwd(), this.options.outDir),
            },
        };
    }

    protected async runPostprocessing(mainBundlePath: string) {
        // TODO: Flag keep-license-information
        // TODO: Also remove mentioned license in bundle file
        //await unlink(mainBundlePath + '.LICENSE.txt').catch(() => false);

        const manifests = await createManifests({
            bundleContent: await promisify(readFile)(mainBundlePath, 'utf8'),
            packageJson: await getModulePackageJsonContent(this.options.workingDir),
        });

        await promisify(writeFile)(`${mainBundlePath}.manifests.json`, JSON.stringify(manifests, null, 4));

        // TODO: !!! Rename to some better name including all the modules
    }
}
