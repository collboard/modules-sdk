export interface IBrowserSpawnerStatus {
    isReady: boolean;
    isSpawned: boolean;
    errors: Array<Error>;
    browserName?: string;
}
