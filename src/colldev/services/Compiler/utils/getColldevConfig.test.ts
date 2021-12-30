import { getColldevConfig } from './getColldevConfig';

describe('getting colldev config', () => {
    // TODO: Remove
    it('should get config of hello-world sample', () => {
        return expect(
            getColldevConfig({
                workingDir: './test-samples/hello-world',
                commandName: 'develop',
                flags: {},
            }),
        ).resolves.toEqual({
            entryPath: './src/sampleModule.tsx',
        });
    });

    // TODO: without-config
    // TODO: config-in-colldev-ts
    // TODO: config-in-colldev-js
    // TODO: config-in-colldev-json
    // TODO: config-in-package
});
