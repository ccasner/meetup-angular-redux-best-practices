import { Action } from '@ngrx/store';
import { ExampleModel } from '../models/ExampleModel.model';

export enum ExamplesActionTypes {
  LoadData = '[Examples] Load Data',
  LoadDataSuccess = '[Examples] Load Data Success',
  LoadDataError = '[Examples] Load Data Error',
}

export class LoadData implements Action {
  readonly type = ExamplesActionTypes.LoadData;
  constructor() { }
}
export class LoadDataSuccess implements Action {
  readonly type = ExamplesActionTypes.LoadDataSuccess;
  constructor(public payload: ExampleModel[]) { }
}
export class LoadDataError implements Action {
  readonly type = ExamplesActionTypes.LoadDataError;
  constructor(public payload: any) { }
}
export type ExamplesActions
  = LoadData
  | LoadDataSuccess
  | LoadDataError;
