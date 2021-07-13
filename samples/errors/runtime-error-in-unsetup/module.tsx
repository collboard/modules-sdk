import { declareModule } from '../../../src/runtime/runtime';

declareModule({
    manifest: {
        name: 'RuntimeErrorInUnsetupModule',
    },
    setup() {
        return {
            destroy: () => {
                throw new Error(`🧪 Testing here runtime error in unsetup`);
            },
        };
    },
});
