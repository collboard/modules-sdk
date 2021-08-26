import { Destroyable, IDestroyable } from 'destroyable';
import puppeteer, { Browser, Page } from 'puppeteer-core';
import { forTime } from 'waitasecond';
import { IColldevDevelopOptions } from '../IColldevDevelopOptions';
import { Server } from '../Server/Server';
import { locateBrowser } from './locateBrowser';

type IBrowserSpawnerOptions = Pick<IColldevDevelopOptions, 'open' | 'browser' | 'headless' | 'wait'>;
export class BrowserSpawner extends Destroyable implements IDestroyable {
    private puppeteerBrowser: Browser;

    // TODO: maybe create separate puppeteer spawner

    public static async init(server: Server, options: IBrowserSpawnerOptions): Promise<BrowserSpawner> {
        const browserSpawner = new this(server, options);
        await browserSpawner.init();
        return browserSpawner;
    }

    private constructor(private server: Server, private readonly options: IBrowserSpawnerOptions) {
        super();
    }

    private async init() {
        const { open, wait } = this.options;

        if (open === 'none') {
            return;
        } else if (open === 'single') {
            await forTime(parseInt(wait, 10));
            if (Object.values(this.server.serverStatus.value.clients).length) {
                // Note: There is already some client connected
                return;
            }
        } /* not else */

        const page = await this.newPage();
        await page.setExtraHTTPHeaders({
            // Note: this is for bypassing localtunnels warning
            'Bypass-Tunnel-Reminder': 'true',
        });
        await page.goto(await this.server.openCollboardUrl(), {});
        await page.evaluate(() => {
            localStorage.setItem('Collboard_DevelopmentWarning_accepted', 'true');
            localStorage.setItem('Collboard_EuCookiesWarning_accepted', 'true');
        });
    }

    private async newPage(): Promise<Page> {
        let { browser, headless } = this.options;
        if (!this.puppeteerBrowser) {
            this.puppeteerBrowser = await puppeteer.launch({
                headless,
                executablePath: await locateBrowser(browser),
            });
            return (await this.puppeteerBrowser.pages())[0];
        } else {
            return await this.puppeteerBrowser.newPage();
        }
    }

    public async destroy() {
        await super.destroy();
        if (this.puppeteerBrowser) {
            this.puppeteerBrowser.close();
        }
    }
}
