
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  /// <reference types="react" />
import { AbstractSystem } from '../AbstractSystem';
/**
 * StyleSystem can register and manage additional CSS styles for modules. It can scope CSS so it will do not affect others.
 * TODO: Maybe use it for core and systems.
 * Note: ExtraJSXSystem is for JSX (HTML) vs. StyleSystem is for CSS styles
 */
export declare class StyleSystem extends AbstractSystem {
    protected init(): Promise<void>;
    private styleForEmbedRegistration;
    private initEmbedStyle;
    private globalStyles;
    /**
     *
     * TODO: Enable object-like styles + styled components in future
     * TODO: Create scoped version of this
     */
    registerGlobalStyle(style: string): import("../../40-utils/destroyables/Registration").Registration;
    renderStyles(): JSX.Element;
    destroy(): Promise<void>;
}

                  