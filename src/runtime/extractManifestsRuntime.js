// Note: This script fakes the runtime environment of the browser and exports all declared module manifests

module.exports = (async () => {
    const manifests = [];
    const fake = new Proxy({}, { get: () => fake });
    const window = {
        declareModule: (module) => {
            // TODO: !!! Factory and async - and test it
            manifests.push(module.manifest);
        },
        CollboardSdk: new Proxy(
            {
                // Note: Faking CollboardSdk
            },
            {
                get: (target, property, receiver) => {
                    if (/^make/.test(property)) {
                        // TODO: !! Makersw should be in external library
                        return (protoModule) => {
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
        // TODO: Some better form of isolation and sandboxing here
    })();

    return manifests;
})();
