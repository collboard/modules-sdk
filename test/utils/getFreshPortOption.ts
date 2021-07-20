export function getFreshPortOption() {
    // TODO: Async and detect blocked port
    return `--port ${Math.floor(10000 + Math.random() * 10000)}`;
}
