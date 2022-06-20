import { extractManifestsFromBundleContent } from './services/Compiler/utils/extractManifestsFromBundleContent';

playground();

/**
 * Just for testing purposes
 */
async function playground() {
    const manifests = await extractManifestsFromBundleContent(`
        window.declareModule(
          window.CollboardSdk.makeModalModule({
              manifest: {
                  name: '@foo/module-maked-by-maker',
              },
          }),
      );
    `);

    console.info(manifests);
}
