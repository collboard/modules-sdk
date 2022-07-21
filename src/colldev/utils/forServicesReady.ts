import { combineLatest } from 'rxjs';
import { IService } from '../services/IService';
import { flatternArray } from './flatternArray';
import { joinErrors } from './joinErrors';

export function forServicesReady(...services: Array<IService>): Promise<void> {
    return forServicesReadyAdvanced({ services, debug: false });
}

export function forServicesReadyDebug(...services: Array<IService>): Promise<void> {
    return forServicesReadyAdvanced({ services, debug: true });
}

export function forServicesReadyAdvanced({ services, debug }: { services: Array<IService>; debug: boolean }): Promise<void> {
    return new Promise((resolve, reject) => {
        const subscription = combineLatest(services.map(({ status }) => status)).subscribe(async (statuses) => {
            if (debug) console.info('statuses', statuses);

            // Reject if there is some error
            if (statuses.some((status) => status.errors.length > 0)) {
                subscription.unsubscribe();
                reject(joinErrors(...flatternArray(statuses.map((status) => status.errors))));
            }

            // Resolve if every status is ready
            if (statuses.every((status) => status.isReady)) {
                subscription.unsubscribe();
                resolve();
            }
        });
    });
}
