import { mkdir, readFile, writeFile } from 'fs';
import { gzip } from 'node-gzip';
//import { unlink } from 'fs/promises';
import { basename, dirname, join } from 'path';
import { pack } from 'tar-stream';
import { promisify } from 'util';
import { parsePackageName } from '../../utils/parsePackageName';
import { streamTobuffer } from '../../utils/streamToBuffer';
import { Compiler, ICompilerOptions } from './Compiler';
import { checkManifests } from './utils/checkManifests';
import { createManifestsFromBundleContent } from './utils/createManifestsFromBundleContent';

interface IDevelopmentCompilerOptions extends ICompilerOptions {
    outDir: string;
}

export class ProductionCompiler extends Compiler<IDevelopmentCompilerOptions> {
    protected async createWebpackConfig() {
        await promisify(mkdir)(this.options.outDir, { recursive: true });
        return {
            mode: 'production' as 'production',
            output: {
                filename: `bundle.min.js`,
                path: this.options.outDir,
            },
        };
    }

    public get tarFilePath() {
        return this._tarFilePath;
    }
    private _tarFilePath: string;

    protected async runPostprocessing(mainBundlePath: string) {
        const manifests = await createManifestsFromBundleContent(await promisify(readFile)(mainBundlePath, 'utf8'));
        await checkManifests(...manifests);

        // TODO: Maybe some function for getting the name
        let bundleBasename: string;
        if (manifests.length === 1) {
            const { name, scope } = parsePackageName({ packageName: manifests[0].name, requireScope: true });
            bundleBasename = `${scope}@${name}@${manifests[0].version}`;
        } else {
            bundleBasename = `bundle`;
        }

        const files = [mainBundlePath, mainBundlePath + '.map', mainBundlePath + '.LICENSE.txt'];

        const tar = pack();

        tar.entry({ name: 'manifests.json', type: 'file' }, JSON.stringify(manifests, null, 4));
        for (const file of files) {
            tar.entry({ name: basename(file), type: 'file' }, await promisify(readFile)(file));
        }
        tar.finalize();

        this._tarFilePath = join(dirname(mainBundlePath), `${bundleBasename}.tar.gz`);
        await promisify(writeFile)(this._tarFilePath, await gzip(await streamTobuffer(tar)));
    }
}

/**
 * TODO: Flag keep-license-information OR completely remove license information
 *       > await unlink(mainBundlePath + '.LICENSE.txt').catch(() => false);
 */
