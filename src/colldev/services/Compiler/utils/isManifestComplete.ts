import { IModuleManifest } from '../../../../../types';

export function isManifestComplete(manifest: Partial<IModuleManifest>): manifest is IModuleManifest {
    return manifest.name !== undefined;
}
