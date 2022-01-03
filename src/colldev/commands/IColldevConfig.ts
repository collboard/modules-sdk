import { IColldevOptions } from '../IColldevOptions';
import { IColldevBuildOptions } from './build/IColldevBuildOptions';
import { IColldevDevelopOptions } from './develop/IColldevDevelopOptions';
import { IColldevPublishOptions } from './publish/IColldevPublishOptions';
import { IColldevTestOptions } from './test/IColldevTestOptions';

export interface IColldevConfig extends Partial<IColldevOptions> {
    develop?: Partial<IColldevDevelopOptions>;
    test?: Partial<IColldevTestOptions>;
    build?: Partial<IColldevBuildOptions>;
    publish?: Partial<IColldevPublishOptions>;
}
