import { declareModule } from '../../../src/runtime/runtime';

declareModule({
    manifest: {
        name: 'NoErrorModule',
    },
    setup() {
        return {
            // 🧪 Testing module without error (to test that tests works)
            destroy: () => {},
        };
    },
});
