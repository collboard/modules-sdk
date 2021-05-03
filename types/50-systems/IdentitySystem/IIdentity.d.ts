
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

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

                  