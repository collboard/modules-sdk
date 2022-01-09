import chalk from 'chalk';

export function compactErrorReport(error: Error) {
    console.info(chalk.bgRed(chalk.white(error.name + ': ')) + ' ' + chalk.red(error.message));
    console.info(chalk.redBright((error.stack || '').replace(error.message, '')));
}
