// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import React from 'react';
import { Vector } from 'xyzt';
/**
 * This hook will measure the size of the children.
 * Note: It internally uses useMeasure hook so you can decide if use useMeasure(...) OR <Measure>{...}</Measure>
 *
 * @collboard-modules-sdk
 */
export declare function useMeasure<TElement extends HTMLElement>(
    onMeasured: (size: Vector) => void,
): React.RefObject<TElement>;
/**
 * TODO: [🌺] Measure more often than once (via infinite loop + useEffect)
 * TODO: [⚜️] Maybe instead of onMeasured callback receive subject as a box to put new values in
 * TODO: [🌹] Maybe instead of "wrapper" class hack use some ref unwrapping/forwarding technique
 * TODO: [🌹] Maybe put "wrapper" implementation into some separate util to be shared with other hooks/element functions
 * TODO: [🌹] Maybe use data-wrapper for wrapper not the css class
 */
