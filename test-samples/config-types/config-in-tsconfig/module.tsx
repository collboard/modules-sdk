import { declareModule } from '../../../src/runtime/runtime';

declareModule({
    manifest: {
        name: '@collboard/sample',
        version: '1.0.0',
    },
    setup() {
        return {
            destroy: () => {},
        };
    },
});
