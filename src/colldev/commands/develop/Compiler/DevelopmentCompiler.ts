import { ASSETS_PATH } from '../../../config';
import { Compiler, ICompilerOptions } from './Compiler';

interface IDevelopmentCompilerOptions extends ICompilerOptions {

}

export class DevelopmentCompiler extends Compiler<IDevelopmentCompilerOptions> {

    protected getWebpackConfig() {
        return {
            mode: 'development' as 'development',
            watch: true,
            output: {
                // TODO: Bypass files and just keep output in memory probbably via "compiler.outputFileSystem = fs;"
                filename: this.bundleFilename,
                path: ASSETS_PATH,
            },
        };
    }
}
