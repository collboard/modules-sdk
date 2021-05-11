// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

/// <reference types="react" />
import { IVector } from 'xyzt';
import { string_module_name } from '../40-utils/typeAliases';
import { Abstract2dArt } from './26-Abstract2dArt';
/**
 * TODO: description
 * Note: This is not in the internal module because some of the Arts are so tightly connected with the core that they need to be there, not in optionally deactivateable module.
 * TODO: Probbably we can rename it into shorter name like CtoneArt @roseckyj what do you think
 *
 * @collboard-modules-sdk
 */
export declare class CornerstoneArt extends Abstract2dArt {
    boardName: string;
    get topLeftCorner(): import('xyzt').IVectorObject;
    get bottomRightCorner(): import('xyzt').IVectorObject;
    isNear(point2: IVector): boolean;
    get acceptedAttributes(): never[];
    render(selected: boolean): JSX.Element;
    modulesActive?: string_module_name[];
    modulesInactive?: string_module_name[];
    private moduleRemoveFromActivateAndDeactivateList;
    moduleActivate(moduleName: string_module_name): void;
    moduleDeactivate(moduleName: string_module_name): void;
}
/**
 * virtualCornerstoneArt is "fake" corner stone for yet non existing boards
 */
export declare const virtualCornerstoneArt: CornerstoneArt;
/**
 * Note: number is just a file prefix to feep it on the top of file list.
 */
