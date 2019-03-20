import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/index';

@Injectable({
    providedIn: 'root',
})
export class SideDrawerService {
    private _drawerState = new BehaviorSubject<void>(null);

    get drawerState() {
        return this._drawerState.asObservable();
    }

    toogleDrawer() {
        this._drawerState.next(null);
    }
}
