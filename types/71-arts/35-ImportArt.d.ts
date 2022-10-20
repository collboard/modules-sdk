// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { IVectorData } from 'xyzt';
import { string_url } from '../40-utils/typeAliases';
import { Abstract2dArt } from './26-Abstract2dArt';
/**
 * Strategy for importing external data
 *
 * @deprecated use isMaterialized instead
 */
export declare enum ImportStrategy {
    /**
     * Importing data will be linked
     */
    Link = 'LINK',
    /**
     * Importing data will be inlined
     */
    Materialize = 'MATERIALIZE',
}
/**
 * ImportArt is art for importing external content into the board.
 * @see ExportArt implementation and comments before looking at this
 *
 * @deprecated This functionality is unused
 * @collboard-modules-sdk
 */
export declare class ImportArt extends Abstract2dArt {
    source: string_url;
    strategy: ImportStrategy;
    static serializeName: string;
    static manifest: {
        name: string;
    };
    /**
     *
     * @param source  should be pointed to URL compatible with ExportArt='NATIVE'
     * @param strategy should be import live-linked or just isDestroyed and converted to copyied objects?
     */
    constructor(source: string_url, strategy: ImportStrategy);
    get topLeft(): IVectorData;
    get bottomRight(): IVectorData;
    isNear(pointToTest: IVectorData): boolean;
    get acceptedAttributes(): never[];
    render(isSelected: boolean): JSX.Element;
}
/**
 * TODO: [🎚️] Implement IArt
 */
