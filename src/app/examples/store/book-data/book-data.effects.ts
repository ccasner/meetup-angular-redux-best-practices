import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, delay, map, switchMap, tap } from 'rxjs/operators';
import { BookModel } from '../../models/BookModel.model';
import { BookDataActionTypes, LoadBooks, LoadBooksError, LoadBooksSuccess } from './book-data.actions';

@Injectable()
export class BookDataEffects {

  @Effect()
  loadBooks$: Observable<Action> = this.actions$.pipe(
    ofType<LoadBooks>(BookDataActionTypes.LoadBooks),
    delay(500), // Simulate API delay
    map(action => action.payload),
    switchMap((dataSet) => {
      let dataFile = '/assets/book-data.json';
      if (dataSet === 2) {
        dataFile = '/assets/book-data-2.json';
      } else if (dataSet > 2) {
        dataFile = '/404-demo.json';
      }
      return this.http.get<BookModel[]>(dataFile).pipe(
        map(data =>  new LoadBooksSuccess(data.map(item => Object.assign({}, {id: item.id, changes: item})))),
        catchError(err => of(new LoadBooksError(err))),
      );
    }),
  );

  @Effect({dispatch: false})
  chainedEffect$: Observable<Action> = this.actions$.pipe(
    ofType<LoadBooksError>(BookDataActionTypes.LoadBooksError),
    map(action => action.payload),
    tap((err) => {
      let msg = 'ERROR: An unknown error has occured.';
      if (err instanceof HttpErrorResponse) {
        msg = `ERROR ${err.status}: ${err.message}`;
      }
      this.snackBar.open(msg, 'Ok', {duration: 5000});
    }),
  );

  /**
  * Bad Example 3 - don't create an effect for derived state
  *
  @Effect()
  setBookTheme$ = this.actions$
    .ofType<LoadBooks>(BookDataActionTypes.LoadThemeSuccess)
    .pipe(
      map(action => action.payload),
      map(({ data }) => new SetBookTheme(data.theme)),
  );

  export const getBookTheme = createSelector(
    getBookData,
    (data) => data.theme
  );
  */

  constructor(private actions$: Actions, private http: HttpClient, private snackBar: MatSnackBar) {}
}
