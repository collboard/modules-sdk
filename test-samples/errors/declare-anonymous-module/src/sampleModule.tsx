import { Registration } from 'destroyable';
import { declareModule } from '../../../../src/runtime/runtime';

declareModule({
    /*
    Note: This is a sample module anonymous module that has no manifest that shoud infer error in colldev
    > manifest: {
    >     name: '@collboard/sample-colldev-module',
    >     version: "1.0.0",
    > },
    */
    setup() {
        return Registration.void();
    },
});
