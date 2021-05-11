// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

import { Observable } from 'rxjs';
/**
 *
 * TODO: To some system?
 * TODO: Cleanup
 *
 * @collboard-modules-sdk
 */
export declare class Speech {
    transcript: Observable<string | null>;
    lastTranscript: string | null;
    private transcriptObserver;
    constructor();
    /**
     * TODO: Cleanup
     */
    private listen;
}
