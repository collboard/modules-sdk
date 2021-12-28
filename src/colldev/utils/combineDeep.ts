import spaceTrim from 'spacetrim';
import { flatternArray } from './flatternArray';

export function combineDeep<T>(...values: T[]): T {
    const valuesDefined = values.filter((value) => value !== undefined && value !== null);

    if (
        !valuesDefined.every(
            (value) =>
                typeof value === typeof valuesDefined[0] && Array.isArray(value) === Array.isArray(valuesDefined[0]),
        )
    ) {
        throw new Error(
            spaceTrim(`
            All values must be of the same type.
            Mixing ${valuesDefined.map((value) => typeof value).join(', ')}

            ${valuesDefined.map((value) => JSON.stringify(value)).join(' can not be mixed with ')}


        `),
        );
    } else if (typeof valuesDefined[0] === 'object') {
        if (Array.isArray(valuesDefined[0])) {
            // TODO: Maybe uniqueness check
            return [...new Set(flatternArray(valuesDefined as any))] as any;
        } else {
            const keys = [...new Set(flatternArray(valuesDefined.map((object) => Object.keys(object))))];

            const combined: T = {} as T;
            for (const key of keys) {
                combined[key] = combineDeep(...valuesDefined.map((object) => object[key]));
            }
            return combined;
        }
    } else {
        if (!valuesDefined.every((value) => value === valuesDefined[0])) {
            throw new Error(`Can not combine values ${[...new Set(valuesDefined)].map((v) => `"${v}"`).join(', ')}`);
        }

        return valuesDefined[0];
    }
}
