export function parsePackageName(options: { packageName: string; requireScope: true }): { scope: string; name: string };
export function parsePackageName(options: { packageName: string; requireScope?: boolean }): {
    scope: string | null;
    name: string;
};
export function parsePackageName({ packageName, requireScope }: { packageName: string; requireScope?: boolean }): {
    scope: string | null;
    name: string;
} {
    const match = /^(@(?<scope>[a-z0-9-*~][a-z0-9-*._~]*)\/)?(?<name>[a-z0-9-~][a-z0-9-._~]*)$/.exec(packageName);

    if (!match?.groups) {
        throw new Error(`Invalid package name "${packageName}"`);
    }

    const { scope, name } = match.groups;

    if (!scope && requireScope) {
        throw new Error(`Scope is required for package name "${packageName}"`);
    }

    return { scope: scope || null, name };
}
