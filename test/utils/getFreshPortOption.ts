let port = 10050;

export function getFreshPortOption(){
    return `--port ${port++}`;
}