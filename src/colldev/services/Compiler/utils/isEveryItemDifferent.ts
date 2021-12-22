
export function isEveryItemDifferent<T>(...values: T[]): boolean {
    const set = new Set(values);
    return set.size === values.length;
}
