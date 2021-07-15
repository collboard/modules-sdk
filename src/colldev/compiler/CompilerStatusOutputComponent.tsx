import { Text } from 'ink';
import * as React from 'react';
import { ICompilerStatus } from './Compiler';

export function CompilerStatusOutputComponent({ ready, error, compilerStats, webpackStats, bundle }: ICompilerStatus) {
    if (!ready) {
        return <Text color="grey">Compiling...</Text>;
    }

    if (error) {
        return (
            <Text color="red">
                <Text color="white" backgroundColor="red">
                    {error.name}
                    {`: `}
                </Text>
                {` `}
                {error.message}
            </Text>
        );
    }

    return <Text color="red">Compiled!</Text>;
}
