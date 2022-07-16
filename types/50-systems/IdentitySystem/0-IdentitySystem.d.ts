// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_uuid } from '../../40-utils/typeAliases';
import { AbstractSystem } from '../AbstractSystem';
import { IBoardApiIdentity, IConnectionIdentity, IInstanceIdentity } from './IIdentity';
/**
 * IdentitySystem identifies the User by a pseudonym.
 *
 * @collboard-system
 */
export declare class IdentitySystem extends AbstractSystem {
    readonly instanceId: string_uuid;
    private storage;
    private _browserId;
    private _sessionId;
    protected init(): Promise<void>;
    get browserId(): string_uuid;
    get sessionId(): string_uuid;
    createInstanceIdentity(): IInstanceIdentity;
    createBoardApiIdentity(): IBoardApiIdentity;
    createConnectionIdentity(boardApiIdentity: IBoardApiIdentity): IConnectionIdentity;
    private track;
}
/**
 * TODO: Migrate clientId to probbably browserId
 * TODO: In LIB everstorage make some nicer syntax for legacy + migrations
 */
