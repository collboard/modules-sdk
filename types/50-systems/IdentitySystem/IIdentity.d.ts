// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_uuid } from '../../40-utils/typeAliases';
export interface IUserIdentity {
    /**
     *
     */
    userId: string_uuid | null;
}
export interface IBrowserIdentity extends IUserIdentity {
    /**
     *
     */
    browserId: string_uuid;
}
export interface ISessionIdentity extends IBrowserIdentity {
    /**
     *
     */
    sessionId: string_uuid;
}
export interface IInstanceIdentity extends ISessionIdentity {
    /**
     *
     */
    instanceId: string_uuid;
}
export interface IBoardApiIdentity extends IInstanceIdentity {
    /**
     *
     */
    boardApiId: string_uuid;
}
export interface IConnectionIdentity extends IBoardApiIdentity {
    /**
     *
     */
    connectionId: string_uuid;
}
export declare const IDENTITY_KEYS: Array<keyof IConnectionIdentity>;
