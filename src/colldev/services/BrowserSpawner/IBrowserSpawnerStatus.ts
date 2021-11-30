export interface IBrowserSpawnerStatus {
    isReady: boolean;
    isSpawned: boolean;
    errors: Error[];
    browserName?: string;
}
