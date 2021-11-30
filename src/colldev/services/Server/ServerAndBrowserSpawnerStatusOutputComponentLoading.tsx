import { Box, Text } from 'ink';
import * as React from 'react';
import { forTime } from 'waitasecond';
import { AsyncContentComponent } from '../../utils/AsyncContentComponent';
import { Bullet } from '../../utils/Bullet';
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
                                    <Bullet>Waiting for connection from Collboard</Bullet>
                                </Text>
                            );
                        case 'single':
                            return (
                                <AsyncContentComponent
                                    loader={<Bullet>Waiting {wait} miliseconds for connection from Collboard</Bullet>}
                                    content={async () => {
                                        await forTime(parseInt(wait, 10));
                                        return (
                                            <>
                                                <Bullet skipped>
                                                    Waiting {wait} miliseconds for connection from Collboard
                                                </Bullet>
                                                {'\n'}
                                                <Bullet done={spawned} error={errors.length !== 0}>
                                                    Spawning {browserName}
                                                </Bullet>
                                                {'\n'}
                                                <Bullet>Connection from Collboard</Bullet>
                                            </>
                                        );
                                    }}
                                />
                            );

                        case 'multiple':
                            return (
                                <>
                                    <Bullet done={spawned}>Spawning {browserName}</Bullet>
                                    {'\n'}
                                    <Bullet done={false}>Connection from Collboard</Bullet>
                                </>
                            );
                    }
                })()}
            </Text>
        </Box>
    );
}
