// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { ITrayDynamicItemList } from '../../../../40-utils/trayModules/interfaces/ITrayDynamicItemTypes';
export declare function arrow(x1: number, y1: number, x2: number, y2: number, key?: number | string): JSX.Element;
export declare function mapArray(
    object: {
        [key: string]: JSX.Element;
    },
    color: string,
    prefix?: string,
    contentWrapper?: (value: JSX.Element) => JSX.Element,
): ITrayDynamicItemList;
export declare function hideBorderContentWrapper(value: JSX.Element): JSX.Element;
