import { ICompilerStatus } from '../Compiler';

export function compilerStatusToJson(status: ICompilerStatus) {
    return { ...status, webpackStats: status.webpackStats?.toJson() };
}
