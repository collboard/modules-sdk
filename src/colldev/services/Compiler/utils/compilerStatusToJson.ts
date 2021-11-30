import { ICompilerStatus } from '../ICompilerStatus';
import { Serializable } from './Serializable';

export function compilerStatusToJson(status: ICompilerStatus): Serializable<ICompilerStatus> {
    return { ...status, webpackStats: status.webpackStats?.toJson() };
}
