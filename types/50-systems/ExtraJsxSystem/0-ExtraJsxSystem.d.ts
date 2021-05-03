
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  /// <reference types="react" />
import { AbstractSystem } from '../AbstractSystem';
/**
 * TODO: Describe
 * TODO: Unite naming ToolbarName vs. ExtraJsxPlace
 *
 * @collboard SDK
 */
export declare enum ExtraJsxPlace {
    RootComponent = "RootComponent",
    BoardComponent = "BoardComponent",
    EdgeBottom = "EdgeBottom",
    EdgeTop = "EdgeTop",
    EdgeRight = "EdgeRight",
    ModalHeader = "ModalHeader"
}
/**
 * ExtraJsxSystem can register and manage additional JSX
 * Note: ExtraJSXSystem is for JSX (HTML) vs. StyleSystem is for CSS styles
 * TODO: Globally better name then extraJsx
 */
export declare class ExtraJsxSystem extends AbstractSystem {
    private extraJsx;
    protected init(): Promise<void>;
    /**
     * TODO: Options
     * TODO: !!! Rename to registerExtraJsx but before find better name to ExtraJsx
     */
    register(place: ExtraJsxPlace, order: number, jsx: JSX.Element): import("../../40-utils/destroyables/Registration").Registration;
    render(place: ExtraJsxPlace): JSX.Element;
    private getPlaceStorage;
}

                  