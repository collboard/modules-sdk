// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { string_uuid } from '../../40-utils/typeAliases';
export interface IUserIdentity {
    /**
     *
     */
    userUUID: string_uuid | null;
}
export interface IBrowserIdentity extends IUserIdentity {
    /**
     *
     */
    browserUUID: string_uuid;
}
export interface ISessionIdentity extends IBrowserIdentity {
    /**
     *
     */
    sessionUUID: string_uuid;
}
export interface IInstanceIdentity extends ISessionIdentity {
    /**
     *
     */
    instanceUUID: string_uuid;
}
export interface IBoardApiIdentity extends IInstanceIdentity {
    /**
     *
     */
    boardApiUUID: string_uuid;
}
export interface IConnectionIdentity extends IBoardApiIdentity {
    /**
     *
     */
    connectionUUID: string_uuid;
}
export declare const IDENTITY_KEYS: Array<keyof IConnectionIdentity>;
