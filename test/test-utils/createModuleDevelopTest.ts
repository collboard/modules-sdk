import { join } from 'path';
import { execCommand } from './execCommand/execCommand';
import { getFlags } from './getFlags';

export function createModuleDevelopTest(modulePath: string, expectError: string | null): () => void {
    return () => {
        const expectation = expect(
            getFlags().then((flags) => {
                const command = `npx ts-node --openssl-legacy-provider ./src/colldev/main.ts develop ./test-samples/${modulePath} ${flags}`;
                const cwd = join(__dirname, '../..');
                const timeout = 60 * 1000;

                // console.log({ command, flags, cwd, timeout });

                return execCommand({
                    command,
                    cwd,
                    timeout,
                });
            }),
        );

        if (!expectError) {
            expectation.resolves.not.toThrowError();
        } else {
            expectation.rejects.toThrowError(expectError);
        }
    };
}
