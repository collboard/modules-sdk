// Note: This script fakes the runtime environment of the browser and exports all declared module manifests

module.exports = (async () => {
    const manifests = [];
    const fake = new Proxy({}, { get: () => fake });
    const window = {
        declareModule: (module) => {
            // console.info(`declareModule`, module);

            // TODO: !!! Factory and async
            manifests.push(module.manifest);
        },
        CollboardSdk: new Proxy(
            {},
            {
                get: (target, property, receiver) => {
                    // console.info('property', property);

                    if (/^make/.test(property)) {
                        // Note: ....
                        return (protoModule) => {
                            console.info('protoModule'.protoModule);
                            return protoModule;
                        };
                    } else {
                        return fake;
                    }
                },
            },
        ),
    };

    window;

    (() => {
        // Note: Here is the bundle content
    })();

    return manifests;
})();
