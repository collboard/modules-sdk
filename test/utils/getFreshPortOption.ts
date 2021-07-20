export async function getFreshPortOption() {
    // TODO: detect blocked port (because of this is this util async)
    return `--port ${Math.floor(10000 + Math.random() * 10000)}`;
}
