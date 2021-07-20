import { Text } from 'ink';
import * as React from 'react';
import { ICompilerStatus } from './ICompilerStatus';

interface ICompilerStatusProps {
    compilerStatus: ICompilerStatus;
}

export function CompilerStatusOutputComponent({
    compilerStatus: { ready, errors, compilerStats, webpackStats, bundle },
}: ICompilerStatusProps) {
    if (!ready) {
        return <Text color="grey">Compiling...</Text>;
    }

    if (errors.length) {
        return (
            <>
                {errors.map((error, i) => (
                    <Text color="red" key={i}>
                        <Text color="white" backgroundColor="red">
                            {error.name}
                            {`: `}
                        </Text>
                        {` `}
                        {error.message}
                    </Text>
                ))}
            </>
        );
    }

    // TODO: Report nicer - words compiled, runned (and test, type check...) shoud be dynamic from status and on separate lines with nice ✔ / ❌
    return (
        <Text color="green">
            {webpackStats?.toString({
                chunks: false, // Makes the build much quieter
                colors: true, // Shows colors in the console
            })}
        </Text>
    );
}
