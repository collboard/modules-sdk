// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/**
 * UserInterfaceElementPlace enum lists possible places for an element to be placed.
 *
 * @collboard-modules-sdk
 */
export declare enum UserInterfaceElementPlace {
    /**
     * Root component `<div id="collboard-app">` is a parent of everything
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
     * The top edge of screen
     * - growing left to right
     * - aligned to top
     * - inside of social toolbar
     *
     * @collboard-modules-sdk
     */
    Social = 'SOCIAL',
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
/**
 * TODO: [👩‍👩‍👦] Make some way how every ToolbarName can be used as UserInterfaceElementPlace (for example SOCIAL)
 */
