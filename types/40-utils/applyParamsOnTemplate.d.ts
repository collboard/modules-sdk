// 🏭 GENERATED WITH generate-modules-sdk
// ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
// TODO: This file should be excluded from (not only VSCode) auto-importing.
//       @see https://github.com/Microsoft/vscode/issues/40248
//       @see https://github.com/microsoft/TypeScript/issues/35395
//       @see https://stackoverflow.com/questions/47796545/how-to-disable-auto-import-from-specific-files-in-vscode
export declare type IReplacer = (key: string, note?: string) => string;
interface ITemplateArguments {
    template: string;
    replace?: IReplacer;
    params?: Record<string, string | URL | null | undefined>;
}
/**
 *
 * Note: Originally it was named useTemplate but it has conflict with name of one react hook
 *
 */
export declare function applyParamsOnTemplate({ template, params, replace }: ITemplateArguments): string;
export {};
