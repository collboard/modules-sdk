// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
import { AbstractSystem } from '../10-AbstractSystem/AbstractSystem';
import { ITestSystem } from './interfaces/0-ITestSystem';
/**
 * TestSystem just for testing purposes.
 *
 * @collboard-system
 */
export declare class TestSystem extends AbstractSystem implements ITestSystem {
    protected init(): Promise<void>;
    echo<TMessage>(message: TMessage): Promise<TMessage>;
    throwError(): Promise<never>;
}
