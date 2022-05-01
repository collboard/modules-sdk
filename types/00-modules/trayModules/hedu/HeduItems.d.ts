// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { NOT_CONSTRUCTABLE } from '../../../40-utils/IFactory';
import {
    ITrayDynamicItemList,
    ITrayDynamicToolbarItems,
} from '../../../40-utils/trayModules/interfaces/ITrayDynamicItemTypes';
export declare class HeduItemsGenerator {
    static readonly [NOT_CONSTRUCTABLE] = true;
    private constructor();
    static privateItems: ITrayDynamicItemList;
    static privateToolbar: ITrayDynamicToolbarItems;
    static items(): ITrayDynamicItemList;
    static toolbar(): ITrayDynamicToolbarItems;
    private static createItems;
    private static createToolbar;
}
