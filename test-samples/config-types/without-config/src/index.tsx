import { declareModule } from '../../../../src/runtime/runtime';

// Note: Testing that colldev will find default ./src/index.tsx file
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
