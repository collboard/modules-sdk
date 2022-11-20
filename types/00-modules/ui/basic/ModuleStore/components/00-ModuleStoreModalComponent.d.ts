// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { IHandler } from '../../../../../40-utils/IHandler';
import { IModuleSearchCriteria } from '../../../../../50-systems/ModuleStore/interfaces/IModuleSearchCriteria';
export { CategorizedModal } from '../../../../../30-components/modal/categorized-modal/CategorizedModal';
interface IModuleStoreModalComponentProps {
    search: IModuleSearchCriteria;
    onSearchChange: IHandler<IModuleSearchCriteria>;
}
export declare function ModuleStoreModalComponent({
    search,
    onSearchChange,
}: IModuleStoreModalComponentProps): JSX.Element;
/**
 * TODO: [🩱] Probbably do not suffix components with "Component" (or make better decisions [🏊‍♂️])
 */
