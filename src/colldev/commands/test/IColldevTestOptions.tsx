import { IColldevDevelopOptions } from '../develop/IColldevDevelopOptions';

/**
 * Options for test command are same as for develop command only do not allow to keep command running and some defaults are changed @see ./src/colldev/commands/test/ColldevTest.tsx
 */
export interface IColldevTestOptions extends Omit<IColldevDevelopOptions, 'exit'> {}
