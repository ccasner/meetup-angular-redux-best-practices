import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { ExampleModel } from '../../models/ExampleModel.model';

export enum ExampleDataActionTypes {
  LoadData = '[Examples] Load Data',
  LoadDataSuccess = '[Examples] Load Data Success',
  LoadDataError = '[Examples] Load Data Error',
  ClearData = '[Examples] Clear Data',
}

export class LoadData implements Action {
  readonly type = ExampleDataActionTypes.LoadData;
  constructor(public payload: number) { }
}
export class LoadDataSuccess implements Action {
  readonly type = ExampleDataActionTypes.LoadDataSuccess;
  constructor(public payload: Update<ExampleModel>[]) { }
}
export class LoadDataError implements Action {
  readonly type = ExampleDataActionTypes.LoadDataError;
  constructor(public payload: any) { }
}
export class ClearData implements Action {
  readonly type = ExampleDataActionTypes.ClearData;
  constructor() { }
}
export type ExamplesActions
  = LoadData
  | LoadDataSuccess
  | LoadDataError
  | ClearData;
