import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { ExamplesActions, ExamplesActionTypes } from './examples.actions';
import { ExampleModel } from '../models/ExampleModel.model';

export interface State extends EntityState<ExampleModel> {
  exampleDataLoading: boolean;
  exampleDataLoadError: HttpErrorResponse | any;
}

export const adapter = createEntityAdapter<ExampleModel>({
  selectId: (item: ExampleModel) => item.id,
  sortComparer: false
});

export const initialState: State = adapter.getInitialState({
  exampleDataLoading: false,
  exampleDataLoadError: null,
});

export function reducer(state = initialState, action: ExamplesActions): State {
  switch (action.type) {

    case ExamplesActionTypes.LoadData: {
      return {
        ...state,
       exampleDataLoading: true,
      };
    }


    case ExamplesActionTypes.LoadDataSuccess: {
      return {
        ...adapter.addAll(action.payload, state),
        exampleDataLoading: false,
      };
    }

    case ExamplesActionTypes.LoadDataError: {
      return {
        ...state,
        exampleDataLoadError: action.payload,
        exampleDataLoading: false,
      };
    }


    default:
      return state;
  }
}
