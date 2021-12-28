import safeEval from 'safe-eval';

/**
 * Simmilar as eval but with better error handling
 * @param javascriptCode that has module.exports which is returned
 */

export async function evaluateBySafeEval<T>(javascriptCode: string): Promise<T> {
    const javascriptModuleCode = `
        ((()=>{
            var module = {};
            ${javascriptCode};

            return module.exports;
        })())
    `;

    return safeEval(javascriptModuleCode, {}, { filename: 'evaluate.js' });
}
