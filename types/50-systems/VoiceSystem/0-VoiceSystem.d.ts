// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode

import { AbstractSystem } from '../AbstractSystem';
/**
 * VoiceSystem can recognize the voice and play speech from text.
 * Note: SoundSystem can play a sound vs. VoiceSystem can detect voice or speech.
 *
 * @private
 * @collboard-system
 */
export declare class VoiceSystem extends AbstractSystem {
    protected init(): Promise<void>;
}
/**
 * TODO: Define boundary between SoundSystem and VoiceSystem
 */
