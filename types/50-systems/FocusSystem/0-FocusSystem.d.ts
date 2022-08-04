// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { AbstractSystem } from '../10-AbstractSystem/AbstractSystem';
import { FocusScope } from './FocusScope';
/**
 *
 * Represents type of the focus which can be taken each by one thing in the Collboard app
 *
 * @collboard-modules-sdk
 */
export declare enum FocusScopeName {
    Tool = 'TOOLS',
    Navigation = 'NAVIGATION',
    Social = 'SOCIAL',
}
/**
 * FocusSystem can register and manage unique focuses and icons which there are.
 *
 * @collboard-system
 */
export declare class FocusSystem extends AbstractSystem {
    private focusScopes;
    protected init(): Promise<void>;
    getFocus<TIdentification>(focusName: FocusScopeName | string): FocusScope<TIdentification>;
    getAllFocusScopes<TIdentification>(): Record<FocusScopeName, FocusScope<TIdentification>>;
    destroy(): Promise<void>;
}
