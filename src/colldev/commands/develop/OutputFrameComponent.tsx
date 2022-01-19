import { Box, Text } from 'ink';
import useStdoutDimensions from 'ink-use-stdout-dimensions';
import * as React from 'react';
import { string_url } from '../../../../types';
import { IBrowserSpawnerStatus } from '../../services/BrowserSpawner/IBrowserSpawnerStatus';
import { CompilerStatusOutputComponent } from '../../services/Compiler/CompilerStatusOutputComponent';
import { ICompilerStatus } from '../../services/Compiler/ICompilerStatus';
import { IServerStatus } from '../../services/Server/IServerStatus';
import { ServerAndBrowserSpawnerStatusOutputComponent } from '../../services/Server/ServerAndBrowserSpawnerStatusOutputComponent';
import { ErrorComponent } from '../../utils/ErrorComponent';
import { IColldevDevelopOptions } from './IColldevDevelopOptions';

interface IOutputFrameProps {
    openCollboardUrl: string_url;
    compilerStatus: ICompilerStatus;
    serverStatus: IServerStatus;
    browserSpawnerStatus: IBrowserSpawnerStatus;
    options: Pick<IColldevDevelopOptions, 'open' | 'wait'>;
}

export function OutputFrameComponent({
    openCollboardUrl,
    compilerStatus,
    serverStatus,
    browserSpawnerStatus,
    options,
}: IOutputFrameProps) {
    const [columns, rows] = useStdoutDimensions();

    if (compilerStatus.errors.length) {
        return <ErrorComponent errors={compilerStatus.errors} />;
    } else if (rows < 15) {
        return compilerStatus.errors.length || serverStatus.errors.length || browserSpawnerStatus.errors.length ? (
            <Text color="red">Error has occured! For more information, please enlarge the CLI window.</Text>
        ) : !(compilerStatus.isReady && serverStatus.isReady && browserSpawnerStatus.isReady) ? (
            <Text color="yellow">Colldev is launching! For more information, please enlarge the CLI window.</Text>
        ) : (
            <Text color="green">Colldev is live! For more information, please enlarge the CLI window.</Text>
        );
    } else {
        return (
            <Box
                borderStyle="round"
                display="flex"
                flexDirection="column"
                borderColor={
                    compilerStatus.errors.length || serverStatus.errors.length || browserSpawnerStatus.errors.length
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

                <Text color="gray">To open additional window {openCollboardUrl}</Text>
            </Box>
        );
    }
}
