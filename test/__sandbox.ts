#!/usr/bin/env ts-node
//> ./test/__sandbox.ts
// Note: This file is just a junk sandbox code for manual testing the CLI.
//       It is not part of the actual Colldev CLI and it has nothing with some sandboxing security

/*
import { spawn } from 'child_process';

//const process = spawn('unknown-command', []);


const process = spawn('npx.cmd', ['ts-node', './test/test-utils/exitCodes/error.ts'], {
    cwd: 'C:\\Users\\me\\work\\collboard\\modules-sdk',
});

process.stdout.on('data', (stdout) => {
    console.log('stdout:', stdout.toString());
});

process.stderr.on('data', (stderr) => {
    console.log('stderr:', stderr.toString());
});

process.on('disconnect', (_: any) => {
    console.log('disconnect', _);
});

process.on('spawn', (_: any) => {
    console.log('spawn', _);
});

process.on('exit', (_: any) => {
    console.log('exit', _);
});

process.on('close', (_: any) => {
    console.log('close', _);
});

process.on('error', (_: any) => {
    console.log('error', _);
});
/**/
//======================================================================================================================

/**/
import { join } from 'path';
import { execCommand } from './test-utils/execCommand/execCommand';

/*
execCommand({
    command: 'npx ts-node ./test/test-utils/exitCodes/success.ts',
    cwd: join(__dirname, '..'),
})
*/

execCommand({
    command: `npx ts-node ./src/colldev/main.ts develop ./test-samples/errors/no-error --exit --foooo`,
    cwd: join(__dirname, '..'),
    timeout: 8000,
})
    .then((result) => {
        console.log({ result });
    })
    .catch((error) => {
        if (error instanceof Error) {
            console.log('Error:', { error });
        } else {
            console.log('Not instace of Error:', { error });
        }
    });

//======================================================================================================================
/*


execCommand({
    command: `npx ts-node ./src/colldev/main.ts develop ./test-samples/errors/no-error --exit --foooo`,
    cwd: join(__dirname, '..'),
})
    .then((result) => {
        console.log({ result });
    })
    .catch((error) => {
        if (error instanceof Error) {
            console.log('Error:', { error });
        } else {
            console.log('Not instace of Error:', { error });
        }
    });
.

/* */
