
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  /// <reference types="react" />
export declare type ITrayItem = {
    content: JSX.Element;
    defaultColor: string;
    filters?: ITrayItemFilter[];
};
export declare type ITrayItemList = {
    [key: string]: ITrayItem;
};
export declare type ITrayToolbarGroup = Array<{
    title: string;
    itemIds: string[];
    scale?: number;
}>;
export declare type ITrayToolbarItems = Array<{
    name: string;
    scale: number;
    icon: string;
    items: ITrayToolbarGroup;
}>;
export declare type ITrayItemFilter = (source: JSX.Element) => JSX.Element;
export interface ITrayDefinition {
    getItems(): ITrayItemList;
    getToolbarItems(): ITrayToolbarItems;
    imageFolder: string;
    className: string;
}

                  