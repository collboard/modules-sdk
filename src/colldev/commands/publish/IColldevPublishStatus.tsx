import { ICompilerStatus } from '../../services/Compiler/ICompilerStatus';
import { Serializable } from '../../services/Compiler/utils/Serializable';

export interface IColldevPublishStatus {
    warning?: string;
    details?: string;
    compiler?: Serializable<ICompilerStatus>;
}
