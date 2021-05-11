// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { string_uri_part, string_version } from '../../../../40-utils/typeAliases';
import { IConnectionIdentity } from '../../../IdentitySystem/IIdentity';
export interface IIdentify {
    connectionIdentity: IConnectionIdentity;
    clientVersion: string_version;
    uriId: string_uri_part;
    lastCommitId: number;
}
