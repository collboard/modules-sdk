import commander from 'commander';
import { Destroyable } from 'destroyable';
import { Box, Text } from 'ink';
import * as React from 'react';
import { ICommand } from '../ICommand';
import { IColldevTestOptions } from './IColldevTestOptions';
import { IColldevTestStatus } from './IColldevTestStatus';

export class ColldevTest extends Destroyable implements ICommand<IColldevTestOptions, IColldevTestStatus> {
    public readonly name = 'test';

    public init(program: commander.Command) {
        return program.command('test [path]').description(`Test collboard module`).action(this.run.bind(this));
    }

    public async run(options: IColldevTestOptions) {
        // const {} = options;

        return `Testing with Colldev is not implemented yet.`;
    }

    public render() {
        return (
            <Box borderStyle="round" display="flex" flexDirection="column" borderColor="yellow">
                <Text color="yellow">Testing with Colldev is not implemented yet.</Text>
            </Box>
        );
    }

    public status() {
        return {
            warning: `Testing with Colldev is not implemented yet.`,
        };
    }
}
