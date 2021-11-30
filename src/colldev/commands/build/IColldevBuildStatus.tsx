import { ICompilerStatus } from '../develop/Compiler/ICompilerStatus';
import { Serializable } from '../develop/Compiler/utils/Serializable';

export interface IColldevBuildStatus {
    compiler?: Serializable<ICompilerStatus>;
}
