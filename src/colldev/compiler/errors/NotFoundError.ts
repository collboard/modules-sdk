export class PackageNotFoundError extends Error {
    readonly name = 'PackageNotFoundError';
}

export class MainEntryNotFoundError extends Error {
    readonly name = 'MainEntryNotFoundError';
}

export class WebpackError extends Error {
    readonly name = 'WebpackError';
}
