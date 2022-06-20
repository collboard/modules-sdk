import { ChildProcessWithoutNullStreams, spawn } from 'child_process';
import { Destroyable, IDestroyable } from 'destroyable';
import { getAppName, locateBrowser } from 'locate-app';
import openBrowser from 'open';
import puppeteer, {
    Browser,
    Page,
} from 'puppeteer' /* <- TODO: Maybe better to install puppeteer-core and chrome separatelly when missing (for example in GitHub actions environment) */;
import { BehaviorSubject } from 'rxjs';
import { forTime } from 'waitasecond';
import { IColldevDevelopOptions } from '../../commands/develop/IColldevDevelopOptions';
import { IService } from '../IService';
import { Server } from '../Server/Server';
import { IBrowserSpawnerStatus } from './IBrowserSpawnerStatus';

type IBrowserSpawnerOptions = Pick<IColldevDevelopOptions, 'open' | 'browser' | 'headless' | 'wait'>;
export class BrowserSpawner extends Destroyable implements IService, IDestroyable {
    /**
     * Note: We are not using here mobx-react because it does not work with ink
     */
    readonly status = new BehaviorSubject<IBrowserSpawnerStatus>({
        isReady: false,
        errors: [],
        browserName: 'Browser',
        isSpawned: false,
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
            this.status.next({ ...this.status.value, isReady: true });
            return;
        }

        if (open === 'system') {
            if (browser === 'default') {
                openBrowser(await this.server.openCollboardUrl());
            } else {
                openBrowser(await this.server.openCollboardUrl(), { app: { name: browser } });
            }

            this.status.next({ ...this.status.value, isReady: true });
            return;
        }

        try {
            const executablePath = await locateBrowser(browser);
            const browserName = await getAppName(executablePath);

            this.status.next({ isReady: false, errors: [], browserName, isSpawned: false });

            if (open === 'single') {
                await forTime(parseInt(wait, 10));
                if (Object.values(this.server.status.value.clients).length) {
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
                        defaultViewport: null /* <- Note: To allow of content size responsivity to window size */,

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

                /*
                Note: This part started to make problems* because it is not crucial for colldev, I am commenting it out
                      [*] Evaluation failed: DOMException: Failed to read the 'localStorage' property from 'Window': Access is denied for this document.

                await page.evaluate((pageFunction) => {
                    //localStorage.setItem('Collboard_DevelopmentWarning_accepted', 'true');
                    //localStorage.setItem('Collboard_EuCookiesWarning_accepted', 'true');
                });
                */
            } else {
                this.process = spawn(executablePath, [openCollboardUrl]);
                // TODO: Save child process to destroy it
                // TODO: Is this working with safari?
            }

            this.status.next({ isReady: true, errors: [], browserName, isSpawned: true });
        } catch (error) {
            this.status.next({ ...this.status.value, isReady: true, errors: [error] });
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
