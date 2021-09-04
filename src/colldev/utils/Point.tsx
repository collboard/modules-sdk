import { Text } from 'ink';
import Spinner from 'ink-spinner';
import * as React from 'react';

export function Point({
    children,
    done,
    failed,
    skipped,
}: React.PropsWithChildren<{ done?: boolean; failed?: boolean; skipped?: boolean }>) {
    if (done) {
        return (
            <Text color="green" bold>
                [✔] {children}
            </Text>
        );
    } else if (failed) {
        return (
            <Text color="red" bold>
                [✗] {children}
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
