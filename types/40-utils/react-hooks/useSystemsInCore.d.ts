// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import React from 'react';
import { ISystemsExtended, ISystemsMethods } from '../../50-systems/00-SystemsContainer/ISystems';
import { ISystemsResolved } from '../../50-systems/00-SystemsContainer/ISystemsResolved';
/**
 * Context for systems container used in modules
 * Note: This context is provided at top render level (with translations and skin)
 *
 * @not-collboard-modules-sdk because this is core hook
 */
export declare const UnsignedSystemsContainerContext: React.Context<ISystemsExtended | null>;
/**
 * Use systems in core
 *
 * Note: This function is working ONLY in core and NOT in modules because it works with unsigned systems
 *
 * @param requestedSystemsNames Names of requested systems
 * @returns record object which contains all requested systems
 *
 * @not-collboard-modules-sdk because this is core util
 */
export declare function useSystemsInCore<T extends keyof Omit<ISystemsExtended, ISystemsMethods>>(
    ...requestedSystemsNames: Array<T>
): Pick<ISystemsResolved, T>;
/**
 * Note: For security reason there are two separate hooks and contexts:
 *       - useSystems is used in modules and gives only the requested systems
 *       - useSystemsInCore which contains all systems provided to core and it is not exported to modules (= like a root access)
 */
