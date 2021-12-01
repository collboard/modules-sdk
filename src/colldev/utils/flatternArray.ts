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
