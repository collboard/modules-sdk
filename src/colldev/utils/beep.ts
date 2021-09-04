import { exec } from 'child_process';

export async function beep() {
    exec(`rundll32 user32.dll,MessageBeep`);
}
