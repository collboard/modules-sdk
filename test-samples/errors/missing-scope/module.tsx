import { Registration } from 'destroyable';
import { declareModule } from '../../../src/runtime/runtime';

declareModule({
    manifest: {
        name: 'missing-scope',
        version: '1.0.0',
    },
    setup() {
        return Registration.void();
    },
});
