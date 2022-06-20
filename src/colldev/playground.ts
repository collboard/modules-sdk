import { extractManifestsFromBundleContent } from './services/Compiler/utils/extractManifestsFromBundleContent';

playground();

/**
 * Just for testing purposes
 */
async function playground() {
    const manifests = await extractManifestsFromBundleContent(`





    window.declareModule(() => {
      const name = '@foo/lambda-module';
      return {
          manifest: {
              name,
          },
      };
  });









    `);

    console.info(manifests);
}
