// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { NOT_CONSTRUCTABLE } from '../../../40-utils/IFactory';
import { ITrayItemList, ITrayToolbarItems } from '../../../40-utils/trayModules/TrayItemTypes';
export declare class HeduItemsGenerator {
    static readonly [NOT_CONSTRUCTABLE] = true;
    private constructor();
    static privateItems: ITrayItemList;
    static privateToolbar: ITrayToolbarItems;
    static items(): ITrayItemList;
    static toolbar(): ITrayToolbarItems;
    private static createItems;
    private static createToolbar;
}
