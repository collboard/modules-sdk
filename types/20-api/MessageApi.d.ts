// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_module_name, string_uriid, string_url, string_uuid } from '../40-utils/typeAliases';
import { Arrayable } from '../40-utils/typeHelpers';
/**
 * This documentates interface between Collboard and other apps.
 *
 * @collboard-modules-sdk
 */
export declare namespace MessageApi {
    export interface Init {
        type: 'INIT';
    }
    interface AbstractMessage {
        id?: string_uuid | string;
    }
    interface AbstractRequest extends AbstractMessage {
        type: string;
    }
    interface AbstractResponse extends AbstractMessage {}
    /**
     * Just for testing that message channel is working.
     */
    export namespace TestEcho {
        interface Request extends AbstractRequest {
            type: 'TEST_ECHO';
            /**
             * Any string message you want to echo back.
             */
            message: string;
        }
        interface Response extends AbstractResponse {
            type: 'TEST_ECHO_RESPONSE';
            /**
             * Echoed message.
             */
            message: string;
        }
    }
    /**
     * Create a new board.
     */
    export namespace CreateBoard {
        /**
         * Create a new board.
         */
        interface Request extends AbstractRequest {
            type: 'CREATE_BOARD';
            /**
             * Name of the board.
             */
            boardname?: string;
            /**
             * If set, the board will not be empty but from given template.
             */
            import?: string_url;
            /**
             * If set, following modules will be enabled on the board.
             */
            modulesOn?: Arrayable<string_module_name>;
            /**
             * If set, following default modules will be disabled on the board.
             */
            modulesOff?: Arrayable<string_module_name>;
        }
        /**
         * Information about newly created board.
         */
        interface Response extends AbstractResponse {
            type: 'CREATE_BOARD_RESPONSE';
            uriId: string_uriid;
            links: {
                edit: string_url;
                view: string_url;
            };
        }
    }
    export type Request = TestEcho.Request | CreateBoard.Request;
    export {};
}
/**
 * TODO: Should CREATE_BOARD also go to the created board
 * TODO: Probably do via JSON schema OR Dynamically convert to JSON schema?
 * TODO: Better name for modules on/off
 * TODO: Passing of clientId?
 * TODO: Use this for sockets and REST API
 * TODO:  [👢] Option for custom uriId CreateBoard
 * TODO: Is there some recommended way how to structure postMessages. For example React dev tool do it like [1]
 */
