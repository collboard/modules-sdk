// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { BusinessName } from '../50-systems/BusinessSystem/configuration/BusinessName';
export declare class ServiceLog {
    serviceName: string;
    description: string;
    options: object;
    businessName: BusinessName;
    remoteVersion: string;
    remoteInstanceId: string;
    stats: object;
    lastStats: object | null;
    lastRealStats: object | null;
    lastLogs: string | null;
    lastRealLogs: string | null;
    lastRun: Date | null;
    lastRealRun: Date | null;
}
