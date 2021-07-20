import { ICompilerStatus } from '../ICompilerStatus';

export function compilerStatusToJson(status: ICompilerStatus) {
    return { ...status, webpackStats: status.webpackStats?.toJson() };
}
