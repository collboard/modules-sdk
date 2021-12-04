import { declareModule } from '../../../src/runtime/runtime';

declareModule({
    manifest: {
        name: 'no-error-module',
    },
    setup() {
        return {
            // 🧪 Testing module without error (to test that tests works)
            destroy: () => {},
        };
    },
});
