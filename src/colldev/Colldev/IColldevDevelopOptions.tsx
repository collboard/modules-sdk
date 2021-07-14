export interface IColldevDevelopOptions {
    collboardUrl: string;
    open: 'none' | 'single' | 'multiple';
    headless: boolean;
    wait: string /* Note: commander does not support number */;
    exit: boolean;
}
