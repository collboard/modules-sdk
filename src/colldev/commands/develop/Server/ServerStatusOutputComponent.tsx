import { Box, Text } from 'ink';
import Table from 'ink-table';
import * as React from 'react';
import { AsyncContentComponent } from '../../../utils/AsyncContentComponent';
import { objectMap } from '../../../utils/objectMap';
import { IServerStatus } from './IServerStatus';
import { Server } from './Server';

interface IServerStatusOutputComponentProps {
    server: Server;
    serverStatus: IServerStatus;
}

export function ServerStatusOutputComponent({ server, serverStatus: { clients } }: IServerStatusOutputComponentProps) {
    const data = Object.entries(clients)
        .map(([clientUuid, clientData]) => ({ clientUuid, ...clientData }))
        .map(({ boardId, connected, ready, errors, version, clientUuid, modules }) => ({
            boardId,
            // connected: connected ? '✔' : '✗',
            // ready: ready ? '✔' : '✗',
            // version,
            clientUuid: clientUuid.split('-')[0] + '…',
            error: errors.map(({ message }) => message).join('\n'),

            ...objectMap(modules, (key, module) => [
                // Note: two spaces are after ⛃ intentionally
                `⛃  ${key}`,
                module.errors.length ? module.errors.map(({ message }) => message).join('\n') : 'Working',
            ]),
        }));

    if (!data.length) {
        // TODO: Do not show in non-interactive mode
        // TODO: Testing on mobile (with some localtunnel) and QR code
        return (
            <AsyncContentComponent
                content={async () => (
                    <Box borderStyle="single">
                        <Text color="grey">
                            Waiting for clients...
                            <Text color="magenta" bold>
                                {'\n'}
                                Please open {await server.openCollboardUrl()}
                            </Text>
                        </Text>
                    </Box>
                )}
            />
        );
    }

    // TODO: Also red border on error
    return <Table data={data} />;
}
