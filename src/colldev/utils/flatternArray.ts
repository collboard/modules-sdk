/**
 * Flattern array by one level
 * @param array for example [[1,2],[3,4]]
 * @return for example [1,2,3,4]
 *
 */
export function flatternArray<T>(array: T[][]): T[] {
    const flattened: T[] = [];
    for (const subarray of array) {
        flattened.push(...subarray);
    }
    return flattened;
}

// TODO: Use instead Array.prototype.flat @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
