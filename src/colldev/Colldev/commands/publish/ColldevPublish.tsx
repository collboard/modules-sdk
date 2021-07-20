import commander from 'commander';
import { Destroyable } from 'destroyable';
import { Box, Text } from 'ink';
import * as React from 'react';
import { ICommand } from '../ICommand';
import { IColldevPublishOptions } from './IColldevPublishOptions';

export class ColldevPublish extends Destroyable implements ICommand<IColldevPublishOptions, any> {
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
                <Text color="red">We are still working on automatical deployment </Text>
                <Text>Please send us your work to dev@collboard.com</Text>
            </Box>
        );
    }

    public status() {
        // TODO: !!! DRY wit /stats and /stats -> /status
        return {
            error: `We are still working on automatical deployment`,
            details: `Please send us your work to dev@collboard.com`,
        };
    }
}
