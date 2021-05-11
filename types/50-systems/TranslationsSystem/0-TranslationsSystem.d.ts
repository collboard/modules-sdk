// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import 'moment/locale/cs';
import 'moment/locale/sk';
import * as React from 'react';
import { Observable } from 'rxjs';
import { IReplacer } from '../../40-utils/applyParamsOnTemplate';
import { ISystems } from '../00-SystemsContainer/ISystems';
import { AbstractSystem } from '../AbstractSystem';
import { ITranslateMessage } from './ITranslateMessage';
/**
 * Semantic helper; For example "SHARE_ICON/EDIT_LINK"
 */
export declare type string_tranlate_name = string;
/**
 * Semantic helper; For example "ShareIcon/ edit link"
 */
export declare type string_tranlate_name_not_normalized = string;
/**
 * Semantic helper; For example "cs" or "en"
 */
export declare type string_tranlate_language = string;
export interface ITranslationMessages {
    [key: string]: string;
}
/**
 * TranslationsSystem manages messages across core, systems and modules.
 *
 * @collboard-system
 */
export declare class TranslationsSystem extends AbstractSystem {
    private translateMessagesRecord;
    readonly missingTranslateMessages: Observable<ITranslateMessage>;
    private missingTranslateMessagesObserver?;
    private _language;
    constructor(systemsContainer: ISystems);
    protected init(): Promise<void>;
    get translateMessages(): ITranslateMessage[];
    get language(): string_tranlate_language;
    set language(language: string_tranlate_language);
    push(...translateMessages: ITranslateMessage[]): void;
    private missingTranslation;
    translate(
        nameNN: string_tranlate_name_not_normalized,
        note?: string,
        parameters?: {
            [key: string]: string;
        },
    ): string;
    replacer: IReplacer;
    Translate(
        props: React.PropsWithChildren<{
            name: string_tranlate_name_not_normalized;
            html?: boolean;
            parameters?: any;
        }>,
    ): JSX.Element;
    useTemplate(html: string): string;
    pickMessage(messageTranslation: string | Record<string_tranlate_language, string>): string;
    private get preferedLanguages();
    private get secondaryLanguage();
    showDateAndTime(date: Date | string): string;
}
