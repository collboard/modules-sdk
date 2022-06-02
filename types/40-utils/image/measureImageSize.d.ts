// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { Vector } from 'xyzt';
import { string_url_image } from '../typeAliases';
/**
 * Get image size after its rendered on its native size
 *
 * @collboard-modules-sdk
 */
export declare function measureImageSize(source: File | Blob | string_url_image): Promise<Vector>;
