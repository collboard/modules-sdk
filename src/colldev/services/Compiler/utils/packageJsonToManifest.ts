import { PackageJson } from 'type-fest';
import { IModuleManifest } from '../../../../../types';
import { cleanUndefineds } from '../../../utils/cleanUndefineds';

export function packageJsonToManifest(packageJson: PackageJson): Partial<IModuleManifest> {
    const {
        name,
        description,
        keywords,
        license,
        licenses,
        author,
        contributors,
        repository,
        homepage,
        version,
        private: isPrivate,
    } = packageJson;

    const flags = cleanUndefineds({
        isPrivate,
    });

    return cleanUndefineds({
        name,
        // title,
        description,
        keywords,
        // categories,
        // icon,
        // screenshots,
        license,
        licenses,
        author,
        contributors,
        repository,
        homepage,
        version,
        flags: Object.keys(flags).length ? flags : undefined,
    });
}

/**
 * TODO:
 * - How to deal with scopes "@scope/module-name"
 */
