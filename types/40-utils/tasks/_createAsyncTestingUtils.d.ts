// GENERATED WITH generate-modules-sdk
// Warning: Do not edit by hand, all changes will be lost on next execution!

export declare function createAsyncTestingUtils(): {
    createTaskThatCanRunOnlyOneAtMomentGlobally: (i: number) => () => Promise<number>;
    createTaskThatShouldBeExecutedMaxOnce: (i: number) => () => Promise<number>;
    createTaskThatShouldNotBeExecuted: () => () => never;
    createTaskThatShouldRunInOrder: (order: number) => () => Promise<number>;
};
