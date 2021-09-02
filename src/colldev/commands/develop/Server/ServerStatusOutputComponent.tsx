import { Box, Text } from 'ink';
import Spinner from 'ink-spinner';
import Table from 'ink-table';
import * as React from 'react';
import { objectMap } from '../../../utils/objectMap';
import { IBrowserSpawnerStatus } from '../BrowserSpawner/IBrowserSpawnerStatus';
import { IColldevDevelopOptions } from '../IColldevDevelopOptions';
import { IServerStatus } from './IServerStatus';

interface IServerStatusOutputComponentProps {
    openCollboardUrl: string;
    browserSpawnerStatus: IBrowserSpawnerStatus;
    serverStatus: IServerStatus;
    options: Pick<IColldevDevelopOptions, 'open' | 'wait'>;
}

/*
TODO: !!! name to ServerAndBrowserSpawnerStatusOutputComponent
TODO: !!! Split loading and table phase

*/
export function ServerStatusOutputComponent({
    openCollboardUrl,
    serverStatus: { clients },
    browserSpawnerStatus: { browserName, spawned },
    options: { open, wait },
}: IServerStatusOutputComponentProps) {
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
            <Box borderStyle="single">
                <Text color="grey">
                    {(() => {
                        switch (open) {
                            case 'none':
                                return (
                                    <Text color="grey">
                                        Waiting for connection from Collboard...
                                        <Text color="magenta" bold>
                                            {`\nPlease open ${openCollboardUrl}`}
                                        </Text>
                                    </Text>
                                );
                            case 'single':
                                return (
                                    <Text color="grey">
                                        Waiting for {wait} miliseconds connection from Collboard...
                                        <Text color="magenta" bold>
                                            {`\n`}
                                            If there will no connection until then, {browserName} TODO: !!! Real browser
                                            not deault or invalid on url {openCollboardUrl} will be spawned TODO: Spawn
                                            status waiting/spawning/sonnected
                                        </Text>
                                    </Text>
                                );

                            case 'multiple':
                                //✔✗
                                return (
                                    <>
                                        {!spawned ? (
                                            <Text color="yellow" bold>
                                                [<Spinner type="arrow" />] Spawning {browserName} on url{' '}
                                                {openCollboardUrl}
                                            </Text>
                                        ) : (
                                            <Text color="green" bold>
                                                [✔] Browser spawned
                                            </Text>
                                        )}
                                        {'\n'}
                                        <Text color="yellow">
                                            [<Spinner type="arrow" />] Waiting for connection from Collboard...
                                        </Text>
                                    </>
                                );
                        }
                    })()}
                </Text>
            </Box>
        );
    }

    // TODO: Also red border on error
    return <Table data={data} />;
}
