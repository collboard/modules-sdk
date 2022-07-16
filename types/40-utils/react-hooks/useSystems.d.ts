// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import React from 'react';
import { ISystemsResolved } from '../../50-systems/00-SystemsContainer/ISystemsResolved';
import { ISystems, ISystemsExtended, ISystemsMethods } from './../../50-systems/00-SystemsContainer/ISystems';
/**
 * Context for systems container used in modules
 * Note: This context is provided at UserInterfaceSystem
 *
 * @collboard-modules-sdk
 */
export declare const SystemsContainerContext: React.Context<ISystems | null>;
/**
 * Use previously requested systems
 *
 * Note: You need first to request the systems you want to use
 *
 * @param requestedSystemsNames Names of requested systems
 * @returns record object which contains all requested systems
 *
 * @collboard-modules-sdk
 */
export declare function useSystems<T extends keyof Omit<ISystemsExtended, ISystemsMethods>>(
    ...requestedSystemsNames: Array<T>
): Pick<ISystemsResolved, T>;
/**
 * Note: For security reason there are two separate hooks and contexts:
 *       - useSystems is used in modules and gives only the requested systems
 *       - useSystemsInCore which contains all systems provided to core and it is not exported to modules (= like a root access)
 */
