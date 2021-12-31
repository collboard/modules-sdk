import { Registration } from 'destroyable';
import { declareModule } from '../../../src/runtime/runtime';

declareModule({
    manifest: {
        name: '@collboard/name-collision-module',
        version: '1.0.0',
    },
    setup() {
        return Registration.void();
    },
});

declareModule({
    manifest: {
        name: '@collboard/name-collision-module',
        version: '2.0.0',
    },
    setup() {
        return Registration.void();
    },
});
