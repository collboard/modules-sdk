import { mkdir, readFile, writeFile } from 'fs';
import { gzip } from 'node-gzip';
import { basename, dirname, join } from 'path';
import { pack } from 'tar-stream';
import { promisify } from 'util';
import { string_file_path } from '../../../../types';
import { parsePackageName } from '../../utils/parsePackageName';
import { streamTobuffer } from '../../utils/streamToBuffer';
import { Compiler, ICompilerOptions } from './Compiler';
import { checkManifests } from './utils/checkManifests';
import { createManifestsFromBundleContent } from './utils/createManifestsFromBundleContent';

interface IDevelopmentCompilerOptions extends ICompilerOptions {
    outDir: string;
    // TODO: !!! Cleanup flag
}

export class ProductionCompiler extends Compiler<IDevelopmentCompilerOptions> {
    protected async createWebpackConfig() {
        await promisify(mkdir)(this.options.outDir, { recursive: true });
        return {
            mode: 'production' as 'production',
            output: {
                filename: `bundle.min.js`,
                path: join(process.cwd(), this.options.outDir),
            },
            // !!! To compiler
            module: {
                rules: [
                    {
                        test: /\.tsx?$/,
                        use: 'ts-loader',
                        exclude: /node_modules/,
                    },
                    // !!!
                    {
                        // TODO: !!! More types sync with rules
                        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
                        type: 'asset/resource',
                        generator: {
                            // Note !!! Abot [path] -> [folder]  .colldev\develop\tmp\2022-0-4--11-31-44--f0f20d53-d30f-4db7-af20-2cea847d6b20test-samples\hello-world\assets\logo.svg @see https://github.com/webpack-contrib/css-loader/issues/226#issuecomment-334467260
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

    protected async runPostprocessing(mainBundlePath: string_file_path) {
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
 * TODO: Maybe do not rename but set generator filename propperly into webpack config
 */
