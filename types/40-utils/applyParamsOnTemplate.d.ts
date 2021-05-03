
                  
// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

                  export declare type IReplacer = (key: string, note?: string) => string;
interface ITemplateArguments {
    template: string;
    replace?: IReplacer;
    params?: Record<string, string | null>;
}
/**
 *
 * Note: Originally it was named useTemplate but it has conflict with name of one react hook
 */
export declare function applyParamsOnTemplate({ template, params, replace }: ITemplateArguments): string;
export {};

                  