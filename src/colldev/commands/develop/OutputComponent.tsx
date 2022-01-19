import * as React from 'react';
import { combineLatest, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { BrowserSpawner } from '../../services/BrowserSpawner/BrowserSpawner';
import { Compiler } from '../../services/Compiler/Compiler';
import { Server } from '../../services/Server/Server';
import { ObservableContentComponent } from '../../utils/ObservableContentComponent';
import { IColldevDevelopOptions } from './IColldevDevelopOptions';
import { OutputFrameComponent } from './OutputFrameComponent';

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
                compiler.status,
                server.status,
                browserSpawner.status,
            ]).pipe(
                map(([openCollboardUrl, compilerStatus, serverStatus, browserSpawnerStatus]) => (
                    <OutputFrameComponent
                        {...{ openCollboardUrl, compilerStatus, serverStatus, browserSpawnerStatus, options }}
                    />
                )),
            )}
        />
    );
}
