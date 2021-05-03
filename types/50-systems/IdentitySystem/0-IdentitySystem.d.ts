
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { string_uuid } from '../../40-utils/typeAliases';
import { AbstractSystem } from '../AbstractSystem';
import { IBoardApiIdentity, IConnectionIdentity, IInstanceIdentity } from './IIdentity';
/**
 * IdentitySystem identifies the User by a pseudonym.
 * TODO: Rename all UUID UPPERCASE strings to Uuid
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

                  