export interface IColldevDevelopOptions {
    collboardUrl: string;
    open: 'none' | 'single' | 'multiple';
    browser: string;
    headless: boolean;
    wait: string /* Note: commander does not support number */;
    exit: boolean;
    port: string /* Note: commander does not support number */;
    expose: boolean;
}
