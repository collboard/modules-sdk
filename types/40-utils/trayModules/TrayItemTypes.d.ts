// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
/**
 * @collboard-modules-sdk
 */
export declare type ITrayItem = {
    content: JSX.Element;
    defaultColor: string;
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
    icon: string;
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
    imageFolder: string;
    className: string;
}
