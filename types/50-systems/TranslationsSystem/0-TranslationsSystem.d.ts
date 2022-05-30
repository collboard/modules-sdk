// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import 'moment/locale/cs';
import 'moment/locale/sk';
import React from 'react';
import { Observable } from 'rxjs';
import { IReplacer } from '../../40-utils/applyParamsOnTemplate';
import { string_translate_language, string_translate_name_not_normalized } from '../../40-utils/typeAliases';
import { ISystemsExtended } from '../00-SystemsContainer/ISystems';
import { AbstractSystem } from '../AbstractSystem';
import { IMessage } from './interfaces/IMessage';
import { ITranslateMessage } from './interfaces/ITranslateMessage';
import { ITranslateMessagePicker } from './interfaces/ITranslateMessagePicker';
export interface ITranslationMessages {
    [key: string]: string;
}
/**
 * TranslationsSystem manages messages across core, systems and modules.
 *
 * @collboard-system
 *
 */
export declare class TranslationsSystem extends AbstractSystem implements ITranslateMessagePicker {
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
    /**
     * Translate message
     *
     * Note: Prefer to use component <Translate... because component can be updated during a livetime of the page
     */
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
    /**
     * Creates context for providing translator
     *
     * You want to probbably use <Translate...
     * Use always and only for wrpaiing content in ReactDOM.render(<translationsSystem.WithTranslateContext>...</translationsSystem.WithTranslateContext>)
     */
    readonly WithTranslateContext: ({ children }: React.PropsWithChildren<{}>) => JSX.Element;
    private _Translate;
    private _WithTranslateContext;
    useTemplate(html: string): string;
    pickStringMessage(message: IMessage): string;
    pickMessage(message: IMessage): JSX.Element;
    private get preferedLanguages();
    private get secondaryLanguage();
    showDateAndTime(date: Date | string): string;
}
/**
 * TODO: Translations in (external) modules
 */
