import { IBrowserSpawnerStatus } from './BrowserSpawner/IBrowserSpawnerStatus';
import { ICompilerStatus } from './Compiler/ICompilerStatus';
import { Serializable } from './Compiler/utils/Serializable';
import { IServerStatus } from './Server/IServerStatus';

export interface IColldevDevelopStatus {
    compiler?: Serializable<ICompilerStatus>;
    server?: IServerStatus;
    browserSpawner?: IBrowserSpawnerStatus;
}
