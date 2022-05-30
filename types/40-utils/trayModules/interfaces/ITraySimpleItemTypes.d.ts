// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IMessage } from '../../../50-systems/TranslationsSystem/interfaces/IMessage';
import { string_url, string_url_image } from '../../typeAliases';
/**
 * Definition of the tray
 *
 * @collboard-modules-sdk
 */
export declare type ITraySimpleDefinition = ITraySimpleTab[];
/**
 * Definition of one tab in the tray
 */
interface ITraySimpleTab {
    title: IMessage;
    icon: string_url_image;
    /**
     * Scale of image group
     * @default 0.6
     */
    scale?: number;
    groups: ITraySimpleTabGroup[];
}
/**
 * Definition of one group of items in the tray tab
 */
interface ITraySimpleTabGroup {
    title: IMessage;
    items: ITraySimpleTabGroupItem[];
}
/**
 * Definition of one item in the tray
 */
interface ITraySimpleTabGroupItem {
    title?: IMessage;
    /**
     * Image for preview and if artSrc is missing for the item
     */
    imageSrc: string_url_image;
    /**
     * This should lead to source for file which will be impoted when user drags the item to the board
     * If not set then the item will be considered as an image and imageSrc will be used
     */
    artSrc?: string_url;
}
export {};
/**
 * TODO: Allow more types of ITraySimpleTabGroupItem.artSrc like artData, art and artSrc: URL
 */
