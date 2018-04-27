import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { tap, filter, take, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as fromExampleData from '../store/example-data.reducer';
import { getExampleData } from '../store/example-data.selectors';
import { LoadData } from '../store/examples.actions';

@Injectable()
export class ExampleDataGuard implements CanActivate {
    constructor(private store: Store<fromExampleData.State>) { }

    getFromStoreOrAPI(): Observable<any> {
        return this.store
            .pipe(
                select(getExampleData),
                tap((data) => {
                    if (!data.length) {
                        this.store.dispatch(new LoadData());
                    }
                }),
                filter((data) => data.length > 0),
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
