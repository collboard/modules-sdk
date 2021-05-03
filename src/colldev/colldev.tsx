#!/usr/bin/env node

import { render } from 'ink';
import React from 'react';
import { forEver } from 'waitasecond';
import { parseInput } from './cli/input/parseInput';
import { Output } from './cli/output/Output';
import { OutputStats } from './cli/output/OutputStats';
import { Compiler } from './compiler/Compiler';
import { Server } from './server/Server';

/**
 * Note Using main function because still we cannot reliably use top level awaits
 */
async function colldevMain() {
    const inputOptions = parseInput();

    const outputStats = new OutputStats();
    const compiler = new Compiler();
    const server = new Server(compiler);

    await forEver();
    render(<Output {...{ outputStats }} />);

    // TODO: !!! SIGINT
}

colldevMain();
