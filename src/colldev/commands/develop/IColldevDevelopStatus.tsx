import { IBrowserSpawnerStatus } from '../../services/BrowserSpawner/IBrowserSpawnerStatus';
import { ICompilerStatus } from '../../services/Compiler/ICompilerStatus';
import { Serializable } from '../../services/Compiler/utils/Serializable';
import { IServerStatus } from '../../services/Server/IServerStatus';

export interface IColldevDevelopStatus {
    compiler?: Serializable<ICompilerStatus>;
    server?: IServerStatus;
    browserSpawner?: IBrowserSpawnerStatus;
}
