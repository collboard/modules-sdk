// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
import { Registration } from 'destroyable';
import { SetOptional } from 'type-fest';
import { ISystems } from '../00-SystemsContainer/ISystems';
import { AbstractSystem } from '../10-AbstractSystem/AbstractSystem';
import { UserInterfaceElementPlace } from './UserInterfaceElementPlace';
interface IElementOptions {
    /**
     * Where to place the extra element
     */
    place: UserInterfaceElementPlace;
    /**
     * The JSX element
     */
    element: JSX.Element;
    /**
     * The order rendering of the element
     * Note: This is not z-index ONLY order for ordering
     *
     * @default 0
     */
    order: number;
    /**
     * Systems container from the registrar module
     */
    systems: ISystems;
}
/**
 * UserInterfaceSystem can register and manage additional JSX
 *
 * Note: Using UserInterfaceSystem is not recommended to use directly because it is using very low-level API. Consider using higher-level API like ToolbarSystem, NotificationSystem, etc.
 * Note: UserInterfaceSystem is for JSX (HTML) vs. StyleSystem is for CSS styles
 *
 * @collboard-system
 */
export declare class UserInterfaceSystem extends AbstractSystem {
    private places;
    protected init(): Promise<void>;
    /**
     * Register element that will be included in UI
     *
     * Note: Consider using higher-level API
     */
    registerElement({ place, order, element, systems }: SetOptional<IElementOptions, 'order'>): Registration;
    render(place: UserInterfaceElementPlace): JSX.Element;
    private getPlaceStorage;
}
export { };
/**
 * TODO: Fix doubeling of toolbars or user interface content
 * TODO: Probbably (require OR used sign OR extract from given systems) module signature when registering
 *       ! Warning: render method is used by DIFFERENT module than the one that registered it
 */
