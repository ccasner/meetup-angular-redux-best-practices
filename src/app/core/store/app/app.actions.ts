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
