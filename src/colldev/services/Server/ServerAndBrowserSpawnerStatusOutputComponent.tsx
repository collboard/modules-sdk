import Table from 'ink-table';
import * as React from 'react';
import { IColldevDevelopOptions } from '../../commands/develop/IColldevDevelopOptions';
import { objectMap } from '../../utils/objectMap';
import { IBrowserSpawnerStatus } from '../BrowserSpawner/IBrowserSpawnerStatus';
import { IServerStatus } from './IServerStatus';
import { ServerAndBrowserSpawnerStatusOutputComponentLoading } from './ServerAndBrowserSpawnerStatusOutputComponentLoading';

export interface IServerAndBrowserSpawnerStatusOutputComponentProps {
    openCollboardUrl: string;
    browserSpawnerStatus: IBrowserSpawnerStatus;
    serverStatus: IServerStatus;
    options: Pick<IColldevDevelopOptions, 'open' | 'wait'>;
}

export function ServerAndBrowserSpawnerStatusOutputComponent({
    openCollboardUrl,
    serverStatus: { clients },
    browserSpawnerStatus,
    options,
}: IServerAndBrowserSpawnerStatusOutputComponentProps) {
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
        return (
            <ServerAndBrowserSpawnerStatusOutputComponentLoading
                {...{ openCollboardUrl, browserSpawnerStatus, options }}
            />
        );
    }

    // TODO: Also red border on error
    return <Table data={data} />;
}
