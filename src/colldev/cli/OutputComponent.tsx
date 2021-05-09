import { Box, Text } from 'ink';
import Table from 'ink-table';
import * as React from 'react';
import { filter, map } from 'rxjs/operators';
import { Compiler, ICompilerResults } from '../compiler/Compiler';
import { Server } from '../server/Server';
import { objectMap } from '../utils/objectMap';
import { ObservableContentComponent } from '../utils/ObservableContentComponent';

interface IOutputProps {
    compiler: Compiler;
    server: Server;
}

// TODO:  Make simmilar UI for CollboardDevelopmentModule + Colldev Express

export function OutputComponent({ compiler, server }: IOutputProps) {
    // @see https://www.w3schools.com/charsets/ref_utf_symbols.asp
    // Note: We are not using here mobx-react because it does not work with ink

    return (
        <Box borderStyle="round" display="flex" flexDirection="column">
            <Box borderStyle="single">
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
                            .map(({ boardId, connected, clientUuid, modules }) => ({
                                boardId,
                                // connected: connected ? '✔' : '✗',
                                clientUuid: clientUuid.split('-')[0] + '-...',
                                ...objectMap(modules, (key, module) => [
                                    `⛃  ${key}`,
                                    module.declared ? 'Working' : 'Error',
                                ]),
                            }));

                        if (!data.length) {
                            return (
                                <Box borderStyle="single">
                                    <Text color="grey">
                                        Waiting for clients...
                                        <Text color="magenta" bold>
                                            {'\n'}
                                            Please open https://dev.collboard.com
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
