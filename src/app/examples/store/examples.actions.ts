import { Action } from '@ngrx/store';
import { ExampleModel } from '../models/ExampleModel.model';

export enum ExamplesActionTypes {
  SetData = '[Examples] Set Data'
}

export class SetData implements Action {
  readonly type = ExamplesActionTypes.SetData;
  constructor(public payload: ExampleModel) { }
}

export type ExamplesActions = SetData;
