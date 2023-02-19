// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { uuid } from '../40-utils/typeAliases';
import { ITunnelData } from './interfaces/ITunnelData';
export declare class Tunnel implements ITunnelData {
    id: number;
    userId: uuid | null;
    browserId: uuid;
    sessionId: uuid;
    instanceId: uuid;
    boardApiId: uuid;
    connectionId: uuid;
    remoteInstanceId: string;
    uriId: string;
    clientVersion: string;
    remoteVersion: string;
    start: Date;
    end: Date | null;
}
