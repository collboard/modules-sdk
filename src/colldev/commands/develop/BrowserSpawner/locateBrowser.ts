import { access } from 'fs/promises';

/**
 *
 * @param browser It can be "default", "chrome", "firefox", "safari", "ie", "msie", "edge" or "msedge" or executable path to the browser
 * @returns executable path to browser
 */
export async function locateBrowser(browser: string): Promise<string> {
    let executablePath: string;

    if (/^[a-zA-Z]+$/.test(browser)) {
        browser = browser.toLowerCase();

        if (browser === 'default') {
            browser = 'chrome';
            // TODO: Get default system browser DO not expect chrome
        } /* not else */

        if (browser === 'chrome') {
            executablePath = await require('locate-chrome')();
        } else if (browser === 'firefox') {
            executablePath = await require('locate-firefox')();
        } else if (browser === 'safari') {
            // TODO: Implement
            throw new Error(
                `Can not find browser Safari in your OS automatically. You can pass full executable path instead. `,
            );
        } else if (browser === 'ie' || browser === 'msie') {
            executablePath = await require('locate-ie')();
        } else if (browser === 'edge' || browser === 'msedge') {
            // TODO: Implement
            throw new Error(
                `Can not find browser Edge in your OS automatically. You can pass full executable path instead. `,
            );
        } else {
            throw new Error(`Unknown browser "${browser}". You can pass full executable path instead. `);
        }
    } else if (/.*[\\/].*/.test(browser)) {
        executablePath = browser;
    } else {
        throw new Error(`"${browser}" is not browser name or executable path to the browser.`);
    }

    try {
        await access(executablePath);
        return executablePath;
    } catch (error) {
        throw new Error(`Can not access browser executable path "${executablePath}".`);
    }
}

/**
 * TODO: Implement other browsers like Brave,...
 * TODO: Installation of the browser
 * TODO: Get rid of dependency on require('locate-firefox')
 * TODO: Test on OSx and old windows and win11
 */
