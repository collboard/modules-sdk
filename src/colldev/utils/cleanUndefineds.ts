export function cleanUndefineds<T extends object>(object: T): T {
    const newObject = { ...object };
    for (const key in newObject) {
        if (newObject[key] === undefined) {
            delete newObject[key];
        }
    }
    return newObject;
}
