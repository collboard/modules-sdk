import { Box, Text } from 'ink';
import Table from 'ink-table';
import * as React from 'react';
import { filter, map } from 'rxjs/operators';
import { Compiler, ICompilerResults } from '../../compiler/Compiler';
import { Server } from '../../server/Server';
import { ObservableContentComponent } from './ObservableContentComponent';

interface IOutputProps {
    compiler: Compiler;
    server: Server;
}

// TODO: !!! Make simmilar UI for CollboardDevelopmentModule + Colldev Express

export function Output({ compiler, server }: IOutputProps) {
    return (
        <Box borderStyle="doubleSingle" margin={2}>
            <Box borderStyle="round">
                <ObservableContentComponent
                    loading={<Text color="grey">Compiling...</Text>}
                    content={compiler.stats.pipe(filter((stats) => stats !== null)).pipe(
                        map(({ stats, error }: ICompilerResults) => {
                            return <Text>{stats}</Text>;
                        }),
                    )}
                />
            </Box>

            <ObservableContentComponent
                loading={<Text color="grey">Starting server...</Text>}
                content={server.serverStatus.pipe(
                    map((serverStatus) => {
                        const data = Object.entries(serverStatus.clients)
                            .map(([clientUuid, data]) => ({ clientUuid, ...data }))
                            .map(({ connected, clientUuid, modules }) => ({ connected, clientUuid, ...modules }));

                        if (!data.length) {
                            return (
                                <Box borderStyle="round">
                                    <Text color="grey">
                                        Waiting for clients...
                                        <Text color="red" bold>
                                            {'\n'}
                                            Open https://dev.collboard.com
                                        </Text>
                                    </Text>
                                </Box>
                            );
                        }
                        return <Table data={data} />;
                    }),
                )}
            />
        </Box>
    );

    // TODO: Testing on mobile (with some localtunnel) and QR code
}
