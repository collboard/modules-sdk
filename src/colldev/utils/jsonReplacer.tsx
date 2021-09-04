export function jsonReplacer(key: string, value: any) {
    if (value instanceof Error) {
        return { message: value.message };
    } else {
        return value;
    }
}
