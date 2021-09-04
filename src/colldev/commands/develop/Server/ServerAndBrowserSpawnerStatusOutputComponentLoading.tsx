import { Box, Text } from 'ink';
import * as React from 'react';
import { forTime } from 'waitasecond';
import { AsyncContentComponent } from '../../../utils/AsyncContentComponent';
import { Point } from '../../../utils/Point';
import { IServerAndBrowserSpawnerStatusOutputComponentProps } from './ServerAndBrowserSpawnerStatusOutputComponent';

export function ServerAndBrowserSpawnerStatusOutputComponentLoading({
    openCollboardUrl,
    browserSpawnerStatus: { errors, browserName, spawned },
    options: { open, wait },
}: Omit<IServerAndBrowserSpawnerStatusOutputComponentProps, 'serverStatus'>) {
    // TODO: Do not show in non-interactive mode
    // TODO: Testing on mobile (with some localtunnel) and QR code
    return (
        <Box borderStyle="single" borderColor="yellow">
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
                                                <Point skipped>
                                                    Waiting {wait} miliseconds for connection from Collboard
                                                </Point>
                                                {'\n'}
                                                <Point done={spawned} error={errors.length !== 0}>
                                                    Spawning {browserName}
                                                </Point>
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
