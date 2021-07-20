import { Box } from 'ink';
import * as React from 'react';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ColldevServer } from '../ColldevServer/ColldevServer';
import { ServerStatusOutputComponent } from '../ColldevServer/ServerStatusOutputComponent';
import { Compiler } from '../Compiler/Compiler';
import { CompilerStatusOutputComponent } from '../Compiler/CompilerStatusOutputComponent';
import { ObservableContentComponent } from '../utils/ObservableContentComponent';

interface IOutputProps {
    compiler: Compiler;
    server: ColldevServer;
}

// TODO:  Make simmilar UI for CollboardDevelopmentModule + Colldev Express

export function OutputComponent({ compiler, server }: IOutputProps) {
    return (
        <ObservableContentComponent
            content={combineLatest([compiler.compilerStatus, server.serverStatus]).pipe(
                map(([compilerStatus, serverStatus]) => (
                    <Box
                        borderStyle="round"
                        display="flex"
                        flexDirection="column"
                        borderColor={compilerStatus.errors.length || serverStatus.errors.length ? 'red' : 'white'}
                    >
                        <Box borderStyle="single" borderColor={compilerStatus.errors.length ? 'red' : 'white'}>
                            <CompilerStatusOutputComponent {...{ compilerStatus }} />
                        </Box>

                        <ServerStatusOutputComponent {...{ server, serverStatus }} />
                    </Box>
                )),
            )}
        />
    );
}
