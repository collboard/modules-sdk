import { IAwaitable } from './IAwaitable';

/**
 * TODO: Take from independent library when available
 */
export interface IDestroyable {
    readonly destroyed: boolean;
    destroy(): IAwaitable<void>;
}
