// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

/// <reference types="react" />
import { ITrayItemList } from '../../../../40-utils/trayModules/TrayItemTypes';
export declare function arrow(x1: number, y1: number, x2: number, y2: number, key?: number | string): JSX.Element;
export declare function mapArray(
    object: {
        [key: string]: JSX.Element;
    },
    color: string,
    prefix?: string,
    contentWrapper?: (value: JSX.Element) => JSX.Element,
): ITrayItemList;
export declare function hideBorderContentWrapper(value: JSX.Element): JSX.Element;
