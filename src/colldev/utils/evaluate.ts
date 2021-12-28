import { evaluateByRequire } from './evaluateByRequire';
import { evaluateBySafeEval } from './evaluateBySafeEval';

/**
 * Simmilar as eval but with better error handling
 * @param javascriptCode that has module.exports which is returned
 */
export async function evaluate<T>(javascriptCode: string): Promise<T> {
    if (false) {
        return evaluateBySafeEval(javascriptCode);
    } else {
        return evaluateByRequire(javascriptCode);
    }
}
