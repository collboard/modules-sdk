import { IFactorable } from '../../../types';

export function factor<T>(factorable: IFactorable<T>): T {
    if (typeof factorable === 'function') {
        return (factorable as any)();
    } else {
        return factorable as T;
    }
}
