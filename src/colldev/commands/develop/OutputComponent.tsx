import { Box } from 'ink';
import * as React from 'react';
import { combineLatest, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { BrowserSpawner } from '../../services/BrowserSpawner/BrowserSpawner';
import { Compiler } from '../../services/Compiler/Compiler';
import { CompilerStatusOutputComponent } from '../../services/Compiler/CompilerStatusOutputComponent';
import { Server } from '../../services/Server/Server';
import { ServerAndBrowserSpawnerStatusOutputComponent } from '../../services/Server/ServerAndBrowserSpawnerStatusOutputComponent';
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
    return (
        <ObservableContentComponent
            content={combineLatest([
                from(server.openCollboardUrl()),
                compiler.compilerStatus,
                server.serverStatus,
                browserSpawner.browserSpawnerStatus,
            ]).pipe(
                map(([openCollboardUrl, compilerStatus, serverStatus, browserSpawnerStatus]) => (
                    <Box
                        borderStyle="round"
                        display="flex"
                        flexDirection="column"
                        borderColor={
                            compilerStatus.errors.length ||
                            serverStatus.errors.length ||
                            browserSpawnerStatus.errors.length
                                ? 'red'
                                : !(compilerStatus.isReady && serverStatus.isReady && browserSpawnerStatus.isReady)
                                ? 'yellow'
                                : 'white'
                        }
                    >
                        <CompilerStatusOutputComponent {...{ compilerStatus }} />
                        <ServerAndBrowserSpawnerStatusOutputComponent
                            {...{ openCollboardUrl, browserSpawnerStatus, serverStatus, options }}
                        />
                    </Box>
                )),
            )}
        />
    );
}
