import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { AppActionTypes, SetTitle } from './app.actions';
import { Title } from '@angular/platform-browser';

@Injectable()
export class AppEffects {

  @Effect({dispatch: false})
  setPageTitle$ = this.actions$.pipe(
     ofType<SetTitle>(AppActionTypes.SetTitle),
     map(action => action.payload),
     tap((title) => {
        this.titleService.setTitle(title + ' | Brainshark Angular Meetup');
     }),
    );

  constructor(private actions$: Actions, private titleService: Title) {}
}
