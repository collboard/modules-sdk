export async function getBrowserFlag() {
    const headless = true;
    return `--browser chrome${headless ? ` --headless` : ``}`;
}
