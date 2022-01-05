// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
export declare namespace IColldevSyncerSocket {
    interface IError {
        name: string;
        message: string;
        stack?: string;
    }
    interface identify {
        instanceId: string;
    }
    interface bundle {
        bundleUrl: string;
    }
    interface clientStatus {
        version: number;
        isConnected: boolean;
        isReady: boolean;
        errors: IError[];
        boardId: string | null;
        url: string;
        modules: Record<
            string,
            {
                isDeclared: boolean;
                isInstalled: boolean;
                errors: IError[];
            }
        >;
    }
}
