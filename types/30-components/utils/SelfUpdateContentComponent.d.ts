// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
/// <reference types="react" />
interface ISelfUpdateContentComponentProps {
    /**
     * The async content to be rendered
     */
    content: (rerender: () => void) => JSX.Element;
}
/**
 * Utility for mounting self-updating content
 *
 * @collboard-modules-sdk
 */
export declare function SelfUpdateContentComponent({ content }: ISelfUpdateContentComponentProps): JSX.Element;
export {};
/**
 * Note: Maybe this behavior can be achieved more elegantly some React API/hook - if yes please do it!
 */
