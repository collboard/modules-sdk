//import { watch } from 'chokidar';
import { Command } from 'commander';
import { IInputOptions } from './IInputOptions';

export function parseInput(): IInputOptions {
    const command = new Command();
    command.version('0.0.1' /* TODO: !!! */);

    // TODO: !!! Command options
    command
        .option('-d, --debug', 'output extra debugging')
        .option('-s, --small', 'small pizza size')
        .option('-p, --pizza-type <type>', 'flavour of pizza');

    command.parse(process.argv);

    const options = command.opts();

    /*
    !!!
    if (options.debug) console.log(options);
    console.log('pizza details:');
    if (options.small) console.log('- small pizza size');
    if (options.pizzaType) console.log(`- ${options.pizzaType}`);
    */

    return options;
}
