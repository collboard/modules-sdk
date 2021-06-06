// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

export declare class SerializerError extends Error {
    constructor(message: string);
}
export declare class SerializationError extends SerializerError {
    readonly name = 'SerializationError';
}
export declare class DeserializationError extends SerializerError {
    readonly name = 'DeserializationError';
}
