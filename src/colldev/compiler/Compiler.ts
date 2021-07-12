import { join } from 'path';
import { BehaviorSubject } from 'rxjs';
import * as uuid from 'uuid';
import webpack, { Compiler as WebpackCompiler } from 'webpack';
import { ASSETS_PATH } from '../config';
import { Destroyable } from '../utils/destroyables/Destroyable';
import { IDestroyable } from '../utils/destroyables/IDestroyable';
import { cleanupAssets } from './utils/cleanupAssets';
import { getModulePackageMainPath } from './utils/getModulePackageMainPath';
import { makeColldevFolder } from './utils/makeColldevFolder';

export interface ICompilerStatus {
    ready: boolean;
    stats?: webpack.Stats;
    bundle?: { path: string };
}

export class Compiler extends Destroyable implements IDestroyable {
    constructor(private workingDir: string) {
        super();
        this.init();
    }

    /**
     * Note: We are not using here mobx-react because it does not work with ink
     */
    readonly statuses: BehaviorSubject<ICompilerStatus> = new BehaviorSubject({ ready: false });

    private compiler: WebpackCompiler;

    private async init() {
        await makeColldevFolder();
        await cleanupAssets();

        const bundleId = uuid.v4();
        const bundleFilename = `bundle-${bundleId}.min.js`;

        this.compiler = webpack(
            // TODO: Maybe use webpack watch instead of onchange
            // TODO: Generate sourcemaps
            // TODO: Wrap webpack to some util that outputs RxJS stream of compiled sources
            {
                watch: true,
                mode: 'development', //'production',
                devtool: 'source-map',
                entry: await getModulePackageMainPath(this.workingDir),
                module: {
                    rules: [
                        {
                            test: /\.tsx?$/,
                            use: 'ts-loader',
                            exclude: /node_modules/,
                        },
                    ],
                },
                resolve: {
                    extensions: ['.tsx', '.ts', '.js'],
                },
                output: {
                    // TODO: Bypass files and just keep output in memory probbably via "compiler.outputFileSystem = fs;"
                    filename: bundleFilename,
                    path: ASSETS_PATH,
                },
            },
            async (error /* TODO: Error is probbably useless */, stats) => {
                // TODO: One next for stats and bundles
                this.statuses.next({
                    ready: true,
                    stats,
                    bundle: { path: join(ASSETS_PATH, bundleFilename) },
                });
            },
        );
    }

    public async destroy() {
        await super.destroy();
        this.compiler.close(() => {
            /* TODO: What is this callback about */
        });
    }
}
