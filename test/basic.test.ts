import { join } from 'path';
import { execCommand } from './utils/execCommand';

describe('the basics', () => {
    it('should run without crash on the sample module', async () => {
        await expect(
            execCommand({
                command: 'ts-node src/colldev/main.ts develop ./samples/hello-world --exit',
                cwd: join(__dirname, '..'),
            }),
        ).rejects.toThrow('I should fail!!!');
        expect.assertions(1);
    });
});
