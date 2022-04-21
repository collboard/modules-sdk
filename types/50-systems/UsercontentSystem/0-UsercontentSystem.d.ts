// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { string_url } from '../../40-utils/typeAliases';
import { ISystemsExtended } from '../00-SystemsContainer/ISystems';
import { AbstractSystem } from '../AbstractSystem';
/**
 * UsercontentSystem provides API to upload user content to the server.
 *
 * @collboard-system
 */
export declare class UsercontentSystem extends AbstractSystem {
    private usercontentUrl;
    constructor(systems: ISystemsExtended, usercontentUrl: URL);
    protected init(): Promise<void>;
    upload(file: File): Promise<string_url>;
}
