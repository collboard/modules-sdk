import { Destroyable, IDestroyable } from 'destroyable';
import puppeteer, { Browser, Page } from 'puppeteer-core';
import { forTime } from 'waitasecond';
import { IColldevDevelopOptions } from '../Colldev/commands/develop/IColldevDevelopOptions';
import { ColldevServer } from '../ColldevServer/ColldevServer';

/*
import openBrowser from 'open';
openBrowser(url);
*/

type IBrowserSpawnerOptions = Pick<IColldevDevelopOptions, 'open' | 'browser' | 'headless' | 'wait'>;
export class BrowserSpawner extends Destroyable implements IDestroyable {
    private browser: Browser;

    // TODO: maybe create separate puppeteer spawner

    constructor(private server: ColldevServer, private readonly options: IBrowserSpawnerOptions) {
        super();
        this.init();
    }

    private async init() {
        const { open, wait } = this.options;

        if (open === 'none') {
            return;
        } else if (open === 'single') {
            await forTime(parseInt(wait));
            if (Object.values(this.server.serverStatus.value.clients).length) {
                // Note: There is already some client connected
                return;
            }
        } /* not else */

        const page = await this.newPage();
        await page.goto(this.server.openCollboardUrl);
    }

    private async newPage(): Promise<Page> {
        const { browser, headless } = this.options;

        if (!this.browser) {
            this.browser = await puppeteer.launch({
                headless,
                executablePath: browser,
            });
            return (await this.browser.pages())[0];
        } else {
            return await this.browser.newPage();
        }
    }

    public async destroy() {
        await super.destroy();
        if (this.browser) {
            this.browser.close();
        }
    }
}
