// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { string_color, string_url, string_url_image } from '../typeAliases';
/**
 * @collboard-modules-sdk
 */
export declare type ITrayItem = {
    content: JSX.Element;
    defaultColor: string_color;
    filters?: ITrayItemFilter[];
};
/**
 * @collboard-modules-sdk
 */
export declare type ITrayItemList = {
    [key: string]: ITrayItem;
};
/**
 * @collboard-modules-sdk
 */
export declare type ITrayToolbarGroup = Array<{
    title: JSX.Element;
    itemIds: string[];
    scale?: number;
}>;
/**
 * @collboard-modules-sdk
 */
export declare type ITrayToolbarItems = Array<{
    name: JSX.Element;
    scale: number;
    /**
     * It can be:
     *    - relative part of the URL (to which will be prepended with ITrayDefinition.imageFolder + '/categories/' )
     *    - absolute URL
     */
    icon: string_url_image;
    items: ITrayToolbarGroup;
}>;
/**
 * @collboard-modules-sdk
 */
export declare type ITrayItemFilter = (source: JSX.Element) => JSX.Element;
/**
 * @collboard-modules-sdk
 */
export interface ITrayDefinition {
    getItems(): ITrayItemList;
    getToolbarItems(): ITrayToolbarItems;
    imageFolder?: string_url;
    className: string;
}
