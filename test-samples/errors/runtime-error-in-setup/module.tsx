import { declareModule } from '../../../src/runtime/runtime';

declareModule({
    manifest: {
        name: 'RuntimeErrorInSetupModule',
    },
    setup() {
        throw new Error(`🧪 Testing here runtime error in setup`);
    },
});
