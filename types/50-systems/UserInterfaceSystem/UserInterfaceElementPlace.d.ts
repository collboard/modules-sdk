// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/**
 * UserInterfaceElementPlace enum lists possible places for an element to be placed.
 *
 * @deprecated [🍿] Do not use enums but object as const OR 'LITERAL VALUES' instead
 *
 * @collboard-modules-sdk
 */
export declare enum UserInterfaceElementPlace {
    /**
     * Root component `<div id="collboard-app">` is a parent of everything
     * within Collboard app
     */
    RootComponent = 'ROOT_COMPONENT',
    /**
     * Same as RootComponent but redered only in welcome view
     */
    RootComponentForWelcome = 'ROOT_COMPONENT_FOR_WELCOME',
    /**
     * Same as RootComponent but redered only in board view
     */
    RootComponentForBoard = 'ROOT_COMPONENT_FOR_BOARD',
    /**
     * The bottom edge of screen
     * - growing left to right
     * - aligned to bottom
     */
    EdgeBottom = 'EDGE_BOTTOM',
    /**
     * The top edge of screen
     * - growing left to right
     * - aligned to top
     */
    EdgeTop = 'EDGE_TOP',
    /**
     * The top edge of screen
     * - growing left to right
     * - aligned to top
     * - inside of social toolbar
     */
    Social = 'SOCIAL',
    /**
     * The right edge of screen
     * - growing top to bottom
     * - aligned to right
     */
    EdgeRight = 'EDGE_RIGHT',
    /**
     * Rendering in some modals
     *
     * @deprecated This is unused and will be removed
     */
    ModalHeader = 'MODAL_HEADER',
    /**
     * Welcome modal inside
     */
    WelcomeModal = 'WELCOME_MODAL',
    /**
     * Welcome modal edge
     */
    WelcomeModalAdjacent = 'WELCOME_MODAL_ADJACENT',
    /**
     * Board component `<div class="board-container">` is a parent of
     * everything rendered on the whiteboard canvas.
     *
     * It does not contain menus and other fixed components,
     * however the positioning is still relative to screen (not canvas).
     *
     * Note: BoardComponent is rendered only on the board view NOT welcome view
     *
     * @deprecated This is unused and will be removed
     */
    BoardComponent = 'BOARD_COMPONENT',
}
/**
 * TODO: [👩‍👩‍👦] (Probbably not) Make some way how every ToolbarName can be used as UserInterfaceElementPlace (for example SOCIAL)
 */
