export function objectMap<TValue, TValueMapped>(
    object: Record<string, TValue>,
    map: (key: string, value: TValue) => [string, TValueMapped],
): Record<string, TValueMapped> {
    return Object.keys(object).reduce((result, key) => {
        const [newKey, newValue] = map(key, object[key]);
        result[newKey] = newValue;
        return result;
    }, {} as Record<string, TValueMapped>);
}
