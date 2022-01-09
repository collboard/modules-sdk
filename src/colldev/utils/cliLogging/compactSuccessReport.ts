import chalk from 'chalk';


export function compactSuccessReport(finalSuccessMessage: string) {
    console.info(chalk.green(finalSuccessMessage));
}
