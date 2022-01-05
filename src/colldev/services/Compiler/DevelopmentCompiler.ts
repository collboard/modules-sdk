import { string_file_path, string_folder_path } from '../../../../types';
import { DEVELOP_TEMPORARY_PATH } from '../../config';
import { getUniqueFoldername } from '../../utils/getUniqueFoldername';
import { removeFileOrFolderRecursively } from '../../utils/removeFileOrFolderRecursively';
import { Compiler, ICompilerOptions } from './Compiler';
import { makeColldevFolder } from './utils/makeColldevFolder';

// interface IDevelopmentCompilerOptions extends ICompilerOptions {}

export class DevelopmentCompiler extends Compiler<ICompilerOptions> {
    public readonly uniqueFoldername: string_folder_path = getUniqueFoldername();

    protected async runPreparation() {}

    protected async createWebpackConfig() {
        // TODO: Consistent strategy how to garbage collect files that wasnt deleted propperly
        await makeColldevFolder();
        await removeFileOrFolderRecursively(DEVELOP_TEMPORARY_PATH);

        return {
            mode: 'development' as 'development',
            watch: true,
            output: {
                filename: `${this.uniqueFoldername}/main.min.js`,
                path: DEVELOP_TEMPORARY_PATH,
                publicPath: `http://localhost:4000/develop/`,
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

    protected async runPostprocessing(mainBundlePath: string_file_path) {
        /*
        let mainBundleContent = await promisify(readFile)(mainBundlePath, 'utf8');

        // TODO: Util replace assets
        // TODO: !!! Unhardocode http://localhost:3000/
        mainBundleContent = mainBundleContent.split('/assets/').join('http://localhost:3000/assets/$1');

        await promisify(writeFile)(mainBundleContent, 'utf8');

        */
    }
}

/**
 * TODO: Maybe util for editing files in compact block
 * TODO: Maybe more code-understanding way how to postprocess assers path
 * TODO: Bypass files and just keep output in memory probbably via "compiler.outputFileSystem = fs;"
 */
