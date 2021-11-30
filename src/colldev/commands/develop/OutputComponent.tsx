import { Box } from 'ink';
import * as React from 'react';
import { combineLatest, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { ObservableContentComponent } from '../../utils/ObservableContentComponent';
import { BrowserSpawner } from './BrowserSpawner/BrowserSpawner';
import { Compiler } from './Compiler/Compiler';
import { CompilerStatusOutputComponent } from './Compiler/CompilerStatusOutputComponent';
import { IColldevDevelopOptions } from './IColldevDevelopOptions';
import { Server } from './Server/Server';
import { ServerAndBrowserSpawnerStatusOutputComponent } from './Server/ServerAndBrowserSpawnerStatusOutputComponent';

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
                                : !(compilerStatus.ready && serverStatus.ready && browserSpawnerStatus.ready)
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
