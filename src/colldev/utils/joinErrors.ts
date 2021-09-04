export function joinErrors(...errors: Error[]): Error | undefined {
    if (errors.length === 0) {
        return undefined;
    } else if (errors.length === 1) {
        return errors[0];
    } else {
        // TODO: Take classes of errors and stacks
        return new Error(errors.map(({ message }) => message).join('\n'));
    }
}
