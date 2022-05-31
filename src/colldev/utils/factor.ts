import { Factorable } from '../../../types';

export function factor<T>(factorable: Factorable<T>): T {
    if (typeof factorable === 'function') {
        return (factorable as any)();
    } else {
        return factorable as T;
    }
}
