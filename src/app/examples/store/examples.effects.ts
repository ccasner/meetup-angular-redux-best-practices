import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { catchError, delay, map, switchMap } from 'rxjs/operators';
import { ExampleModel } from '../models/ExampleModel.model';
import { ExamplesActionTypes, LoadDataError, LoadDataSuccess } from './examples.actions';

@Injectable()
export class ExamplesEffects {

  @Effect()
  loadData$ = this.actions$.pipe(
     ofType(ExamplesActionTypes.LoadData),
     delay(500), // Simulate API delay
     switchMap(() => {
        return this.http.get<ExampleModel[]>('/assets/example-data.json').pipe(
          map(data => new LoadDataSuccess(data)),
          catchError(err => of(new LoadDataError(err))),
        );
     }),
    );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
