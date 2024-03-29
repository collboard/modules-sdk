import { string_file_absolute_path, string_folder_relative_path, string_url } from '../../../../types';
import { DEVELOP_TEMPORARY_PATH } from '../../config';
import { getUniqueFoldername } from '../../utils/getUniqueFoldername';
import { removeFileOrFolderRecursively } from '../../utils/removeFileOrFolderRecursively';
import { Compiler, ICompilerOptions } from './Compiler';
import { makeColldevFolder } from './utils/makeColldevFolder';

// interface IDevelopmentCompilerOptions extends ICompilerOptions {}

export class DevelopmentCompiler extends Compiler<ICompilerOptions> {
    public colldevUrl: Promise<string_url>;
    public readonly uniqueFoldername: string_folder_relative_path = getUniqueFoldername();

    protected async runPreparation() {}

    protected async createWebpackConfig() {
        await makeColldevFolder();
        await removeFileOrFolderRecursively(
            DEVELOP_TEMPORARY_PATH /* <- Note: This is not full cleanup but just develop script cleanup (full cleanup is done at the end by cleanupOldTemporaryAssets) */,
        );

        return {
            mode: 'development' as 'development',
            watch: true,
            output: {
                filename: `${this.uniqueFoldername}/main.min.js`,
                path: DEVELOP_TEMPORARY_PATH,
                publicPath: `${await this.colldevUrl}/develop/`,
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
                            filename: `${this.uniqueFoldername}/[path][name][ext]`,
                            // Note: [🥝] When running in dev mode, we are not emiting assets by webpack but just serving original files from source
                            emit: false,
                        },
                    },
                ],
            },
        };
    }

    protected async runPostprocessing(mainBundlePath: string_file_absolute_path) {}
}

/**
 * TODO: Maybe util for editing files in compact block
 * TODO: Maybe more code-understanding way how to postprocess assers path
 * TODO: Bypass files and just keep output in memory probbably via "compiler.outputFileSystem = fs;"
 */
