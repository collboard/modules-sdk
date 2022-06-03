const deepFake = new Proxy(
    function () {
        return deepFake;
    },
    { get: () => deepFake },
);




function neverUndefined(target, key, descriptor) {
    if (typeof descriptor.value === 'function') {
        descriptor.value = function () {
            const args = arguments;
            const result = descriptor.value.apply(this, args);
            if (result === undefined) {
                throw new Error(`${key} is undefined`);
            }
            return result;
        };
    }
}