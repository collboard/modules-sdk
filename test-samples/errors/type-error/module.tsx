import { declareModule } from '../../../src/runtime/runtime';

declareModule({
    manifest: {
        name: '@collboard/type-error-module',
        version: '1.0.0',
    },
    setup() {
        return {
            // 🧪 Testing here mising stuff
            missingDestroy: () => {},
        };
    },
});
