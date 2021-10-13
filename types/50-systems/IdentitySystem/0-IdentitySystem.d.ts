// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { string_uuid } from '../../40-utils/typeAliases';
import { AbstractSystem } from '../AbstractSystem';
import { IBoardApiIdentity, IConnectionIdentity, IInstanceIdentity } from './IIdentity';
/**
 * IdentitySystem identifies the User by a pseudonym.
 * TODO: Rename all UUID UPPERCASE strings to Uuid
 *
 * @collboard-system
 */
export declare class IdentitySystem extends AbstractSystem {
    readonly instanceUUID: string_uuid;
    private storage;
    private _browserUUID;
    private _sessionUUID;
    protected init(): Promise<void>;
    get browserUUID(): string_uuid;
    get sessionUUID(): string_uuid;
    createInstanceIdentity(): IInstanceIdentity;
    createBoardApiIdentity(): IBoardApiIdentity;
    createConnectionIdentity(boardApiIdentity: IBoardApiIdentity): IConnectionIdentity;
    private track;
}
