// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { IMessage } from '../../../50-systems/TranslationsSystem/interfaces/IMessage';
import { Factorable } from '../../IFactory';
import { string_color, string_url, string_url_image } from '../../typeAliases';
/**
 * @collboard-modules-sdk
 */
export type ITrayDynamicItem = {
    content: JSX.Element;
    defaultColor: string_color;
    filters?: Array<ITrayDynamicItemFilter>;
};
/**
 * @collboard-modules-sdk
 */
export type ITrayDynamicItemList = {
    [key: string]: ITrayDynamicItem;
};
/**
 * @collboard-modules-sdk
 */
export type ITrayDynamicToolbarGroup = Array<{
    title: IMessage;
    itemIds: Array<string>;
    scale?: number;
}>;
/**
 * @collboard-modules-sdk
 */
export type ITrayDynamicToolbarItems = Array<{
    title: IMessage;
    scale: number;
    /**
     * It can be:
     *    - relative part of the URL (to which will be prepended with ITrayDynamicDefinition.imageFolder + '/categories/' )
     *    - absolute URL
     */
    icon: string_url_image;
    items: ITrayDynamicToolbarGroup;
}>;
/**
 * @collboard-modules-sdk
 */
export type ITrayDynamicItemFilter = (source: JSX.Element) => JSX.Element;
/**
 * @collboard-modules-sdk
 */
export interface ITrayDynamicDefinition {
    getItems: Factorable<ITrayDynamicItemList>;
    getToolbarItems: Factorable<ITrayDynamicToolbarItems>;
    imageFolder?: string_url;
    className?: string;
}
/**
 * TODO: @roseckyj please decide which entities should be exported to @collboard-modules-sdk
 * TODO: @roseckyj please write descriptions to all entities (classes, functions, interfaces, types,...)
 */
