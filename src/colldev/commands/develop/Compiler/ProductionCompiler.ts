import { join } from 'path';
import { Compiler, ICompilerOptions } from './Compiler';

interface IDevelopmentCompilerOptions extends ICompilerOptions {
    outDir: string;
}

export class ProductionCompiler extends Compiler<IDevelopmentCompilerOptions> {
    protected getWebpackConfig() {
        return {
            mode: 'production' as 'production',
            output: {
                filename: this.bundleFilename,
                path: join(process.cwd(), this.options.outDir),
            },
        };
    }
}
