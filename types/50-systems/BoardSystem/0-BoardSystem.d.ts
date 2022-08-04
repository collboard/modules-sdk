// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { AbstractSystem } from '../10-AbstractSystem/AbstractSystem';
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
    createNewBoard(options: IBoardSystem_createNewBoard_request): Promise<IBoardSystem_createNewBoard_response>;
}
