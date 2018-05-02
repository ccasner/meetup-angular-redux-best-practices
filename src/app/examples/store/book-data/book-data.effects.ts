import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { catchError, delay, map, switchMap, take } from 'rxjs/operators';
import { BookModel } from '../../models/BookModel.model';
import { BookDataActionTypes, LoadBooks, LoadBooksError, LoadBooksSuccess } from './book-data.actions';

@Injectable()
export class BookDataEffects {

  @Effect()
  loadBooks$ = this.actions$.pipe(
    ofType<LoadBooks>(BookDataActionTypes.LoadBooks),
    delay(500), // Simulate API delay
    map(action => action.payload),
    switchMap((dataSet) => {
      const dataFile = dataSet < 2 ? '/assets/book-data.json' : '/assets/book-data-2.json';
      return this.http.get<BookModel[]>(dataFile).pipe(
        map(data =>  new LoadBooksSuccess(data.map(item => Object.assign({}, {id: item.id, changes: item})))),
        catchError(err => of(new LoadBooksError(err))),
      );
    }),
  );

  // Bad Example 3 - don't create an effect for derived state
  //
/*   @Effect()
  setBookTheme$ = this.actions$
    .ofType<LoadBooks>(BookDataActionTypes.LoadThemeSuccess)
    .pipe(
      map(action => action.payload),
      map(({ data }) => new SetBookTheme(data.theme)),
  );

  export const getBookTheme = createSelector(
    getBookData,
    (data) => data.theme
  ); */

  constructor(private actions$: Actions, private http: HttpClient) {}
}
