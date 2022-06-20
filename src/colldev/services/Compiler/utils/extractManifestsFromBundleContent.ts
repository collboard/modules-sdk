import { locateChrome } from 'locate-app';
import puppeteer from 'puppeteer' /* <- TODO: Maybe better to install puppeteer-core and chrome separatelly when missing (for example in GitHub actions environment) */;
import spaceTrim from 'spacetrim';
import { forTime } from 'waitasecond';
import { IModuleDefinition, IModuleManifest } from '../../../../../types';
import { WAIT_FOR_MODULES_MS } from '../../../config';

/**
 * Analyzes javascript bundle content and search for all declared modules
 * It is done by launshing Collboard environment in a headless window
 *
 * @param bundleContent Javascript bundle content to analyze
 * @returns at least one module manifest if there is none, it will throw an error
 */
export async function extractManifestsFromBundleContent(bundleContent: string): Promise<IModuleManifest[]> {
    const manifests: IModuleManifest[] = [];

    const browser = await puppeteer.launch({
        headless: true,
        executablePath: await locateChrome(/* Or auto-install - add to locate app? */),
        defaultViewport: null /* <- Note: To allow of content size responsivity to window size */,
    });

    const page = await browser.newPage();
    await page.goto('https://collboard.com/', {
        waitUntil: 'networkidle2' /* <- TODO: Is networkidle2 ideal for Collboard app? */,
    });

    // Listen for module declarations
    await page.exposeFunction('declareModuleDefinition', (moduleDefinition: IModuleDefinition) => {
        if (moduleDefinition.manifest) {
            manifests.push(moduleDefinition.manifest /* <- TODO: isModuleManifestValid */);
        }
    });

    // Intercepting Collboard`s declareModule and call declareModuleDefinition
    await page.addScriptTag({
        content: spaceTrim(`
        window.declareModule = async (module) => {
          const moduleDefinition = await  window.CollboardSdk.factor(module);
          declareModuleDefinition(moduleDefinition);
        }
  `),
    });

    // Injecting module script
    await page.addScriptTag({ content: bundleContent });

    await forTime(WAIT_FOR_MODULES_MS);
    await browser.close();

    return manifests;
}

/**
 * TODO: Maybe auto-install Chromium if needed
 * TODO: Maybe allow to choose [🏌️] browser + headless + collboardUrl + expose mode as it is on develop
 * TODO: Maybe some service called "Verifier" that will test advanced things like performance profile, memory leaks, etc.
 * Note: Old version of this functionality (createManifestsFromBundleContent) was deleted on commit 5eda7128e09a9c151209c940c55939648c1905a2
 */
