import { join } from 'path';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import * as uuid from 'uuid';
import webpack from 'webpack';
import { ASSETS_PATH } from '../config';
import { cleanupAssets, makeColldevFolder } from './utils/cleanupAssets';
import { getPackageMainPath } from './utils/package';

export interface ICompilerResults {
    stats?: string;
    error?: Error;
}

export class Compiler {
    constructor() {
        this.init();
    }

    readonly stats: BehaviorSubject<null | ICompilerResults> = new BehaviorSubject(null);
    readonly bundles: ReplaySubject<{ path: string }> = new ReplaySubject(1);

    private async init() {
        await makeColldevFolder();
        await cleanupAssets();

        const bundleId = uuid.v4();
        const bundleFilename = `bundle-${bundleId}.min.js`;

        // TODO: !!! Errors here should be displayed in nice react console UI
        /*const compiler = */ webpack(
            // TODO: Maybe use webpack watch instead of onchange
            // TODO: Generate sourcemaps
            // TODO: Wrap webpack to some util that outputs RxJS stream of compiled sources
            {
                // TODO: !!! Watch here
                watch: true,

                mode: 'development', //'production',
                devtool: 'source-map',
                entry: await getPackageMainPath(/* TODO: !!! Errors here should be displayed in nice react console UI */),
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
                    // TODO: !!!! Jak dělat balíčky s mnoha vstupy, co hned poběží
                    // TODO: Bypass files and just keep output in memory probbably via "compiler.outputFileSystem = fs;"
                    filename: bundleFilename,
                    path: ASSETS_PATH,
                },
            },
            async (error, stats) => {
                this.stats.next({
                    error,
                    stats: stats?.toString({
                        chunks: false, // Makes the build much quieter
                        colors: true, // Shows colors in the console
                    }),
                });

                this.bundles.next({ path: join(ASSETS_PATH, bundleFilename) });

                //const bundleContent = await promisify(readFile)(join(assetsPath, bundleFilename), 'utf8');

                // TODO: !!! Appand package json to modules
                // TODO: !!! Run and analyze the content
                // const modules = analyzeBundleModules(bundleContent);

                /*console.log({ error, stats });

  // [Stats Object](#stats-object)
  if (error || stats.hasErrors()) {
      // [Handle errors here](#error-handling)
  }
  // Done processing
  */
            },
        );
    }
}
