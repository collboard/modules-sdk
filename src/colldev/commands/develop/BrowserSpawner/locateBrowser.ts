import { apps } from 'open';

/**
 *
 * @param browser It can be "default", "chrome", "firefox" or "edge" or executable path to the browser
 * @returns executable path to browser
 */
export async function locateBrowser(browser: string): Promise<string> {
    if (browser === 'default') {
        browser = 'chrome';
    }

    let executablePath: string;

    if (/^[a-z]+$/.test(browser)) {
        const app: string | string[] = apps[browser];

        console.log({ app }, [apps.edge, apps.chrome, apps.firefox]);

        if (typeof app === 'string') {
            executablePath = app;
        } else if (app.length === 0) {
            throw new Error(
                `Can not locate browser "${browser}" in the operating system. You can pass full executable path to --browser`,
            );
        } else if (app.length > 1) {
            throw new Error(
                `zzzzzTODO!!!!!!!!zzzzzzzz browser "${browser}" in the operating system. You can pass full executable path to --browser`,
            );
        } else {
            executablePath = app[0];
        }
    } else {
        executablePath = browser;
    }

    /*
    try {
        await access(executablePath);
        return executablePath;
    } catch (error) {
        throw new Error(`Can not access browser executable path "${executablePath}".`);
    }
    */

    return executablePath;
}
