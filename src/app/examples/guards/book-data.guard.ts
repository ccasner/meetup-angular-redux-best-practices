import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, switchMap, take, tap } from 'rxjs/operators';
import { LoadBooks } from '../store/book-data/book-data.actions';
import * as fromExampleData from '../store/book-data/book-data.reducer';
import { getHasBookData } from '../store/book-data/book-data.selectors';

@Injectable()
export class BookDataGuard implements CanActivate {
    constructor(private store: Store<fromExampleData.State>) { }

    getFromStoreOrAPI(): Observable<boolean> {
        return this.store.pipe(
            select(getHasBookData),
            tap((hasData) => {
                if (!hasData) {
                    this.store.dispatch(new LoadBooks(1));
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
