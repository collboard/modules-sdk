import { declareModule } from '../../../src/runtime/runtime';

declareModule(() => {
    throw new Error(`🧪 Testing here runtime error in declare`);
});
