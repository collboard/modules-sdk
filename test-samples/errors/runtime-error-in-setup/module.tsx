import { declareModule } from '../../../src/runtime/runtime';

declareModule({
    manifest: {
        name: '@collboard/runtime-error-in-setup-module',
    },
    setup() {
        throw new Error(`🧪 Testing here runtime error in setup`);
    },
});
