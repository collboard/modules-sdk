import { Registration } from 'destroyable';
import { declareModule } from '../../../../src/runtime/runtime';

declareModule({
    setup() {
        return Registration.void();
    },
});
