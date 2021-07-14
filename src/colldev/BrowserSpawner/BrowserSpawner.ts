import { Destroyable, IDestroyable } from 'destroyable';
import puppeteer, { Browser, Page } from 'puppeteer-core';
import { forTime } from 'waitasecond';
import { ColldevServer } from '../ColldevServer/ColldevServer';

/*
import openBrowser from 'open';
openBrowser(url);
*/

interface IBrowserSpawnerOptions {
    //browser: 'default'|'chrome'...|'puppeteer'
    openMultiple: boolean;
}

export class BrowserSpawner extends Destroyable implements IDestroyable {
    private browser: Browser;

    // TODO: maybe create separate puppeteer spawner

    constructor(private server: ColldevServer, private readonly options: IBrowserSpawnerOptions) {
        super();
        // !!! this.init();
    }

    async open(url: string) /* TODO: Maybe return destroyable tab */ {
        if (false /*!!!*/ && !this.options.openMultiple) {
            await forTime(2500 /* TODO: Configurable */);
            if (Object.values(this.server.serverStatus.value.clients).length) {
                // Note: There is already some client connected
                return;
            }
        }

        const page = await this.newPage();
        await page.goto(url);

        console.log(3);
    }

    private async newPage(): Promise<Page> {
        if (!this.browser) {
            this.browser = await puppeteer.launch({
                headless: false,
                /*!!! unhardcode and allow to pick executable or browser alias */
                executablePath: `C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe`,
                //`C:/Program Files (x86)/Google/Chrome/Application/chrome.exe`,
            });
            return (await this.browser.pages())[0];
        } else {
            return await this.browser.newPage();
        }
    }

    public async destroy() {
        await super.destroy();
        this.browser.close();
    }
}
