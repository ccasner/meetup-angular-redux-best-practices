import { HttpErrorResponse } from '@angular/common/http';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { ArticlesModel } from '../../models/HackerNewsModel.model';
import { HackerNewsActionTypes, HackerNewsActions } from './hacker-news.actions';

export interface State extends EntityState<ArticlesModel> {
  articlesLoading: boolean;
  articlesLoadError: HttpErrorResponse | any;
}

export const adapter = createEntityAdapter<ArticlesModel>({
  selectId: (item: ArticlesModel) => item.source.id,
  sortComparer: false
});

export const initialState: State = adapter.getInitialState({
  articlesLoading: false,
  articlesLoadError: null,
});

export function reducer(state = initialState, action: HackerNewsActions): State {
  switch (action.type) {

    case HackerNewsActionTypes.LoadArticles: {
      return {
        ...state,
        articlesLoading: true,
      };
    }


    case HackerNewsActionTypes.LoadArticlesSuccess: {
      return {
        ...adapter.upsertMany(action.payload, state),
        articlesLoading: false,
      };
    }

    case HackerNewsActionTypes.LoadArticlesError: {
      return {
        ...state,
        articlesLoadError: action.payload,
        articlesLoading: false,
      };
    }

    case HackerNewsActionTypes.ClearArticles: {
      return {
        ...adapter.removeAll(state),
        articlesLoading: false,
      };
    }


    default:
      return state;
  }
}
