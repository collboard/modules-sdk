import { Box, Text } from 'ink';
import Table from 'ink-table';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Compiler } from '../../compiler/Compiler';
import { Server } from '../../server/Server';

interface IOutputProps {
    compiler: Compiler;
    server: Server;
}

// TODO: !!! Make simmilar UI for CollboardDevelopmentModule + Colldev Express

export const Output = observer(({ compiler, server }: IOutputProps) => {
    const [render, setRender] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setRender((renderLast) => renderLast + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const data = Object.entries(server.serverStatus.clients)
        .map(([clientUuid, data]) => ({ clientUuid, ...data }))
        .map(({ connected, clientUuid, modules }) => ({ connected, clientUuid, ...modules }));

    console.log('data', data);

    return (
        <Box borderStyle="double" marginRight={2}>
            <Box borderStyle="round" marginRight={2}>
                <Text color="green">
                    {/*JSON.stringify(server.serverStatus)*/}
                    {server.test}
                    {render}
                </Text>
            </Box>
            <Table data={data} />
        </Box>
    );

    // TODO: Testing on mobile (with some localtunnel) and QR code
});
