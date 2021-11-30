import * as uuid from 'uuid';
import { ASSETS_PATH } from '../../config';
import { Compiler, ICompilerOptions } from './Compiler';
import { cleanupAssets } from './utils/cleanupAssets';
import { makeColldevFolder } from './utils/makeColldevFolder';

interface IDevelopmentCompilerOptions extends ICompilerOptions {}

export class DevelopmentCompiler extends Compiler<IDevelopmentCompilerOptions> {
    protected bundleId: string;
    protected bundleFilename: string;

    protected async getWebpackConfig() {
        await makeColldevFolder();
        await cleanupAssets();

        this.bundleId = uuid.v4();
        this.bundleFilename = `bundle-${this.bundleId}.min.js`;

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