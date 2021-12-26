#!/usr/bin/env ts-node
//> ./test/sandbox.ts
// Note: This file is just a junk sandbox code for manual testing the CLI.
//       It is not part of the actual Colldev CLI and it has nothing with some sandboxing security

import { join } from 'path';
import { execCommand } from './test-utils/execCommand/execCommand';

execCommand({
    command: 'npx ts-node ./test/test-utils/exitCodes/success.ts',
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
