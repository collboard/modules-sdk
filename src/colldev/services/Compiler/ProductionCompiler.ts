import { readFile, writeFile } from 'fs';
//import { unlink } from 'fs/promises';
import { join } from 'path';
import { promisify } from 'util';
import { Compiler, ICompilerOptions } from './Compiler';
import { createManifests } from './utils/createManifests';
import { getModulePackageJsonContent } from './utils/getModulePackageJsonContent';
import { getModulePackageJsonPath } from './utils/getModulePackageJsonPath';

interface IDevelopmentCompilerOptions extends ICompilerOptions {
    outDir: string;
}

export class ProductionCompiler extends Compiler<IDevelopmentCompilerOptions> {
    protected async createWebpackConfig() {
        const { name, version } = await getModulePackageJsonContent(this.options.workingDir);

        if (!name) {
            throw new Error(
                `You need to provide "name" in package.json\n${getModulePackageJsonPath(this.options.workingDir)}`,
            );
        }

        if (!version) {
            throw new Error(
                `You need to provide "version" in package.json\n${getModulePackageJsonPath(this.options.workingDir)}`,
            );
        }

        return {
            mode: 'production' as 'production',
            output: {
                filename: `${name}.${version}.min.js`,
                path: join(process.cwd(), this.options.outDir),
            },
        };
    }

    protected async runPostprocessing(mainBundlePath: string) {
        // TODO: Flag keep-license-information
        // TODO: Also remove mentioned license in bundle file
        //await unlink(mainBundlePath + '.LICENSE.txt').catch(() => false);

        await promisify(writeFile)(
            `${mainBundlePath}.manifests.json`,
            JSON.stringify(
                await createManifests({
                    bundleContent: await promisify(readFile)(mainBundlePath, 'utf8'),
                    packageJson: await getModulePackageJsonContent(this.options.workingDir),
                }),
                null,
                4,
            ),
        );
    }
}
