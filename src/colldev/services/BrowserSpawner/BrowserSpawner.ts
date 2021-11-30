import { ChildProcessWithoutNullStreams, spawn } from 'child_process';
import { Destroyable, IDestroyable } from 'destroyable';
import { getAppName, locateBrowser } from 'locate-app';
import puppeteer, { Browser, Page } from 'puppeteer-core';
import { BehaviorSubject } from 'rxjs';
import { forTime } from 'waitasecond';
import { IColldevDevelopOptions } from '../../commands/develop/IColldevDevelopOptions';
import { Server } from '../Server/Server';
import { IBrowserSpawnerStatus } from './IBrowserSpawnerStatus';

type IBrowserSpawnerOptions = Pick<IColldevDevelopOptions, 'open' | 'browser' | 'headless' | 'wait'>;
export class BrowserSpawner extends Destroyable implements IDestroyable {
    /**
     * Note: We are not using here mobx-react because it does not work with ink
     */
    readonly browserSpawnerStatus = new BehaviorSubject<IBrowserSpawnerStatus>({
        ready: false,
        errors: [],
        browserName: 'Browser',
        spawned: false,
    });

    private puppeteerBrowser: Browser;
    private process: ChildProcessWithoutNullStreams;

    public constructor(private server: Server, private readonly options: IBrowserSpawnerOptions) {
        super();
        this.init();
    }

    private async init() {
        const { open, wait, browser, headless } = this.options;

        if (open === 'none') {
            this.browserSpawnerStatus.next({ ...this.browserSpawnerStatus.value, ready: true });
            return;
        }

        try {
            const executablePath = await locateBrowser(browser);
            const browserName = await getAppName(executablePath);

            this.browserSpawnerStatus.next({ ready: false, errors: [], browserName, spawned: false });

            if (open === 'single') {
                await forTime(parseInt(wait, 10));
                if (Object.values(this.server.serverStatus.value.clients).length) {
                    // Note: There is already some client connected
                    return;
                }
            } /* not else */

            const openCollboardUrl = await this.server.openCollboardUrl();
            const colldevUrl = await this.server.colldevUrl();

            if (/* TODO: spawnMethod */ /(chrome|edge)/.test(executablePath)) {
                let page: Page;
                if (!this.puppeteerBrowser) {
                    this.puppeteerBrowser = await puppeteer.launch({
                        headless,
                        executablePath,
                        defaultViewport: null,

                        // TODO: maybe VPN args: ['--proxy-server=socks5://127.0.0.1:9050']
                        // TODO: maybe --disable-web-security
                    });
                    page = (await this.puppeteerBrowser.pages())[0];
                } else {
                    page = await this.puppeteerBrowser.newPage();
                }

                await page.setRequestInterception(true);
                page.on('request', (request) => {
                    if (!request.url().includes(colldevUrl)) {
                        // console.log(`NOT adding headers for ${request.url()}`);
                        request.continue();
                        return;
                    } else {
                        // console.log(`Adding headers for ${request.url()}`);

                        const headers = request.headers();

                        // TODO: Make own instance of localtunnel without this issue
                        // Note: this is for bypassing localtunnels warning
                        headers['Bypass-Tunnel-Reminder'] = 'true';
                        request.continue({ headers });
                    }
                });

                await page.goto(openCollboardUrl, {});
                await page.evaluate(() => {
                    localStorage.setItem('Collboard_DevelopmentWarning_accepted', 'true');
                    localStorage.setItem('Collboard_EuCookiesWarning_accepted', 'true');
                });
            } else {
                this.process = spawn(executablePath, [openCollboardUrl]);
                // TODO: Save child process to destroy it
                // TODO: Is this working with safari?
            }

            this.browserSpawnerStatus.next({ ready: true, errors: [], browserName, spawned: true });
        } catch (error) {
            this.browserSpawnerStatus.next({ ...this.browserSpawnerStatus.value, ready: true, errors: [error] });
        }
    }

    public async destroy() {
        await super.destroy();

        // TODO: This bellow is not working
        if (this.puppeteerBrowser) {
            this.puppeteerBrowser.close();
        }
        if (this.process) {
            this.process.kill();
        }
    }
}
