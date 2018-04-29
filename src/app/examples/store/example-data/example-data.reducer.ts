import { HttpErrorResponse } from '@angular/common/http';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { ExampleModel } from '../../models/ExampleModel.model';
import { ExampleDataActionTypes, ExamplesActions } from './example-data.actions';

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

    case ExampleDataActionTypes.LoadData: {
      return {
        ...state,
       exampleDataLoading: true,
      };
    }


    case ExampleDataActionTypes.LoadDataSuccess: {
      return {
        ...adapter.upsertMany(action.payload, state),
        exampleDataLoading: false,
      };
    }

    case ExampleDataActionTypes.LoadDataError: {
      return {
        ...state,
        exampleDataLoadError: action.payload,
        exampleDataLoading: false,
      };
    }

    case ExampleDataActionTypes.ClearData: {
      return {
        ...adapter.removeAll(state),
        exampleDataLoading: false,
      };
    }


    default:
      return state;
  }
}
