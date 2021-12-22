import { Registration } from 'destroyable';
import { declareModule } from '../../../src/runtime/runtime';

declareModule({
    manifest: {
        name: 'missing-scope',
    },
    setup() {
        return Registration.void();
    },
});
