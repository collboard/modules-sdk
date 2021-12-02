export function deepClone<T>(entity: T): T {
    return JSON.parse(JSON.stringify(entity));
}
