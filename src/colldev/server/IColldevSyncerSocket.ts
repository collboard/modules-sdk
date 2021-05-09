// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

export namespace IColldevSyncerSocket {
    export interface identify {
        // TODO: domain: string_url;
        instanceUUID: string;
    }
    export interface bundle {
        bundleUrl: string;
    }

    export interface clientStatus {
        connected: boolean;
        boardId: string | null;
        url: string;
        modules: Record<
            string,
            {
                declared: boolean;
                // TODO: installed
                error?: Error;
            }
        >;
    }
}

// Note: Not using string semantic helpers because this file is copyied to modules-sdk repository
//       And it is benefital for us to be easily copyable
//
//       import { string_url, string_uuid } from '../../40-utils/typeAliases';
