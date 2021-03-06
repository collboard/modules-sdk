// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
// tslint:disable:class-name
// tslint:disable-next-line:no-namespace
export namespace IColldevSyncerSocket {
    export interface IError {
        name: string;
        message: string;
        stack?: string;
    }
    export interface identify {
        // TODO: Domain: string_url;
        instanceId: string;
    }
    export interface bundle {
        bundleUrl: string;
    }

    export interface clientStatus {
        version: number;
        isConnected: boolean;
        isReady: boolean;
        errors: Array<IError>;
        boardId: string | null;
        url: string;
        modules: Record<
            string,
            {
                isDeclared: boolean;
                isInstalled: boolean;
                errors: Array<IError>;
            }
        >;
    }
}

// Note: Not using string semantic helpers because this file is copyied to modules-sdk repository
//       And it is benefital for us to be easily copyable
//
//       import { string_url, string_uuid } from '../../40-utils/typeAliases';
