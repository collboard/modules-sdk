import { Text } from 'ink';
import * as React from 'react';

type IBulletProps = React.PropsWithChildren<{ isDone?: boolean; isError?: boolean; isSkipped?: boolean }>;

export function Bullet({ children, isDone, isError, isSkipped }: IBulletProps) {
    if (isError) {
        return (
            <Text color="red" bold>
                [✗] {children}
            </Text>
        );
    } else if (isDone) {
        return (
            <Text color="green" bold>
                [✔] {children}
            </Text>
        );
    } else if (isSkipped) {
        return (
            <Text color="magenta" bold>
                [‒] {children}
            </Text>
        );
    } else {
        return (
            <Text color="yellow" bold>
                {/* Note: Originally here was used [<Spinner type="arrow" />] but frequent updating is making problems for some CLI consoles*/}
                [⧖] {children}
            </Text>
        );
    }
}
