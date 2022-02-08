import { ICompilerStatus } from '../../services/Compiler/ICompilerStatus';
import { IColldevDevelopStatus } from '../develop/IColldevDevelopStatus';

export interface IColldevTestStatus {
    develop: IColldevDevelopStatus;
    compile?: ICompilerStatus;
}
