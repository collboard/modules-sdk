import { combineLatest, Observable } from 'rxjs';
import { flatternArray } from './flatternArray';
import { joinErrors } from './joinErrors';

export function forServicesReady(...statuses: Array<Observable<{ isReady: boolean; errors: Error[] }>>): Promise<void> {
    return new Promise((resolve, reject) => {
        const subscription = combineLatest(statuses).subscribe(async (currentStatuses) => {
            // Reject if there is some error
            if (currentStatuses.some((status) => status.errors.length > 0)) {
                subscription.unsubscribe();
                reject(joinErrors(...flatternArray(currentStatuses.map((status) => status.errors))));
            }

            // Resolve if every status is ready
            if (currentStatuses.every((status) => status.isReady)) {
                subscription.unsubscribe();
                resolve();
            }
        });
    });
}
