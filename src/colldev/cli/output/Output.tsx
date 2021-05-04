import { Box, Text } from 'ink';
import Table from 'ink-table';
import * as React from 'react';
import { map } from 'rxjs/operators';
import { Compiler } from '../../compiler/Compiler';
import { Server } from '../../server/Server';
import { ObservableContentComponent } from './ObservableContentComponent';

interface IOutputProps {
    compiler: Compiler;
    server: Server;
}

// TODO: !!! Make simmilar UI for CollboardDevelopmentModule + Colldev Express

export function Output({ compiler, server }: IOutputProps) {
    return (
        <Box borderStyle="double" marginRight={2}>
            <Box borderStyle="round" marginRight={2}>
                <Text color="green">{/*JSON.stringify(server.serverStatus)*/}</Text>
            </Box>

            <ObservableContentComponent
                content={server.serverStatus.pipe(
                    map((serverStatus) => {
                        const data = Object.entries(serverStatus.clients)
                            .map(([clientUuid, data]) => ({ clientUuid, ...data }))
                            .map(({ connected, clientUuid, modules }) => ({ connected, clientUuid, ...modules }));
                        console.log('data', data);
                        return <Table data={data} />;
                    }),
                )}
            />
        </Box>
    );

    // TODO: Testing on mobile (with some localtunnel) and QR code
}
