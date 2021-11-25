import commander from 'commander';
import { Destroyable } from 'destroyable';
import { Box, Text } from 'ink';
import * as React from 'react';
import { ICommand } from '../ICommand';
import { IColldevBuildOptions } from './IColldevBuildOptions';
import { IColldevBuildStatus } from './IColldevBuildStatus';

export class ColldevBuild extends Destroyable implements ICommand<IColldevBuildOptions, IColldevBuildStatus> {
    public init(program: commander.Command) {
        return program
            .command('build [path]')
            .alias('deploy')
            .description(`Deploy collboard module.`)
            .action(this.run.bind(this));
    }

    public async run(path: string, options: IColldevBuildOptions) {
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
        return {
            error: `We are still working on automatical deployment`,
            details: `Please send us your work to dev@collboard.com`,
        };
    }
}
