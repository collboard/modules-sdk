export interface IBrowserSpawnerStatus {
    ready: boolean;
    errors: Error[];
    browserName?: string;
    spawned: boolean;
}
