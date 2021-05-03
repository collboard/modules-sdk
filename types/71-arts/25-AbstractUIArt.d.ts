
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  /// <reference types="react" />
import { string_attribute } from '../40-utils/typeAliases';
import { ISystems } from '../50-systems/00-SystemsContainer/ISystems';
import { ExtraJsxPlace } from '../50-systems/ExtraJsxSystem/0-ExtraJsxSystem';
import { AbstractArt } from './20-AbstractArt';
/**
 * AbstractUIArt  creates a category of arts that add or remove sth. to or from the UI Controlls
 * Note: This is not in the internal module because some of the Arts are so tightly connected with the core that they need to be there, not in optionally deactivateable module.
 *
 * @collboard SDK
 */
export declare abstract class AbstractUIArt extends AbstractArt {
    extraJsxPlace: ExtraJsxPlace;
    constructor(extraJsxPlace: ExtraJsxPlace);
    abstract render(systemsContainer: ISystems): JSX.Element;
    get acceptedAttributes(): string_attribute[];
}

                  