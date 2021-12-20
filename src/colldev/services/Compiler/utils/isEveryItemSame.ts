export function isEveryItemSame<T>(...values: T[]): boolean {
    const set = new Set(values);
    return set.size === 0 || set.size === 1;
}
