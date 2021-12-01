import commander from 'commander';
import { Destroyable } from 'destroyable';
import { Box, Text } from 'ink';
import * as React from 'react';
import { ProductionCompiler } from '../../services/Compiler/ProductionCompiler';
import { ICommand } from '../ICommand';
import { IColldevPublishOptions } from './IColldevPublishOptions';
import { IColldevPublishStatus } from './IColldevPublishStatus';

export class ColldevPublish extends Destroyable implements ICommand<IColldevPublishOptions, IColldevPublishStatus> {
    // TODO: !!! OR use ColldevBuild inside ColldevPublish
    private compiler: ProductionCompiler;

    public init(program: commander.Command) {
        return program
            .command('publish [path]')
            .alias('deploy')
            .description(`Deploy collboard module.`)
            .action(this.run.bind(this));
    }

    public async run(path: string, options: IColldevPublishOptions) {
        //const {} = options;
    }

    public render() {
        return (
            <Box borderStyle="round" display="flex" flexDirection="column" borderColor="red">
                <Text color="red">Publishing is still in private beta.</Text>
                <Text>Please contact us on dev@collboard.com to get publishing token.</Text>
            </Box>
        );
    }

    public status() {
        return {
            error: `Publishing is still in private beta.`,
            details: `Please contact us on dev@collboard.com to get publishing token.`,
        };
    }
}
