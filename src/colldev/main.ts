#!/usr/bin/env node

import chalk from 'chalk';
import { Colldev } from './Colldev';

const colldev = new Colldev(process.argv);

process.on('SIGINT', () => {
    console.info(chalk.red('Stopping Colldev...'));
    process.exit();
});

process.on('exit', async () => {
    await colldev.destroy();
});
