#!/usr/bin/env node

import { render } from 'ink';
import React from 'react';
import { parseInput } from './cli/input/parseInput';
import { Output } from './cli/output/Output';
import { Compiler } from './compiler/Compiler';
import { Server } from './server/Server';

/**
 * Note Using main function because still we cannot reliably use top level awaits
 */
async function colldevMain() {
    const inputOptions = parseInput();

    const compiler = new Compiler();
    const server = new Server(compiler);

    render(<Output {...{ compiler, server }} />);

    // TODO: !!! SIGINT
}

colldevMain();
