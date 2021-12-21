import { ICompilerStatus } from "../../services/Compiler/ICompilerStatus";
import { Serializable } from "../../services/Compiler/utils/Serializable";


export interface IColldevBuildStatus {
    compiler?: Serializable<ICompilerStatus>;
}
