
export function isEveryItemDifferent<T>(...values: Array<T>): boolean {
    const set = new Set(values);
    return set.size === values.length;
}
