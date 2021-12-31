import { declareModule } from '../../../src/runtime/runtime';

declareModule({
    manifest: {
        name: '@collboard/runtime-error-in-unsetup-module',
        "version": "1.0.0",
    },
    setup() {
        return {
            destroy: () => {
                throw new Error(`🧪 Testing here runtime error in unsetup`);
            },
        };
    },
});
