// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { IAwaitable } from 'destroyable';
import * as React from 'react';
import { IModalProps } from '../../../30-components/modal/Modal';
import { IFactorable } from '../../../40-utils/IFactory';
import { ISystems } from '../../00-SystemsContainer/ISystems';
import { TranslationsSystem } from '../../TranslationsSystem/0-TranslationsSystem';
import { IModuleDefinition } from '../interfaces/IModule';
import { IModuleManifest } from '../interfaces/IModuleManifest';
declare type ICreateModalReturn = Partial<Omit<IModalProps, 'children'>> & {
    content: IFactorable<JSX.Element>;
    wrapModalManually?: boolean;
};
/**
 *
 * @collboard-modules-sdk
 */
export declare function makeModalModule(protoModule: {
    manifest?: IModuleManifest;
    createModal(systems: ISystems): IAwaitable<ICreateModalReturn>;
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
