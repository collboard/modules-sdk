import { Destroyable, IDestroyable } from 'destroyable';
import { ColldevServer } from '../ColldevServer/ColldevServer';

export class BrowserSpawner extends Destroyable implements IDestroyable {
    constructor(private colldevServer: ColldevServer) {
        super();
        this.init();
    }

    private init() {}

    public async destroy() {
        await super.destroy();
    }
}
