// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

export declare namespace IColldevSyncerSocket {
    interface identify {
        instanceUUID: string;
    }
    interface bundle {
        bundleUrl: string;
    }
    interface clientStatus {
        connected: boolean;
        boardId: string | null;
        url: string;
        modules: Record<
            string,
            {
                declared: boolean;
                error?: Error;
            }
        >;
    }
}
