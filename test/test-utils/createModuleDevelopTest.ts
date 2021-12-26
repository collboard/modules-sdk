import { join } from 'path';
import { execCommand } from './execCommand/execCommand';
import { getFlags } from './getFlags';

export function createModuleDevelopTest(modulePath: string, shouldNotCrash: boolean): any {
    if (shouldNotCrash) {
        return () =>
            expect(
                getFlags().then((flags) =>
                    execCommand({
                        command: `npx ts-node ./src/colldev/main.ts develop ./test-samples/${modulePath} ${flags}`,
                        cwd: join(__dirname, '..'),
                    }),
                ),
            ).resolves.not.toThrowError();
    } else {
        return () =>
            expect(
                getFlags().then((flags) =>
                    execCommand({
                        command: `npx ts-node ./src/colldev/main.ts develop ./test-samples/${modulePath} ${flags}`,
                        cwd: join(__dirname, '..'),
                    }),
                ),
            ).rejects.toThrowError();
    }
}
