// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { Promisable } from 'type-fest';
import { IVectorData } from 'xyzt';
import { ISystemsExtended } from '../50-systems/00-SystemsContainer/ISystems';
import { AbstractPlacedArt } from './25-AbstractPlacedArt';
/**
 * Abstract2dArt is an abstract class which all arts rendered in 2D extend.
 *
 * @collboard-modules-sdk
 */
export declare abstract class Abstract2dArt extends AbstractPlacedArt {
    /**
     * Getter for getting element size.
     *
     * Needs to be overridden if art has `"size"` among `AcceptedAttributes`
     *
     * *Note: This will be removed in the future*
     */
    get size(): IVectorData;
    /**
     * Getter for changing element size.
     *
     * Needs to be overridden if art has `"size"` among `AcceptedAttributes`
     *
     * *Note: This will be removed in the future*
     */
    set size(size: IVectorData);
    /**
     * Object rotation
     *
     * *Note: This will be replaced with 3D rotiation in `AbstractPlacedArt`*
     */
    rotation: number;
    /**
     * Function called when object needs to be rendered on screen
     *
     * @param selected indicates, whether given art is currently within
     * user selection
     * @param systemsContainer contains all systems, which can be used
     * within rendering
     *
     * *Note: This can be called many times a second when user is scrolling
     * or not at all when art is out of screen*
     */
    abstract render(selected: boolean, systems: ISystemsExtended): Promisable<JSX.Element>;
    /**
     * Default z-index of art
     *
     * Needs to be between 1-9 (including), otherwise it can lead to
     * undefined behavior.
     *
     * When locked, decreases by one.
     *
     * *Note: This will be replaced with proper object ordering in the
     * near future, however it is highly suggested to override use property
     * until then.*
     */
    defaultZIndex: number;
}
