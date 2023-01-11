// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { TouchFrame } from 'touchcontroller';
/**
 * @@x
 *
 * [👘]
 * @collboard-modules-sdk
 */
export declare function touchFrameToArtFrame(frame: TouchFrame): Pick<TouchFrame, 'position' | 'time'>;
/**
 * TODO: [🧠] What is the best way to capture the time
 * TODO: [🧠] Better way how to do record current time of the frame
 * TODO: [🧠] Migrations: There should be some way how to free up space after freehand made by broken frame.clone freehand
 * TODO: [👀] Focus cursor from other users in unfinished Freehands
 * TODO: [🍩][🧠] Requesting systems non-magically
 * TODO: [🍩] Omitting systems.request should fail bacause of unrequested systems.
 * TODO: If not dragging fallback to PointArt
 * TODO: [🈁]
 */
