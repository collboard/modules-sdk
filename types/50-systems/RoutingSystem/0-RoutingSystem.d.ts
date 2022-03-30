// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { BrowserHistoryUrlStorage, IBrowserHistoryStorageOptions, IJson, IObservableStorage } from 'everstorage';
import { string_uri_part } from '../../40-utils/typeAliases';
import { AbstractSystem } from '../AbstractSystem';
import { IUrlVariables } from './routePath/IUrlVariables';
/**
 * @singleton
 */
export declare let routingSystem: RoutingSystem;
/**
 * RoutingSystem provides for core, other systems and modules registration of routes and hashtag routes.
 * @see https://github.com/collboard/collboard/issues/97
 * TODO: What about #hash routes
 *
 * @collboard-system
 */
export declare class RoutingSystem extends AbstractSystem {
    /**
     * Original url from startup of the application
     * Note: Collboard normalizes URL and this method is a way how to get the original query params and other things in the URL
     */
    readonly originalUrl: URL;
    viewUriId: string_uri_part | null;
    get viewUrl(): URL;
    private storageSystem;
    get selfUrl(): URL;
    protected init(): Promise<void>;
    readonly urlVariables: BrowserHistoryUrlStorage<IUrlVariables>;
    navigateHome(): void;
    get homeUrl(): URL;
    private get home();
    /**
     * TODO: !! Use this in all places
     */
    navigateBoardHome(): void;
    /**
     *  TODO: Make this save to history and check that is is working together with urlVariabiles in routingSystem
     */
    registerQuery<TValue extends IJson>(
        defaultParams: TValue,
        options?: Partial<IBrowserHistoryStorageOptions>,
    ): IObservableStorage<TValue>;
}
