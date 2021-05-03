
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  /// <reference types="react" />
import { IHandler } from '../../../../../40-utils/IHandler';
import { ISystems } from '../../../../../50-systems/00-SystemsContainer/ISystems';
import { IModuleStoreConnectorSearchQuery } from '../../../../../50-systems/ModuleStore/interfaces/IModuleStoreConnectorSearch';
interface IModuleStoreModalComponentProps {
    systemsContainer: ISystems;
    search: IModuleStoreConnectorSearchQuery;
    onSearchChange: IHandler<IModuleStoreConnectorSearchQuery>;
}
export declare function ModuleStoreModalComponent({ systemsContainer, search, onSearchChange, }: IModuleStoreModalComponentProps): JSX.Element;
export {};

                  