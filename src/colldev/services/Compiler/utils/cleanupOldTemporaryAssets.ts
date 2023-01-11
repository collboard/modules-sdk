import chalk from 'chalk';
import { stat, unlink } from 'fs';
import glob from 'glob-promise';
import { join, relative } from 'path';
import { promisify } from 'util';
import { COLLDEV_PATH } from '../../../config';
import { deleteEmptyDirectories } from './deleteEmptyDirectories';

const ONE_HOUR_IN_SECONDS = 3600;

export async function cleanupOldTemporaryAssets() {
    for (const fileName of await glob(join(COLLDEV_PATH, '/**/*'))) {
        const fileStat = await promisify(stat)(fileName);

        if (fileStat.isDirectory()) {
            continue;
        }

        const fileAgeInMilliseconds = new Date().getTime() - fileStat.mtime.getTime();
        if (fileAgeInMilliseconds > ONE_HOUR_IN_SECONDS * 1000) {
            console.log(chalk.magenta(`Cleanup of file ${relative(process.cwd(), fileName).split('\\').join('/')}`));
            await promisify(unlink)(fileName);
        }
    }

    await deleteEmptyDirectories(COLLDEV_PATH).catch((error) => {
        if (error instanceof Error && error.message === 'Can not delete .colldev') {
            return;
        } else {
            throw error;
        }
    });
}
