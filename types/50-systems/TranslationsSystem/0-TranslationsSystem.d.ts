// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import 'moment/locale/cs';
import 'moment/locale/sk';
import * as React from 'react';
import { Observable } from 'rxjs';
import { IReplacer } from '../../40-utils/applyParamsOnTemplate';
import { ISystemsExtended } from '../00-SystemsContainer/ISystems';
import { AbstractSystem } from '../AbstractSystem';
import { ITranslateMessage } from './ITranslateMessage';
/**
 * Semantic helper; For example "SHARE_ICON/EDIT_LINK"
 */
export declare type string_translate_name = string;
/**
 * Semantic helper; For example "ShareIcon/ edit link"
 */
export declare type string_translate_name_not_normalized = string;
/**
 * Semantic helper; For example "cs" or "en"
 *
 * TODO: Maybe use enum
 * TODO: Rename - remove string_ prefix like ITranslateLanguageCode
 */
export declare type string_translate_language = 'en' | 'cs' | 'sk';
export interface ITranslationMessages {
    [key: string]: string;
}
/**
 * TranslationsSystem manages messages across core, systems and modules.
 *
 * @collboard-system
 *
 */
export declare class TranslationsSystem extends AbstractSystem {
    private translateMessagesRecord;
    readonly missingTranslateMessages: Observable<ITranslateMessage>;
    private missingTranslateMessagesObserver?;
    private _language;
    ready: Promise<void>;
    private readyResolve;
    constructor(systems: ISystemsExtended);
    protected init(): Promise<void>;
    get translateMessages(): ITranslateMessage[];
    get language(): string_translate_language;
    set language(language: string_translate_language);
    pushMessages(...translateMessages: ITranslateMessage[]): void;
    private missingTranslation;
    translate(
        nameNN: string_translate_name_not_normalized,
        note?: string,
        parameters?: {
            [key: string]: string;
        },
    ): string;
    readonly replacer: IReplacer;
    readonly Translate: (
        props: React.PropsWithChildren<{
            name: string_translate_name_not_normalized;
            html?: boolean;
            parameters?: any;
        }>,
    ) => JSX.Element;
    private _Translate;
    useTemplate(html: string): string;
    pickMessage(messageTranslation: string | Partial<Record<string_translate_language, string>>): string;
    pickMessageJsx(
        messageTranslation: string | JSX.Element | Partial<Record<string_translate_language, string | JSX.Element>>,
    ): JSX.Element;
    private get preferedLanguages();
    private get secondaryLanguage();
    showDateAndTime(date: Date | string): string;
}
