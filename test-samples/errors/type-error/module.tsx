import { declareModule } from '../../../src/runtime/runtime';

declareModule({
    manifest: {
        name: 'TypeErrorModule',
    },
    setup() {
        return {
            // 🧪 Testing here mising stuff
            missingDestroy: () => {},
        };
    },
});
