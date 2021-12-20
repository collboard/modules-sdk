#!/usr/bin/env ts-node
//> ./test/sandbox.ts

import { join } from 'path';
import { execCommand } from './test-utils/execCommand';

execCommand({
    command: `ts-node ./src/colldev/main.ts develop ./test-samples/errors/no-error --exit --foooo`,
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
