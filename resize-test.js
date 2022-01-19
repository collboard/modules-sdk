#!/usr/bin/env node

process.stdout.on('size', () => {
    console.log(process.stdout.columns + 'x' + process.stdout.rows);
});
