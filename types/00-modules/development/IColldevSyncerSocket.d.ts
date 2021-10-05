// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

export declare namespace IColldevSyncerSocket {
    interface IError {
        name: string;
        message: string;
        stack: string;
    }
    interface identify {
        instanceUUID: string;
    }
    interface bundle {
        bundleUrl: string;
    }
    interface clientStatus {
        version: number;
        connected: boolean;
        ready: boolean;
        errors: IError[];
        boardId: string | null;
        url: string;
        modules: Record<
            string,
            {
                declared: boolean;
                errors: IError[];
            }
        >;
    }
}
