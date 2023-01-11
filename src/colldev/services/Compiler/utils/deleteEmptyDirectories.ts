import chalk from 'chalk';
import { readdir, rmdir, stat } from 'fs';
import { relative } from 'path';
import { promisify } from 'util';

export async function deleteEmptyDirectories(dirName: string): Promise<void> {
    try {
        const files = await promisify(readdir)(dirName);
        if (files.length > 0) {
            for (const fileName of files) {
                const filePath = `${dirName}/${fileName}`;
                const fileStat = await promisify(stat)(filePath);
                if (fileStat.isDirectory()) {
                    await deleteEmptyDirectories(filePath);
                }
            }
        }

        const filesAfterDeletion = await promisify(readdir)(dirName);
        if (filesAfterDeletion.length === 0) {
            console.log(
                chalk.magenta(`Cleanup of empty directory ${relative(process.cwd(), dirName).split('\\').join('/')}`),
            );
            await promisify(rmdir)(dirName);
        }
    } catch (error) {
        throw new Error(`Can not delete ${relative(process.cwd(), dirName).split('\\').join('/')}`);
    }
}
