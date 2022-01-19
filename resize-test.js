#!/usr/bin/env node

console.log('Initial ' + process.stdout.columns + 'x' + process.stdout.rows);

process.stdout.on('resize', () => {
    console.log('Resized to ' + process.stdout.columns + 'x' + process.stdout.rows);
});

setInterval(() => {
    /* Note: Never happen, just for keeping alive */
}, 3600 * 24 * 1000);

/**
 *
 * Windows 10:
 *
 * - Git BASH
 *   ☑️⁉️ In VSCode
 * - CMD
 *   ☑️ As separate window
 *   ❌ In VSCode
 * - PowerShell
 *   ☑️ As separate window
 *   ❌ In VSCode
 * - WSL+Ubuntu
 *   ☑️ In VSCode
 *
 */
