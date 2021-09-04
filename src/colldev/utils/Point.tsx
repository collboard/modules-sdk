import { Text } from 'ink';
import Spinner from 'ink-spinner';
import * as React from 'react';

export function Point({
    children,
    done,
    error,
    skipped,
}: React.PropsWithChildren<{ done?: boolean; error?: boolean; skipped?: boolean }>) {
    if (error) {
        return (
            <Text color="red" bold>
                [✗] {children}
            </Text>
        );
    } else if (done) {
        return (
            <Text color="green" bold>
                [✔] {children}
            </Text>
        );
    } else if (skipped) {
        return (
            <Text color="magenta" bold>
                [‒] {children}
            </Text>
        );
    } else {
        return (
            <Text color="yellow" bold>
                [<Spinner type="arrow" />] {children}
            </Text>
        );
    }
}
