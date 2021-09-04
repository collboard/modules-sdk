import { Box, Text } from 'ink';
import Table from 'ink-table';
import * as React from 'react';
import { forTime } from 'waitasecond';
import { AsyncContentComponent } from '../../../utils/AsyncContentComponent';
import { objectMap } from '../../../utils/objectMap';
import { Point } from '../../../utils/Point';
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
                                        <Text color="magenta" bold>
                                            {`Please open ${openCollboardUrl}`}
                                        </Text>
                                        {'\n'}
                                        <Point>Waiting for connection from Collboard</Point>
                                    </Text>
                                );
                            case 'single':
                                return (
                                    <AsyncContentComponent
                                        loader={<Point>Waiting {wait} miliseconds for connection from Collboard</Point>}
                                        content={async () => {
                                            await forTime(parseInt(wait));
                                            return (
                                                <>
                                                    <Point failed>
                                                        Waiting {wait} miliseconds for connection from Collboard
                                                    </Point>
                                                    {'\n'}
                                                    <Point done={spawned}>Spawning {browserName}</Point>
                                                    {'\n'}
                                                    <Point>Connection from Collboard</Point>
                                                </>
                                            );
                                        }}
                                    />
                                );

                            case 'multiple':
                                return (
                                    <>
                                        <Point done={spawned}>Spawning {browserName}</Point>
                                        {'\n'}
                                        <Point done={false}>Connection from Collboard</Point>
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
