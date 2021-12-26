import { join } from 'path';
import { execCommand } from './execCommand/execCommand';
import { getFlags } from './getFlags';

export function createModuleDevelopTest(modulePath: string, expectError: string | null): any {
    if (!expectError) {
        return () =>
            expect(
                getFlags().then((flags) =>
                    execCommand({
                        command: `npx ts-node ./src/colldev/main.ts develop ./test-samples/${modulePath} ${flags}`,
                        cwd: join(__dirname, '../..'),
                        timeout: 60 * 1000,
                    }),
                ),
            ).resolves.not.toThrowError();
    } else {
        return () =>
            expect(
                getFlags().then((flags) =>
                    execCommand({
                        command: `npx ts-node ./src/colldev/main.ts develop ./test-samples/${modulePath} ${flags}`,
                        cwd: join(__dirname, '../..'),
                        timeout: 60 * 1000,
                    }),
                ),
            ).rejects.toThrowError(expectError);
    }
}
