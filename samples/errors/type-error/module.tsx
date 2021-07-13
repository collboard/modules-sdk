import { declareModule, makeExtrajsxModule } from '../../../src/runtime/runtime';

declareModule(
    makeExtrajsxModule({
        manifest: {
            name: 'TypeErrorModule',
        },
        // Testing here mising stuff
    }),
);
