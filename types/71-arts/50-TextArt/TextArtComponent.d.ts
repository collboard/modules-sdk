// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { IAppearance } from '../../50-systems/CollSpace/appearance/IAppearance';
import { AbstractArt } from '../20-AbstractArt';
import { IListStyle } from './interfaces/IListStyle';
import { TextArt } from './TextArt';
interface IArtComponentProps<TArt extends AbstractArt, TShape extends object> {
    art: TArt;
    appearance: IAppearance;
    shape: TShape;
}
interface ITextArtShape {
    content: string;
    fontSize: number;
    bold: boolean;
    italic: boolean;
    underline: boolean;
    listStyle: IListStyle;
}
/**
 * This is internal (how it looks like without transform) component that is used to render TextArt
 */
export declare function TextArtComponent({
    art,
    appearance,
    shape: { content, fontSize, bold, italic, underline, listStyle },
}: IArtComponentProps<TextArt, ITextArtShape>): JSX.Element;
export { };
/**
 * TODO: [🍣]  Sanitize dangerous things - Allow only text with <p>
 * TODO: [🍣]  This was changed from EditableTextContent to EditableHtmlContent - ensure backward compatibility (Maybe add migrations)
 * TODO: Make Full HTML Equivalent
 * TODO: Allow to toggle <b>, <i>, <ul>,... inside HTML
 * TODO: Make option to make <ul>, <ol>, todo lists, emoji bulletes,...
 * TODO: Multiple people editing one text
 *       Now when there are two people editing same text and both have focus
 *       When Alice changes something Bob is still focused but gets his cursor at the end
 *       It works same when there is not only car|et but multiple sel███ed chars
 *       Ideally it should work simmilar to Google drive
 */
