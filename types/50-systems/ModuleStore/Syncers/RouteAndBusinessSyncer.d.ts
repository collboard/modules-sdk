// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { IDestroyable } from 'destroyable';
import { BoardNotFoundError } from '../../../40-utils/errors/BoardNotFoundError';
import { ModuleNotFoundError } from '../../../40-utils/errors/ModuleNotFoundError';
import { ISyncer } from '../interfaces/ISyncer';
import { AbstractSyncer } from './AbstractSyncer';
/**
 * RouteAndBusinessSyncer installs / uninstalls modules according to the app URI
 *
 * @private
 * @collboard-system
 */
export declare class RouteAndBusinessSyncer extends AbstractSyncer implements ISyncer, IDestroyable {
    modulesStorage: import('../interfaces/IModulesStorage').IModulesStorageWithDeclare;
    private subscription;
    protected initSyncer(): Promise<void>;
    /**
     * This is for CollboardApp when it not found current board
     */
    triggerErrorForBoard(error: BoardNotFoundError): Promise<void>;
    /**
     * This is for CollboardApp when it not found current board
     */
    triggerErrorForModule(error: ModuleNotFoundError): Promise<void>;
    destroy(): Promise<void>;
}
