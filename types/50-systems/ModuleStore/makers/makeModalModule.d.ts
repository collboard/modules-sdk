// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import React from 'react';
import { Promisable } from 'type-fest';
import { IModalProps } from '../../../30-components/modal/Modal';
import { Factorable } from '../../../40-utils/IFactory';
import { ISystems } from '../../00-SystemsContainer/ISystems';
import { TranslationsSystem } from '../../TranslationsSystem/0-TranslationsSystem';
import { IModuleDefinition } from '../interfaces/IModule';
import { IModuleManifest } from '../interfaces/IModuleManifest/IModuleManifest';
interface ICreateModalReturn extends Partial<Omit<IModalProps, 'children'>> {
    content: Factorable<JSX.Element>;
    /**
     * @deprecated There should be just content and maker should be able to detect automatically if the content is <Modal or not
     */
    wrapModalManually?: boolean;
}
/**
 * Makes a module which shows a simple modal
 *
 * @collboard-modules-sdk
 */
export declare function makeModalModule(protoModule: {
    manifest?: IModuleManifest;
    createModal(systems: ISystems): Promisable<JSX.Element | ICreateModalReturn>;
}): IModuleDefinition;
export declare function createModalTitle({
    modal,
    manifest,
    translationsSystem,
}: {
    modal?: ICreateModalReturn;
    manifest?: IModuleManifest;
    translationsSystem: TranslationsSystem;
}): string | React.ReactNode;
export {};
/**
 * TODO: [Optimization][InitialLoading] Optimize this for initial loading
 * TODO: Changing title of modal
 */
