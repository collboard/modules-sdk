import { ColldevServer } from '../server/ColldevServer';
import { Destroyable } from '../utils/destroyables/Destroyable';
import { IDestroyable } from '../utils/destroyables/IDestroyable';

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
