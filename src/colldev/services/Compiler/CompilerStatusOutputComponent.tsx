import { Box, Text } from 'ink';
import useStdoutDimensions from 'ink-use-stdout-dimensions';
import * as React from 'react';
import spaceTrim from 'spacetrim';
import { Bullet } from '../../utils/Bullet';
import { ErrorComponent } from '../../utils/ErrorComponent';
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
        return <ErrorComponent isBoxShown {...{ errors }} />;
    }

    const [columns, rows] = useStdoutDimensions();

    let webpackStatsString: string;
    if (!webpackStats) {
        webpackStatsString = spaceTrim(`
          No Weback stats available but seems that module is
          Compiled successfully
        `);
    } else {
        try {
            webpackStatsString = webpackStats.toString({
                chunks: false, // Makes the build much quieter
                colors: true, // Shows colors in the console
            });
        } catch (error) {
            webpackStatsString = spaceTrim(`
              Can not get Weback stats but seems that module is
              Compiled successfully
            `);
        }
    }

    if (rows < 25) {
        // Note: Showing only last line when compacted
        webpackStatsString = webpackStatsString.split('\n').reverse()[0];
    }

    // TODO: Report nicer - words compiled, runned (and test, type check...) shoud be dynamic from status and on separate lines with nice ✔ / ❌
    return (
        <Box borderStyle="single" borderColor="white">
            <Text color="green">{webpackStatsString}</Text>
        </Box>
    );
}
