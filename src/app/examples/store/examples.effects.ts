import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ExamplesActions, ExamplesActionTypes } from './examples.actions';

@Injectable()
export class ExamplesEffects {

  @Effect()
  effect$ = this.actions$.ofType(ExamplesActionTypes.SetData);

  constructor(private actions$: Actions) {}
}
