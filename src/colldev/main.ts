#!/usr/bin/env node

import { Colldev } from './Colldev/Colldev';

const colldev = new Colldev(process.argv);

process.on('SIGINT', () => {
    colldev.destroy();
    process.exit();
});
