import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, switchMap, take, tap } from 'rxjs/operators';
import { LoadData } from '../store/example-data/example-data.actions';
import * as fromExampleData from '../store/example-data/example-data.reducer';
import { getHasExampleData } from '../store/example-data/example-data.selectors';

@Injectable()
export class ExampleDataGuard implements CanActivate {
    constructor(private store: Store<fromExampleData.State>) { }

    getFromStoreOrAPI(): Observable<boolean> {
        return this.store.pipe(
            select(getHasExampleData),
            tap((hasData) => {
                if (!hasData) {
                    this.store.dispatch(new LoadData(1));
                }
            }),
            take(1)
        );
    }

    canActivate(): Observable<boolean> {
        return this.getFromStoreOrAPI().pipe(
            switchMap(() => of(true)),
            catchError((err) => {
                console.error(err);
                return of(false);
            })
        );
    }
}
