import { declareModule } from '../../../src/runtime/runtime';

declareModule({
    manifest: {
        name: '@collboard/runtime-error-in-setup-module',
        version: '1.0.0',
    },
    setup() {
        throw new Error(`🧪 Testing here runtime error in setup`);
    },
});
