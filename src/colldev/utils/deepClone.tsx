export function deepClone<T>(entity: T): T {
    if (['number', 'string', 'boolean', 'undefined'].includes(typeof entity)) {
        return entity;
    }
    try {
        return JSON.parse(JSON.stringify(entity));
    } catch (error) {
        const message = `Can't clone ${typeof entity} ${entity}`;
        console.error({ message, error, entity });
        throw new Error(message);
    }
}
