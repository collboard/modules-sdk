
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import { string_file_extension, string_module_name, string_uri, string_uri_part } from '../../40-utils/typeAliases';
export interface IRoutePathParams {
    uriId?: string_uri_part | null;
    extension?: string_file_extension;
    module?: string_module_name;
    modulePath?: string_uri;
    [key: string]: string | null | undefined;
}
export declare const DEFAULT_ROUTE_PATH_PARAMS: IRoutePathParams;
export declare function decodeRoutePath(path: string_uri): IRoutePathParams;
export declare function encodeRoutePath({ uriId, extension, module, modulePath }: IRoutePathParams): string_uri;

                  