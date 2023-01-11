#!/usr/bin/env node

import chalk from 'chalk';
import { Colldev } from './Colldev';

const colldev = new Colldev(process.argv);

process.on('SIGINT', async () => {
    console.info(chalk.red('Stopping Colldev...'));
    await colldev.destroy();
    process.exit();
});
