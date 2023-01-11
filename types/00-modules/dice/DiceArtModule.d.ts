// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { IVectorData, Vector } from 'xyzt';
import { Abstract2dArt } from '../../71-arts/26-Abstract2dArt';
export declare class DiceArt extends Abstract2dArt {
    sides: number;
    static serializeName: string;
    static manifest: {
        name: string;
        deprecatedNames: string;
    };
    value: number;
    rotation: number;
    /**
     * @deprecated [🍈] name privateSize is confusing, use something instead like size (=privateSize) vs. originalSize
     */
    private privateSize;
    constructor(shift: IVectorData, sides: number);
    random(): number;
    roll(): void;
    set diceControls(operation: number);
    get diceControls(): number;
    set diceSides(sides: number);
    get diceSides(): number;
    get acceptedAttributes(): string[];
    get topLeft(): IVectorData;
    get bottomRight(): Vector;
    private renderDots;
    render(): JSX.Element;
}
