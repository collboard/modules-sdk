//import { readFile, writeFile } from 'fs';
//import { promisify } from 'util';
import * as uuid from 'uuid';
import { string_file_path, string_folder_path } from '../../../../types';
import { DEVELOP_TEMPORARY_PATH } from '../../config';
import { Compiler, ICompilerOptions } from './Compiler';
import { cleanupTemporaryAssets } from './utils/cleanupTemporaryAssets';
import { makeColldevFolder } from './utils/makeColldevFolder';

// interface IDevelopmentCompilerOptions extends ICompilerOptions {}

export class DevelopmentCompiler extends Compiler<ICompilerOptions> {
    public readonly uniqueFoldername: string_folder_path = DevelopmentCompiler.getUniqueFoldername();

    private static getUniqueFoldername() {
        const d = new Date();
        return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}--${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}--${uuid.v4()}`;
    }

    protected async createWebpackConfig() {
        // TODO: Consistent strategy how to garbage collect files that wasnt deleted propperly
        await makeColldevFolder();
        await cleanupTemporaryAssets();

        return {
            mode: 'development' as 'development',
            watch: true,
            output: {
                filename: `${this.uniqueFoldername}/main.min.js`,
                path: DEVELOP_TEMPORARY_PATH,
                publicPath: `http://localhost:4000/develop/${this.uniqueFoldername}/`,
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
