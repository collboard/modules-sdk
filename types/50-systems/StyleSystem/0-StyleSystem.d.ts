// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import React from 'react';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { AbstractSystem } from '../10-AbstractSystem/AbstractSystem';
import { ISkin } from './ISkin';
import { ColorScheme } from './utils/watchPreferedColorScheme';
/**
 * StyleSystem can register and manage additional CSS styles for modules. It can scope CSS so it will do not affect others.
 *
 * Note: UserInterfaceSystem is for JSX (HTML) vs. StyleSystem is for CSS styles
 *
 * @collboard-system
 */
export declare class StyleSystem extends AbstractSystem {
    protected init(): Promise<void>;
    private styleForEmbedRegistration;
    private initEmbedStyle;
    private readonly globalStyles;
    /**
     *
     * TODO: Enable object-like styles + styled components in future
     * TODO: Create scoped version of this
     */
    registerGlobalStyle(style: string): import('destroyable').Registration;
    renderStyles(): JSX.Element;
    colorScheme: BehaviorSubject<ColorScheme>;
    readonly skin: ReplaySubject<ISkin>;
    /**
     * Renders content with the current skin
     */
    readonly WithSkin: ({ content }: { content: (skin: ISkin) => JSX.Element }) => JSX.Element;
    /**
     * Creates context for providing skin
     *
     * You want to probbably use WithSkin
     * Use always and only for wrapping content in ReactDOM.render(<styleSystem.WithSkinContext>...</styleSystem.WithSkinContext>)
     */
    readonly WithSkinContext: ({ children }: React.PropsWithChildren<{}>) => JSX.Element;
    private _WithSkin;
    private _WithSkinContext;
    private skins;
    registerSkin({ skin }: { skin: ISkin; priority?: number }): import('destroyable').Registration;
    destroy(): Promise<void>;
}
/**
 * TODO: Probably allow to hotreload skin
 * TODO: Probably use it for core and systems.
 */
