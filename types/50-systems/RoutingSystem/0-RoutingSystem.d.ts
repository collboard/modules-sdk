
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { BrowserHistoryPathStorage, IBrowserHistoryStorageOptions, IJson, IObservableStorage } from 'everstorage';
import { string_uri_part, string_url } from '../../40-utils/typeAliases';
import { AbstractSystem } from '../AbstractSystem';
import { IRoutePathParams } from './routePath';
/**
 * TODO: Make some pattern how to manage theese singletons
 */
export declare let routingSystem: RoutingSystem;
/**
 * RoutingSystem provides for core, other systems and modules registration of routes and hashtag routes.
 * @see https://github.com/collboard/collboard/issues/97
 * TODO: What about #hash routes
 */
export declare class RoutingSystem extends AbstractSystem {
    viewUriId: string_uri_part | null;
    protected init(): Promise<void>;
    readonly path: BrowserHistoryPathStorage<IRoutePathParams>;
    navigateHome(): IRoutePathParams;
    /**
     * TODO: !! Use this in all places
     */
    navigateBoardHome(): void;
    registerQuery<TValue extends IJson>(defaultParams: TValue, options?: Partial<IBrowserHistoryStorageOptions>): IObservableStorage<TValue>;
    SELF_URL: string_url;
}

                  