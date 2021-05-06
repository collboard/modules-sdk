//import { watch } from 'chokidar';
import { Command } from 'commander';
import { getColldevPackageContent } from '../../utils/colldevPackage';
import { IInputOptions } from './IInputOptions';

export async function parseInput(): Promise<IInputOptions> {
    const command = new Command();
    command.version((await getColldevPackageContent()).version);

    // TODO: !! Command options
    // TODO: !! Localtunneling
    // TODO: !! Allow to choose the port

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
