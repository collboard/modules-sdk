import { IDestroyable } from 'destroyable';
import { Observable } from 'rxjs';

export interface IService extends IDestroyable {
    status: Observable<{ isReady: boolean; errors: Error[] }>;
}
