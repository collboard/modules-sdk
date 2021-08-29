import { locateBrowser } from './locateBrowser';

describe('finding the browser', () => {
    it('should find Chrome', async () => {
        await expect(locateBrowser('chrome')).resolves.toMatch(/chrome/);
        expect.assertions(1);
    });

    it('should find Firefox', async () => {
        await expect(locateBrowser('firefox')).resolves.toMatch(/firefox/);
        expect.assertions(1);
    });

    /*
    TODO:
    it('should find Safari', async () => {
        await expect(locateBrowser('safari')).resolves.toMatch(/safari/);
        expect.assertions(1);
    });
    */

    /*
    TODO:
    it('should find Edge', async () => {
        await expect(locateBrowser('edge')).resolves.toMatch(/msedge/);
        await expect(locateBrowser('edge')).resolves.toMatch(/msedge/);
        expect.assertions(2);
    });
    */

    it('should find Internet explorer', async () => {
        await expect(locateBrowser('ie')).resolves.toMatch(/iexplore/);
        await expect(locateBrowser('msie')).resolves.toMatch(/iexplore/);
        expect.assertions(2);
    });

    it('should fail when passing invalid entries', async () => {
        await expect(locateBrowser('chromex')).rejects.toThrow();
        await expect(locateBrowser('dfsagrg/efsdfsdf')).rejects.toThrow();
        await expect(locateBrowser('https://jestjs.io/docs/expect')).rejects.toThrow();
        expect.assertions(3);
    });
});
