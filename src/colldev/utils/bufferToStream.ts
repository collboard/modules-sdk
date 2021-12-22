import { Readable, Stream } from 'stream';

export function bufferToStream(buffer: Buffer): Stream {
    return Readable.from(buffer);
}
