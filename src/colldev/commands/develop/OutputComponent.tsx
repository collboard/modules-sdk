import { Box, Text } from 'ink';
import useStdoutDimensions from 'ink-use-stdout-dimensions';
import * as React from 'react';
import { combineLatest, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { BrowserSpawner } from '../../services/BrowserSpawner/BrowserSpawner';
import { Compiler } from '../../services/Compiler/Compiler';
import { CompilerStatusOutputComponent } from '../../services/Compiler/CompilerStatusOutputComponent';
import { Server } from '../../services/Server/Server';
import { ServerAndBrowserSpawnerStatusOutputComponent } from '../../services/Server/ServerAndBrowserSpawnerStatusOutputComponent';
import { ErrorComponent } from '../../utils/ErrorComponent';
import { ObservableContentComponent } from '../../utils/ObservableContentComponent';
import { IColldevDevelopOptions } from './IColldevDevelopOptions';

interface IOutputProps {
    compiler: Compiler<any>;
    server: Server;
    browserSpawner: BrowserSpawner;
    options: Pick<IColldevDevelopOptions, 'open' | 'wait'>;
}

// TODO:  Make simmilar UI for CollboardDevelopmentModule + Colldev Express

export function OutputComponent({ compiler, server, browserSpawner, options }: IOutputProps) {
    const [columns, rows] = useStdoutDimensions();

    return (
        <Text>
            {columns}×{rows}
        </Text>
    );

    return (
        <ObservableContentComponent
            content={combineLatest([
                from(server.openCollboardUrl()),
                compiler.status,
                server.status,
                browserSpawner.status,
            ]).pipe(
                map(([openCollboardUrl, compilerStatus, serverStatus, browserSpawnerStatus]) => {
                    if (compilerStatus.errors.length) {
                        return <ErrorComponent errors={compilerStatus.errors} />;
                    } else {
                        return (
                            <Box
                                borderStyle="round"
                                display="flex"
                                flexDirection="column"
                                borderColor={
                                    compilerStatus.errors.length ||
                                    serverStatus.errors.length ||
                                    browserSpawnerStatus.errors.length
                                        ? 'red'
                                        : !(
                                              compilerStatus.isReady &&
                                              serverStatus.isReady &&
                                              browserSpawnerStatus.isReady
                                          )
                                        ? 'yellow'
                                        : 'white'
                                }
                            >
                                <CompilerStatusOutputComponent {...{ compilerStatus }} />
                                <ServerAndBrowserSpawnerStatusOutputComponent
                                    {...{ openCollboardUrl, browserSpawnerStatus, serverStatus, options }}
                                />

                                <Text color="gray">To open additional window {openCollboardUrl}</Text>
                            </Box>
                        );
                    }
                }),
            )}
        />
    );
}
