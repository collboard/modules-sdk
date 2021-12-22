// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

/// <reference types="react" />
import { AbstractSystem } from '../AbstractSystem';
/**
 * ExtraJsxPlace enum lists possible places for an ExtraJSX object to be placed.
 *
 * @collboard-modules-sdk
 */
export declare enum ExtraJsxPlace {
    /**
     * Root component `<div id="root">` is a parent of everything
     * within Collboard app
     *
     * @collboard-modules-sdk
     */
    RootComponent = 'ROOT_COMPONENT',
    /**
     * Board component `<div class="board-container">` is a parent of
     * everything rendered on the whiteboard canvas.
     *
     * It does not contain menus and other fixed components,
     * however the positioning is still relative to screen (not canvas).
     *
     * @collboard-modules-sdk
     */
    BoardComponent = 'BOARD_COMPONENT',
    /**
     * The bottom edge of screen
     * - growing left to right
     * - aligned to bottom
     *
     * @collboard-modules-sdk
     */
    EdgeBottom = 'EDGE_BOTTOM',
    /**
     * The top edge of screen
     * - growing left to right
     * - aligned to top
     *
     * @collboard-modules-sdk
     */
    EdgeTop = 'EDGE_TOP',
    /**
     * The right edge of screen
     * - growing top to bottom
     * - aligned to right
     *
     * @collboard-modules-sdk
     */
    EdgeRight = 'EDGE_RIGHT',
    /**
     * Rendering in some modals
     *
     * @deprecated
     * @collboard-modules-sdk
     */
    ModalHeader = 'MODAL_HEADER',
    /**
     * Welcome modal inside
     *
     * @collboard-modules-sdk
     */
    WelcomeModal = 'WELCOME_MODAL',
    /**
     * Welcome modal edge
     *
     * @collboard-modules-sdk
     */
    WelcomeModalAdjacent = 'WELCOME_MODAL_ADJACENT',
}
interface IExtraJsxItem {
    place: ExtraJsxPlace;
    jsx: JSX.Element;
    order?: number;
}
/**
 * ExtraJsxSystem can register and manage additional JSX
 * Note: ExtraJSXSystem is for JSX (HTML) vs. StyleSystem is for CSS styles
 * TODO: Globally better name then extraJsx
 *
 * @collboard-system
 */
export declare class ExtraJsxSystem extends AbstractSystem {
    private extraJsx;
    protected init(): Promise<void>;
    /**
     * TODO: Options
     * TODO: !! Rename to registerExtraJsx but before find better name to ExtraJsx
     */
    register({ place, order, jsx }: IExtraJsxItem): import('destroyable').Registration;
    render(place: ExtraJsxPlace): JSX.Element;
    private getPlaceStorage;
}
export {};
