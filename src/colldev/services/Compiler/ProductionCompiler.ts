import { readFile, writeFile } from 'fs';
import { gzip } from 'node-gzip';
//import { unlink } from 'fs/promises';
import { basename, dirname, join } from 'path';
import { pack } from 'tar-stream';
import { promisify } from 'util';
import { parsePackageName } from '../../utils/parsePackageName';
import { streamTobuffer } from '../../utils/streamToBuffer';
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

        const packageJson = await getModulePackageJsonContent(this.options.workingDir);
        const { version } = packageJson;
        const { name, scope } = parsePackageName({
            packageName: packageJson.name || '@unknown/untitled',
            requireScope: true,
        });
        const manifests = await createManifests({
            bundleContent: await promisify(readFile)(mainBundlePath, 'utf8'),
            packageJson,
        });

        const files = [mainBundlePath, mainBundlePath + '.map', mainBundlePath + '.LICENSE.txt'];

        const tar = pack();

        tar.entry({ name: 'manifests.json', type: 'file' }, JSON.stringify(manifests, null, 4));
        for (const file of files) {
            tar.entry({ name: basename(file), type: 'file' }, await promisify(readFile)(file));
        }
        tar.finalize();

        await promisify(writeFile)(
            join(dirname(mainBundlePath), `${scope}@${name}@${version}.tar.gz`),
            await gzip(await streamTobuffer(tar)),
        );
    }
}
