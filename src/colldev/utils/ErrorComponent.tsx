import { Box, Text } from 'ink';
import * as React from 'react';

interface IErrorsComponentProps {
    errors: Error[];
    isBoxShown?: boolean;
}

export function ErrorComponent({ errors, isBoxShown }: IErrorsComponentProps) {
    const inner = (
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

    if (isBoxShown) {
        return (
            <Box borderStyle="single" borderColor="red">
                {inner}
            </Box>
        );
    } else {
        return inner;
    }
}
