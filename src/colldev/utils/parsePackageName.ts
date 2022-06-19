import spaceTrim from 'spacetrim';

const MODULE_NAME_REGEX = /^(@(?<scope>[a-z0-9][a-z0-9-]*))?(?<name>(\/([a-z0-9][a-z0-9-]*))+)$/;

export function parsePackageName(options: { packageName: string; requireScope: true }): { scope: string; name: string };
export function parsePackageName(options: { packageName: string; requireScope?: boolean }): {
    scope: string | null;
    name: string;
};
export function parsePackageName({ packageName, requireScope }: { packageName: string; requireScope?: boolean }): {
    scope: string | null;
    name: string;
} {
    const match = MODULE_NAME_REGEX.exec(packageName);

    if (!match?.groups) {
        throw new Error(
            spaceTrim(`
                Invalid module name "${packageName}"
                Module name must be in format "@scope/name"
                Module name must match /${MODULE_NAME_REGEX.source}/
            `),
        );
    }

    const { scope, name } = match.groups;

    if (!scope && requireScope) {
        throw new Error(
            spaceTrim(`
                Scope is required for module name "${packageName}"
                Module name must be in format "@scope/name" in your case for example "@my-username/${packageName}"
            `),
        );
    }

    return { scope: scope || null, name };
}
