import { readConfigFile } from './readConfigFile';

describe('reading of config files', () => {
    it('works with json', () =>
        expect(readConfigFile('./test-samples/config-types/config-in-colldev-json/config.json')).resolves.toEqual({
            entryPath: './module.tsx',
        }));

    it('works with yml', () =>
        expect(readConfigFile('./test-samples/config-types/config-in-colldev-yml/config.yml')).resolves.toEqual({
            entryPath: './module.tsx',
        }));

    it('works with javascript', () =>
        expect(readConfigFile('./test-samples/config-types/config-in-colldev-js/config.js')).resolves.toEqual({
            entryPath: './module.tsx',
        }));

    /*TODO
    it('works with typescript', () =>
        expect(readConfigFile('./test-samples/config-types/config-in-colldev-ts/config.ts')).resolves.toEqual({
            entryPath: './module.tsx',
        }));
    */
});
