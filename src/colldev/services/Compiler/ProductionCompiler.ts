import { join } from 'path';
import { Compiler, ICompilerOptions } from './Compiler';

interface IDevelopmentCompilerOptions extends ICompilerOptions {
    outDir: string;
}

export class ProductionCompiler extends Compiler<IDevelopmentCompilerOptions> {
    protected async getWebpackConfig() {
        return {
            mode: 'production' as 'production',
            output: {
                // TODO: !!! module-name@version
                filename: 'main.min.js',
                path: join(process.cwd(), this.options.outDir),
            },
        };
    }
}
