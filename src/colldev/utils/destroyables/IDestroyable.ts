import { IAwaitable } from './IAwaitable';

/**
 * Note: THIS IS A COPY. Do not edit it here but:
 * https://github.com/collboard/collboard/tree/refactoring/persisting-connector-advanced/src/40-utils/destroyables
 *
 */ export interface IDestroyable {
    readonly destroyed: boolean;
    destroy(): IAwaitable<void>;
}
