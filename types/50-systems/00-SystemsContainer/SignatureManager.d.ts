// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { TouchController } from 'touchcontroller';
import { AbstractSystem } from '../10-AbstractSystem/AbstractSystem';
import { IModuleManifest } from '../ModuleStore/interfaces/IModuleManifest';
import { ISystems } from './ISystems';
declare type ISignableEntity = ISystems | AbstractSystem | TouchController;
declare type ISignature = IModuleManifest | null;
declare class SignatureManager {
    private readonly signatureKey;
    /**
     * Signs given entity with given module signature.
     * This mechanism is used for knowning which module does what.
     *
     * @param signableEntity for examle System
     * @param signature
     * @returns Signed version of given entity; it does not mutate given entity it returns proxied version with signature.
     */
    sign<T extends ISignableEntity>(signableEntity: T, signature: ISignature): T;
    /**
     * Gets signature of given entity.
     */
    getSignature(signableEntity: ISignableEntity): ISignature;
}
/**
 * Instance of SignatureManager used in Collboard as a singleton.
 *
 * TODO: SignatureManager should be probbably own system NOT const singleton
 */
export declare const signatureManager: SignatureManager;
export {};
/**
 * TODO: Probably more universally - DO not hardcode SystemsContainer, AbstractSystem or IModuleManifest
 * TODO: Is this the best way to do this?
 * TODO: Is this method preventing from removing the sign from external modules reliably:
 *       Can be hack some modification of:
 *       - delete (systems as any)[(signatureManager as any).signatureKey];
 *       - Wrapping system in another proxy with signatureKey of null/undefined
 *       - Modifying original signatureManager from external code
 */
