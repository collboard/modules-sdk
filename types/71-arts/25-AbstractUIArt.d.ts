// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

/// <reference types="react" />
import { ISystemsExtended } from '../50-systems/00-SystemsContainer/ISystems';
import { ExtraJsxPlace } from '../50-systems/ExtraJsxSystem/0-ExtraJsxSystem';
import { AbstractArt } from './20-AbstractArt';
/**
 * AbstractUIArt is an abstract class providing functionality regarding
 * adding or removing components from UI
 *
 * @summary AbstractUIArt is not implemented within the system yet
 *
 * @collboard-modules-sdk
 */
export declare abstract class AbstractUIArt extends AbstractArt {
    extraJsxPlace: ExtraJsxPlace;
    constructor(extraJsxPlace: ExtraJsxPlace);
    abstract render(systems: ISystemsExtended): JSX.Element;
}
