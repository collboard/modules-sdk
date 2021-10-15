import fetch from 'node-fetch';

export async function getCollboardUrlFlag() {
    try {
        await fetch(`http://localhost:9977/api/`);
        // TODO: detect version compatibility
        return `--collboard-url http://localhost:9977`;
    } catch (error) {
        return `--collboard-url https://dev.collboard.com`;
    }
}


