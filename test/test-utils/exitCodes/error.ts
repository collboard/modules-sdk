import { forTime } from 'waitasecond';

main();

async function main() {
    await forTime(100);
    console.error(`Sample error`);
    process.exit(1);
}
