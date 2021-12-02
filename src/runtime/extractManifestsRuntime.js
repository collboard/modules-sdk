// Note: This script fakes the runtime environment of the browser and exports all declared module manifests

module.exports = (async () => {
    function factor(factorable) {
        if (typeof factorable === 'function') {
            return factorable();
        } else {
            return factorable;
        }
    }

    const manifests = [];
    const fake = new Proxy({}, { get: () => fake });
    const window = {
        declareModule: (module) => {
            manifests.push(factor(module).manifest);
        },
        CollboardSdk: new Proxy(
            {
                // Note: Faking CollboardSdk
            },
            {
                get: (target, property, receiver) => {
                    if (/^make/.test(property)) {
                        // TODO: !! Makers should be in external library
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

/**
 * TODO: How to deal with anonymous modules?
 */
