// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { AbstractSystem } from '../AbstractSystem';
/**
 * SoundSystem can play a sound and keep music and UI sounds library.
 * Note: SoundSystem can play a sound vs. VoiceSystem can detect voice or speech a view.
 *
 * @private
 * @collboard-system
 */
export declare class SoundSystem extends AbstractSystem {
    protected init(): Promise<void>;
}
/**
 * TODO: Define boundary between SoundSystem and VoiceSystem
 * TODO: Define boundary between utils and system
 */
