## Three Principles of Redux

### Single source of truth

The state of your whole application is stored in an object tree within a single store.

### State is read-only

The only way to change the state is to emit an action, an object describing what happened.

### Changes are made with pure functions

To specify how the state tree is transformed by actions, you write pure reducers.


## Actions
Actions are dispatched in order to change the stores state. They often contain a payload consumed by the reducers and effects, but do not have to. 

Here's a basic example of actions that can be dispatched to set if the side navigation panel is open or closed, and set the page title:
```javascript
import { Action } from '@ngrx/store';

export enum AppActionTypes {
  SetTitle = '[App] Set Title',
  SetSidenavOpened = '[App] Set Sidenav Opened',
  ToggleSidenav = '[App] Toggle Sidenav',
}

export class SetTitle implements Action {
  readonly type = AppActionTypes.SetTitle;
  constructor (public payload: string) { }
}

export class SetSidenavOpened implements Action {
  readonly type = AppActionTypes.SetSidenavOpened;
  constructor (public payload: boolean) { }
}

export class ToggleSidenav implements Action {
  readonly type = AppActionTypes.ToggleSidenav;
  constructor () { }
}

export type AppActions
  = SetTitle
  | SetSidenavOpened
  | ToggleSidenav;
```

## Reducers
Reducers take a given action and optional payload, and return a new state. Here is a basic example of some actions that have payloads, and one that does not.

```javascript
import { AppActionTypes, AppActions } from './app.actions';

export interface State {
  title: string;
  sidenavOpened: boolean;
}

export const initialState: State = {
  title: null,
  sidenavOpened: false,
};

export function reducer(state = initialState, action: AppActions): State {
  switch (action.type) {
    case AppActionTypes.SetTitle: {
      return {
        ...state,
        title: action.payload,
      };
    }
    case AppActionTypes.SetSidenavOpened: {
      return {
        ...state,
        sidenavOpened: action.payload,
      };
    }
    case AppActionTypes.ToggleSidenav: {
      return {
        ...state,
        sidenavOpened: !state.sidenavOpened,
      };
    }
    default:
      return state;
  }
}

```

## Effects
Effects can optionally be setup as a way of handling what happens after an action has been dispatched and its reducer has been run. These effects can both do work (ie a http call) and dispatch another action with the result of that work. They are tied to an action, but are run after the reducer for that action has returned the new state.

This is an example of when the action to change the title in the app state has been run, a call to Angular's Title service is made to also set the document title. This effect does not dispatch another action, but would commonly be done so if the service called by the effect also returns new data. In this case an action would then be dispatched with a payload containing whatever needs to be added or updated in the app store.

```javascript
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { AppActionTypes, SetTitle } from './app.actions';

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
```
## Selectors
Once you have a store, and the ability to change the state using actions, reducers and effects, we will use selectors to get the data from the store as an observable. The benefit of this is any time the state has changed, the value of the observable will be updated, and will then be automatically bound to the component displaying that information. Furthermore, this can all be done while "disabling" Angular's default change detection cycles by setting the "changeDetection" to "OnPush". This should result in better performance.

Here's a basic example of how to get the app title we showed how to update in the store in the previous examples:

Create a selector

```javascript
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromApp from './app.reducer';
import { getAppState } from '../../store';

export const getTitle = createSelector(
    getAppState,
    (state: fromApp.State) => state.title,
);
```
Create an observable from the selector:

```javascript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { State } from '../../store';
import { getTitle } from '../../store/app/app.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title$: Observable<string>;

  constructor(private store: Store<State>) {
    this.title$ = this.store.pipe(select(getTitle));
  }
}
```
Create a presentation component:

TS
```javascript
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
  @Input() title: string;
}
```
HTML
```html
<h1 class="example-app-name">{{title}}</h1>
```
Use the async pipe to "subscribe" to the selector's observable and pass it to the presentation component's @Input:
```html
<app-title [title]="title$ | async"></app-title>
```
