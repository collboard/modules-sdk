import { IColldevOptions } from '../../IColldevOptions';

export interface IColldevDevelopOptions extends IColldevOptions {
    collboardUrl: string;
    open: 'none' | 'single' | 'multiple';
    browser: string;
    headless: boolean;
    wait: string /* Note: commander does not support number */;
    exit: boolean;
    disconnect: boolean;
    port: string /* Note: commander does not support number */;
    expose: boolean;
}
