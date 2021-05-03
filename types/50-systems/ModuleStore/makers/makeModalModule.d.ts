
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  import * as React from 'react';
import { IModalProps } from '../../../30-components/modal/Modal';
import { ISystems } from '../../00-SystemsContainer/ISystems';
import { TranslationsSystem } from '../../TranslationsSystem/0-TranslationsSystem';
import { IModuleDefinition } from '../interfaces/IModule';
import { IModuleManifest } from '../interfaces/IModuleManifest';
declare type ICreateModalReturn = Partial<Omit<IModalProps, 'children' | 'systemsContainer'>> & {
    content: JSX.Element;
    wrapModalManually?: boolean;
};
/**
 *
 * @collboard SDK
 */
export declare function makeModalModule(protoModule: {
    manifest?: IModuleManifest;
    createModal(systemsContainer: ISystems): ICreateModalReturn;
}): IModuleDefinition;
export declare function createModalTitle({ modal, manifest, translationsSystem, }: {
    modal?: ICreateModalReturn;
    manifest?: IModuleManifest;
    translationsSystem: TranslationsSystem;
}): string | React.ReactNode;
export {};

                  