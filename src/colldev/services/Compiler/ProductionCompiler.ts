import { unlink } from 'fs/promises';
import { join } from 'path';
import { Compiler, ICompilerOptions } from './Compiler';
import { createManifests } from './utils/createManifests';
import { getModulePackageContent } from './utils/getModulePackageContent';
import { getModulePackagePath } from './utils/getModulePackagePath';

interface IDevelopmentCompilerOptions extends ICompilerOptions {
    outDir: string;
}

export class ProductionCompiler extends Compiler<IDevelopmentCompilerOptions> {
    protected async createWebpackConfig() {
        const { name, version } = await getModulePackageContent(this.options.workingDir);

        if (!name) {
            throw new Error(
                `You need to provide "name" in package.json\n${getModulePackagePath(this.options.workingDir)}`,
            );
        }

        if (!version) {
            throw new Error(
                `You need to provide "version" in package.json\n${getModulePackagePath(this.options.workingDir)}`,
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
        // TODO: Also remove mentioned license in bundle file
        await unlink(mainBundlePath + '.LICENSE.txt').catch(() => false);
        await createManifests(mainBundlePath);
    }
}
