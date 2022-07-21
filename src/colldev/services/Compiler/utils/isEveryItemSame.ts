export function isEveryItemSame<T>(...values: Array<T>): boolean {
    const set = new Set(values);
    return set.size === 0 || set.size === 1;
}
