// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { AbstractArt } from '../20-AbstractArt';
import { string_color } from './../../40-utils/typeAliases';
import { IListStyle } from './interfaces/IListStyle';
import { TextArt } from './TextArt';
interface IArtComponentProps<
    TArt extends AbstractArt,
    TShape extends object,
    TMaterial extends IArtMaterial = IArtMaterial,
> {
    art: TArt;
    material: TMaterial;
    shape: TShape;
}
interface IArtMaterial {
    color: string_color;
}
interface ITextArtShape {
    content: string;
    fontSize: number;
    bold: boolean;
    italic: boolean;
    underline: boolean;
    listStyle: IListStyle;
}
export declare function TextArtComponent({
    art,
    material: { color },
    shape: { content, fontSize, bold, italic, underline, listStyle },
}: IArtComponentProps<TextArt, ITextArtShape>): JSX.Element;
export {};
/**
 * TODO: Warning: A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.
 * TODO: [🍣] Weirdness in text editing when removed last character
 * TODO: [🍣] Weirdness in text editing when making new line
 * TODO: [🍣] Weird behaviour when multiple TextArts are selected
 */
