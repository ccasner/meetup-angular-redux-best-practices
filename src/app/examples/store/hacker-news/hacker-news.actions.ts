import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { ArticlesModel } from '../../models/HackerNewsModel.model';

export enum HackerNewsActionTypes {
  LoadArticles = '[Hacker News] Load Articles',
  LoadArticlesSuccess = '[Hacker News] Load Articles Success',
  LoadArticlesError = '[Hacker News] Load Articles Error',
  ClearArticles = '[Hacker News] Clear Articles',
}

export class LoadArticles implements Action {
  readonly type = HackerNewsActionTypes.LoadArticles;
  constructor(public payload: number) { }
}
export class LoadArticlesSuccess implements Action {
  readonly type = HackerNewsActionTypes.LoadArticlesSuccess;
  constructor(public payload: Update<ArticlesModel>[]) { }
}
export class LoadArticlesError implements Action {
  readonly type = HackerNewsActionTypes.LoadArticlesError;
  constructor(public payload: any) { }
}
export class ClearArticles implements Action {
  readonly type = HackerNewsActionTypes.ClearArticles;
  constructor() { }
}
export type HackerNewsActions
  = LoadArticles
  | LoadArticlesSuccess
  | LoadArticlesError
  | ClearArticles;
