// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { BehaviorSubject } from 'rxjs';
import { AbstractSystem } from '../10-AbstractSystem/AbstractSystem';
import { string_uriid } from './../../40-utils/typeAliases';
import {
    IBoardSystem,
    IBoardSystem_createNewBoard_request,
    IBoardSystem_createNewBoard_response,
} from './interfaces/0-IBoardSystem';
/**
 * ApiClient provides API calls to the remote server.
 *
 * @collboard-system
 */
export declare class BoardSystem extends AbstractSystem implements IBoardSystem {
    protected init(): Promise<void>;
    /**
     * Current board with information if this board is fully loaded or in phase of switching the boards
     */
    currentBoard: BehaviorSubject<{
        uriId: string_uriid | null;
        isLoaded: boolean;
    }>;
    private switchBoardQueue;
    /**
     * Navigate to the board
     *
     * @param uriId string to navigate to board OR null to go to welcome page
     * @returns A Promise which will be resolved when the board is fully navigated
     */
    navigateBoard(uriId: string_uriid | null): Promise<void>;
    /**
     * Creates a new board and navigate to it
     *
     * @param options for creating the new board
     * @returns information of the newly created board
     *          A Promise which will be resolved when the board is created and fully navigated
     */
    createNewBoard(options: IBoardSystem_createNewBoard_request): Promise<IBoardSystem_createNewBoard_response>;
}
/**
 * TODO: [🐙] What to do on Error for currentBoard - should be this state considered as non-loaded?
 * TODO: [☔️] It does not make sense to create a new board without navigating it
 * TODO: [🌵] Choose between boardSystem.navigateBoard(null) VS routingSystem.navigateBoardHome()
 */
