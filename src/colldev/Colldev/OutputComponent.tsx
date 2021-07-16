import { Box } from 'ink';
import * as React from 'react';
import { map } from 'rxjs/operators';
import { ColldevServer } from '../ColldevServer/ColldevServer';
import { ServerStatusOutputComponent } from '../ColldevServer/ServerStatusOutputComponent';
import { Compiler } from '../Compiler/Compiler';
import { CompilerStatusOutputComponent } from '../Compiler/CompilerStatusOutputComponent';
import { ICompilerStatus } from '../Compiler/ICompilerStatus';
import { ObservableContentComponent } from '../utils/ObservableContentComponent';

interface IOutputProps {
    compiler: Compiler;
    server: ColldevServer;
}

// TODO:  Make simmilar UI for CollboardDevelopmentModule + Colldev Express

export function OutputComponent({ compiler, server }: IOutputProps) {
    // @see https://www.w3schools.com/charsets/ref_utf_symbols.asp
    // Note: We are not using here mobx-react because it does not work with ink

    return (
        <Box borderStyle="round" display="flex" flexDirection="column">
            <Box borderStyle="single">
                {/* Unify boxes around */}
                <ObservableContentComponent
                    loading={<></>}
                    content={compiler.compilerStatus.pipe(
                        map((compilerStatus: ICompilerStatus) => (
                            <CompilerStatusOutputComponent {...{ compilerStatus }} />
                        )),
                    )}
                />
            </Box>

            <ObservableContentComponent
                loading={<></>}
                content={server.serverStatus.pipe(
                    map((serverStatus) => <ServerStatusOutputComponent {...{ server, serverStatus }} />),
                )}
            />
        </Box>
    );
}
