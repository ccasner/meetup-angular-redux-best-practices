import { HttpErrorResponse } from '@angular/common/http';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { BookModel } from '../../models/BookModel.model';
import { BookDataActionTypes, BooksActions } from './book-data.actions';

export interface State extends EntityState<BookModel> {
  bookDataLoading: boolean;
  bookDataLoadError: HttpErrorResponse | any;
}

export const adapter = createEntityAdapter<BookModel>({
  selectId: (item: BookModel) => item.id,
  sortComparer: false
});

export const initialState: State = adapter.getInitialState({
  bookDataLoading: false,
  bookDataLoadError: null,
});

export function reducer(state = initialState, action: BooksActions): State {
  switch (action.type) {

    case BookDataActionTypes.LoadBooks: {
      return {
        ...state,
       bookDataLoading: true,
      };
    }


    case BookDataActionTypes.LoadBooksSuccess: {
      return {
        ...adapter.upsertMany(action.payload, state),
        bookDataLoading: false,
      };
    }

    case BookDataActionTypes.LoadBooksError: {
      return {
        ...state,
        bookDataLoadError: action.payload,
        bookDataLoading: false,
      };
    }

    case BookDataActionTypes.ClearBooks: {
      return {
        ...adapter.removeAll(state),
        bookDataLoading: false,
      };
    }


    default:
      return state;
  }
}
