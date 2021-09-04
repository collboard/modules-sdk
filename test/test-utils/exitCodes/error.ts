import { forTime } from 'waitasecond';

main();

async function main() {
    await forTime(100);
    console.error(`Error`);
    process.exit(1);
}
