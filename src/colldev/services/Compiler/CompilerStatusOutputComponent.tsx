import { Box, Text } from 'ink';
import * as React from 'react';
import { Bullet } from '../../utils/Bullet';
import { ICompilerStatus } from './ICompilerStatus';
import { capitalizeFirstLetter } from './utils/capitalizeFirstLetter';

interface ICompilerStatusProps {
    compilerStatus: ICompilerStatus;
}

export function CompilerStatusOutputComponent({
    compilerStatus: { isReady, stage, errors, compilerStats, webpackStats, mainBundlePath },
}: ICompilerStatusProps) {
    if (!isReady) {
        return (
            <Box borderStyle="single" borderColor="yellow">
                <Bullet>{capitalizeFirstLetter(stage)}</Bullet>
            </Box>
        );
    }

    if (errors.length) {
        return (
            <Box borderStyle="single" borderColor="red">
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
            </Box>
        );
    }

    // TODO: Report nicer - words compiled, runned (and test, type check...) shoud be dynamic from status and on separate lines with nice ✔ / ❌
    return (
        <Box borderStyle="single" borderColor="white">
            <Text color="green">
                {webpackStats?.toString({
                    chunks: false, // Makes the build much quieter
                    colors: true, // Shows colors in the console
                })}
            </Text>
        </Box>
    );
}
