// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { Promisable } from 'type-fest';
import { Transform } from 'xyzt';
import { ISystems } from '../00-SystemsContainer/ISystems';
import { string_uuid } from './../../40-utils/typeAliases';
import { IAppearance } from './appearance/IAppearance';
/**
 * Art is a an object on the shared board
 * This interface defines basic requirements of the art
 *
 * Note: Arts that implements this are compliant with new art and attribute system
 *
 * @collboard-modules-sdk
 */
export interface IArt<TShape, TAppearance extends IAppearance = IAppearance> {
    /**
     * Unique identifier of the art
     * - If there is one art which is changed by user, the id is kept unchanged
     * - When you make a copy or export+import the art, new id will be generated
     */
    readonly artId: string_uuid;
    /**
     * Transform of the art relative to origin of the board
     * It means position, rotation and scale of the art
     */
    transform: Transform;
    /**
     * How the art looks inside without the colors and textures
     * This will be different for each art Class
     */
    shape: TShape;
    /**
     * What colors and textures are applied to the art
     */
    appearance: TAppearance;
    /**
     * Renders the art
     *
     * Note: This can be called many times a second when user is scrolling or not at all when art is out of screen so do not do a heavy stuff here
     *
     * @param isSelected indicates, whether given art is currently within
     * user selection
     * @param systems contains all systems, which can be used
     * @returns JSX.Element which can be in Promise
     *          This render should contain:
     *             - Root element must be <ArtShell> which has prop of **transform**
     *             - **material** and **shape** should be included
     *             - When you are rendering the **material** you can use utils like **textureToSvg**
     *
     *
     */
    render(isSelected: boolean, systems: ISystems): Promisable<JSX.Element>;
}
/**
 * TODO: [🐁] Constrain the constructor interface to be same on every IArt
 * TODO: Probbably some equivalent for acceptedAttributes - maybe transform+shape+appearance is already enough
 * TODO: Maybe IArt should contain boundingBox property
 * TODO: [👨‍⚖️] Probbably allow to extend Appearance (similar to extending Shape)
 * TODO: Add more things from AbstractArts like
 *       - BoundingBox (isNear)
 *       - transform (shift, move, setShift)
 *
 * TODO: Ordering of transform, shape, appearance
 *       - shape, appearance, transform
 *
 * TODO: On render method:
 *       - Maybe do not use render method but ArtComponent
 *       - Maybe remove isSelected and systems which both can be provided via hooks
 */