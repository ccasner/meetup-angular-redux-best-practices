import { Action } from '@ngrx/store';
import { ExamplesActions, ExamplesActionTypes } from './examples.actions';
import { ExampleModel } from '../models/ExampleModel.model';

export interface State {
  exampleData: ExampleModel;
}

export const initialState: State = {
  exampleData: {
    id: 1,
    title: 'Example title',
  },
};

export function reducer(state = initialState, action: ExamplesActions): State {
  switch (action.type) {

    case ExamplesActionTypes.SetData: {
      return {
        ...state,
        exampleData: action.payload,
      };
    }


    default:
      return state;
  }
}
