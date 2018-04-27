import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { ExamplesActions, ExamplesActionTypes, LoadDataSuccess, LoadDataError } from './examples.actions';
import { ExampleModel } from '../models/ExampleModel.model';

@Injectable()
export class ExamplesEffects {

  @Effect()
  loadData$ = this.actions$.pipe(
     ofType(ExamplesActionTypes.LoadData),
     switchMap(() => {
        return this.http.get<ExampleModel[]>('/assets/example-data.json').pipe(
          map(data => new LoadDataSuccess(data)),
          catchError(err => of(new LoadDataError(err))),
        );
     }),
    );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
