import { getBrowserFlag } from './getBrowserFlag';
import { getCollboardUrlFlag } from './getCollboardUrlFlag';
import { getFreshPortflag } from './getFreshPortFlag';

export async function getFlags() {
    // TODO: Some more systematic exposed, headfull, other browser
    // TODO: Combination testing
    // TODO: Testing on multiple platforms - Linux, Windows, Mac, Docker, (maybe Android)
    // TODO: Colldev should accept --timeout flag
    return ` --output minimal --open multiple --exit --disconnect ${await getBrowserFlag()} ${await getFreshPortflag()} ${await getCollboardUrlFlag()}`;
}
