// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import Ajv from 'ajv/dist/2020';
/**
 * Create schemas for Messages API
 *
 * @heavy on first call
 * @idempotent this function is cached so it will return cached schemas second time
 */
export declare function createSchemas(): Ajv;
/**
 * TODO: Standard way how to make (async/parallel) singleton cache
 *       + Way how to anotate this
 *       + Probbably ask
 * TODO: [Optimization][InitialLoading] Probbably break into the forMoment(s) (and put it in the generator)
 *       Reflect changes to the generator
 *       Reflect changes to the filename
 *       Reflect changes to the anotation
 *       Double-check that changes are working
 */
