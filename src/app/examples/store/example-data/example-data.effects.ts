import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { catchError, delay, map, switchMap } from 'rxjs/operators';
import { ExampleModel } from '../../models/ExampleModel.model';
import { ExampleDataActionTypes, LoadData, LoadDataError, LoadDataSuccess } from './example-data.actions';

@Injectable()
export class ExampleDataEffects {

  @Effect()
  loadData$ = this.actions$.pipe(
    ofType<LoadData>(ExampleDataActionTypes.LoadData),
    delay(500), // Simulate API delay
    map(action => action.payload),
    switchMap((dataSet) => {
      const dataFile = dataSet < 2 ? '/assets/example-data.json' : '/assets/example-data-2.json';
      return this.http.get<ExampleModel[]>(dataFile).pipe(
        map(data =>  new LoadDataSuccess(data.map(item => Object.assign({}, {id: item.id, changes: item})))),
        catchError(err => of(new LoadDataError(err))),
      );
    }),
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
