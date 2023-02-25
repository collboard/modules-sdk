import commander from 'commander';
import { Destroyable } from 'destroyable';
import { readFile } from 'fs';
import { Box, Text } from 'ink';
import fetch from 'node-fetch';
import { join } from 'path';
import * as React from 'react';
import { map } from 'rxjs/operators';
import spaceTrim from 'spacetrim';
import { promisify } from 'util';
import { PUBLISH_BUILD_RELATIVE_PATH } from '../../config';
import { CompilerStatusOutputComponent } from '../../services/Compiler/CompilerStatusOutputComponent';
import { PublishingError } from '../../services/Compiler/errors/PublishingError';
import { ProductionCompiler } from '../../services/Compiler/ProductionCompiler';
import { compilerStatusToJson } from '../../services/Compiler/utils/compilerStatusToJson';
import { forServicesReady } from '../../utils/forServicesReady';
import { getUniqueFoldername } from '../../utils/getUniqueFoldername';
import { ObservableContentComponent } from '../../utils/ObservableContentComponent';
import { ICommand } from '../ICommand';
import { IColldevPublishOptions } from './IColldevPublishOptions';
import { IColldevPublishStatus } from './IColldevPublishStatus';

export class ColldevPublish extends Destroyable implements ICommand<IColldevPublishOptions, IColldevPublishStatus> {
    public readonly name = 'publish';
    private compiler: ProductionCompiler;

    public init(program: commander.Command) {
        return (
            program
                .command('publish [path]')
                .alias('deploy')
                .description(`Deploy collboard module`)
                .option('-m, --module-store-url <url>', `Url of module store`, 'https://module-store.collboard.com')
                .option('-t, --token <token>', `Publishing token`)
                .option('-c, --cleanup', `Cleanup build directory before building`, false)
                // TODO: On dry run also connect to the server and test ability to publish but do not publish
                // TODO: .option('--dry-run', `Run ...`, false)
                .action(this.run.bind(this))
        );
    }

    public async run(options: IColldevPublishOptions) {
        const { workingDir, entryPath, moduleStoreUrl, token } = options;

        this.compiler = new ProductionCompiler({
            workingDir,
            entryPath,
            outDir: join(PUBLISH_BUILD_RELATIVE_PATH, getUniqueFoldername()),
            cleanup: false,
        });
        await forServicesReady(this.compiler);

        const url = new URL(moduleStoreUrl);
        url.pathname = '/publish';
        const response = await fetch(url.href, {
            method: 'POST',
            headers: { 'X-Token': token, 'Content-Type': 'application/tar+gzip' },
            body: await promisify(readFile)(this.compiler.tarFilePath),
        });
        const content = await response.json();
        this.moduleStoreResponse = content;

        if (!content.isPublished) {
            throw new PublishingError(`Publishing of modules failed.\n${content.error}`);
        }

        return spaceTrim(
            (block) => `
            🏬 ${moduleStoreUrl}
            ${block(this.moduleStoreResponse.publishingReport)}
        `,
        );
    }

    public render() {
        // TODO: DRY ColldevBuild and ColldevPublish
        return (
            <>
                <ObservableContentComponent
                    content={this.compiler.status.pipe(
                        map((compilerStatus) => (
                            <Box
                                borderStyle="round"
                                display="flex"
                                flexDirection="column"
                                borderColor={
                                    compilerStatus.errors.length ? 'red' : !compilerStatus.isReady ? 'yellow' : 'white'
                                }
                            >
                                <Box borderStyle="round" display="flex" flexDirection="column" borderColor="yellow">
                                    <Text color="yellow">Publishing is still in private beta.</Text>
                                    <Text>Please contact us on dev@collboard.com to get publishing token.</Text>
                                </Box>
                                <CompilerStatusOutputComponent {...{ compilerStatus }} />
                            </Box>
                        )),
                    )}
                />
            </>
        );
    }

    private moduleStoreResponse: null | any = null;

    public status() {
        return {
            warning: `Publishing is still in private beta.`,
            details: `Please contact us on dev@collboard.com to get publishing token.`,
            compiler: this.compiler && compilerStatusToJson(this.compiler.status.value),
            moduleStoreResponse: this.moduleStoreResponse,
        };
    }
}
