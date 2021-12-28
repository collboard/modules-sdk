import { unlink, writeFile } from 'fs';
import { join } from 'path';
import { promisify } from 'util';
import * as uuid from 'uuid';
import { ASSETS_PATH } from '../config';
import { makeColldevFolder } from '../services/Compiler/utils/makeColldevFolder';

/**
 * Simmilar as eval but with better error handling
 * @param javascriptCode that has module.exports which is returned
 */

export async function evaluateByRequire<T>(javascriptContent: string): Promise<T> {
    // TODO: Consistent and DRY strategy how to create temporary files and garbage collect files that wasnt deleted propperly
    // TODO: Make colldev lock file to prevent multiple instances of colldev to run at the same time - this mechanism can invoke garbage collection
    await makeColldevFolder();
    const tmpPath = join(ASSETS_PATH, `evaluate-${uuid.v4()}.js`);
    await promisify(writeFile)(tmpPath, javascriptContent);

    // TODO: Probbably make some sandboxing protections here
    const exported = await require(/* TODO: ? relative*/ tmpPath);
    await promisify(unlink)(tmpPath);
    return exported;
}
