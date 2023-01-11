// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { Factorable } from '../40-utils/IFactory';
import { ISystems } from '../50-systems/00-SystemsContainer/ISystems';
import { Abstract2dArt } from './26-Abstract2dArt';
/**
 * Art which renders loading of something
 * It is usefull primarly with virtual commits:
 *  >
 *  > virtualArtVersioningSystem
    >    .createPrimaryOperation()
    >    .newArts(
    >      new LoadingArt('aaa').setShift((collSpace.pickPoint(touch.firstFrame.position)).point),
    >    )
    >    .persist();
 *
 * @collboard-modules-sdk
 */
export declare class LoadingArt extends Abstract2dArt {
    alt: Factorable<string>;
    static serializeName: string;
    static manifest: {
        name: string;
        deprecatedNames: string;
    };
    /**
     * @param alt What is loading
     */
    constructor(alt: Factorable<string>);
    get topLeft(): import('xyzt').IVectorData;
    get bottomRight(): import('xyzt').IVectorData;
    get acceptedAttributes(): never[];
    render(isSelected: boolean, systems: ISystems): Promise<JSX.Element>;
}
/**
 * TODO: @roseckyj maybe look at this and fix design flaws
 * TODO: [🍎]  Use IMaterial instead of color
 * TODO: [🍎]  Use IShape instead of weight, points,...
 * TODO: [🎚️] Implement IArt
 *
 */
