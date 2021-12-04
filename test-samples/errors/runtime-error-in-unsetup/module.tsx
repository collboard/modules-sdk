import { declareModule } from '../../../src/runtime/runtime';

declareModule({
    manifest: {
        name: 'runtime-error-in-unsetup-module',
    },
    setup() {
        return {
            destroy: () => {
                throw new Error(`🧪 Testing here runtime error in unsetup`);
            },
        };
    },
});
