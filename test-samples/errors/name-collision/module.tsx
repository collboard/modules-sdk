import { Registration } from 'destroyable';
import { declareModule } from '../../../src/runtime/runtime';

declareModule({
    manifest: {
        name: '@collboard/name-collision-module',
    },
    setup() {
        return Registration.void();
    },
});

declareModule({
    manifest: {
        name: '@collboard/name-collision-module',
    },
    setup() {
        return Registration.void();
    },
});
