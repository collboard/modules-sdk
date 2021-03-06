import { mkdir, readFile, writeFile } from 'fs';
import glob from 'glob-promise';
import { gzip } from 'node-gzip';
import { dirname, join, relative } from 'path';
import { pack } from 'tar-stream';
import { promisify } from 'util';
import { string_file_absolute_path } from '../../../../types';
import { parseModuleName } from '../../utils/parseModuleName';
import { removeFileOrFolderRecursively } from '../../utils/removeFileOrFolderRecursively';
import { streamTobuffer } from '../../utils/streamToBuffer';
import { Compiler, ICompilerOptions } from './Compiler';
import { checkManifests } from './utils/checkManifests';
import { extractManifestsFromBundleContent } from './utils/extractManifestsFromBundleContent';

interface IDevelopmentCompilerOptions extends ICompilerOptions {
    outDir: string;
    cleanup: boolean;
}

export class ProductionCompiler extends Compiler<IDevelopmentCompilerOptions> {
    protected async runPreparation() {
        if (this.options.cleanup) {
            await removeFileOrFolderRecursively(join(process.cwd(), this.options.outDir));
        }
    }

    protected async createWebpackConfig() {
        await promisify(mkdir)(this.options.outDir, { recursive: true });
        return {
            mode: 'production' as 'production',
            output: {
                filename: `bundle.min.js`,
                path: join(process.cwd(), this.options.outDir),
                publicPath: `{ROOT_URL}/`,
            },

            module: {
                rules: [
                    {
                        // Note: If you want to change allowed format types, change it at all places marked with [🍁]
                        test: /\.(png|svg|jpg|jpeg|gif|bmp|tga|webp|heif|heic|ico|mp4|mov|wmv|avi|avchd|flv|f4v|swf|mkv|webm|mp3|m4a|flac|wav|wma|aac|woff|woff2|eot|ttf|otf|glb|gltf|babylon|stl|obj|3mf)$/i,
                        type: 'asset/resource',
                        generator: {
                            // TODO: [🧩] filename ideally not contain workingDir
                            //       Instead of: .colldev/develop/tmp/2022-0-4--11-31-44--f0f20d53-d30f-4db7-af20-2cea847d6b20/test-samples/hello-world/assets/logo.svg
                            //       Should be:  .colldev/develop/tmp/2022-0-4--11-31-44--f0f20d53-d30f-4db7-af20-2cea847d6b20/assets/logo.svg
                            //       Probbably use some other variabile [path] -> [folder] @see https://github.com/webpack-contrib/css-loader/issues/226#issuecomment-334467260
                            filename: `[path][name][ext]`,
                            emit: true,
                        },
                    },
                ],
            },
        };
    }

    public get tarFilePath() {
        return this._tarFilePath;
    }
    private _tarFilePath: string;

    protected async runPostprocessing(mainBundlePath: string_file_absolute_path) {
        const manifests = await extractManifestsFromBundleContent(await promisify(readFile)(mainBundlePath, 'utf8'));
        await checkManifests(...manifests);

        // TODO: Maybe some function for getting the name
        let bundleBasename: string;
        if (manifests.length === 1) {
            const { name, scope } = parseModuleName( manifests[0].name);
            bundleBasename = `${scope}@${name.join('-')}@${manifests[0].version}`;
        } else {
            bundleBasename = `bundle`;
        }

        const tar = pack();
        tar.entry({ name: 'manifests.json', type: 'file' }, JSON.stringify(manifests, null, 4));

        for (const file of await glob(join(dirname(mainBundlePath), '/**/*'), { nodir: true })) {
            tar.entry({ name: relative(dirname(mainBundlePath), file), type: 'file' }, await promisify(readFile)(file));
        }
        tar.finalize();

        this._tarFilePath = join(dirname(mainBundlePath), `${bundleBasename}.tar.gz`);
        await promisify(writeFile)(this._tarFilePath, await gzip(await streamTobuffer(tar)));
    }
}

/**
 * TODO: Flag keep-license-information OR completely remove license information
 *       > await unlink(mainBundlePath + '.LICENSE.txt').catch(() => false);
 * TODO: Maybe do not rename but set generator filename propperly into webpack config
 */
