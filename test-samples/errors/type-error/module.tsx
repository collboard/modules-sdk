import { declareModule } from '../../../src/runtime/runtime';

declareModule({
    manifest: {
        name: '@collboard/type-error-module',
    },
    setup() {
        return {
            // 🧪 Testing here mising stuff
            missingDestroy: () => {},
        };
    },
});
