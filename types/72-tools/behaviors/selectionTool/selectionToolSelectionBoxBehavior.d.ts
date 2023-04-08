// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { IBehaviorOptions } from '../0-IBehavior';
/**
 * Part of createSelectionToolBehavior
 * @see ./0-createSelectionToolBehavior.ts
 */
export declare function selectionToolSelectionBoxBehavior(behaviorProps: IBehaviorOptions): Promise<boolean>;
/**
 * TODO: Originally there was highliting of the objects during unfinished selection
 *       More things happen in [0] next than [1] complete phase
 *       This was removed for performance reasons
 *       [🐦] When there will be able to provide content for Ctrl+C clipboard asynchronously, we can put it back
 *       Last woring version is in commit ac32ca6c3fb9b3aca803046d4a620df9fb0a5888
 *
 * TODO: [🎂] Probably remove systems from IBehaviorProps and use useSystems (or similar mechanism) instead
 * TODO: [🪑] Compute selection from selected should be probbably done ONLY in AppState (or in future SelectionSystem)
 */
