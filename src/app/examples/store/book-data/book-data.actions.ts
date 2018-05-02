import { Update } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { BookModel } from '../../models/BookModel.model';
import { HttpErrorResponse } from '@angular/common/http';

export enum BookDataActionTypes {
  LoadBooks = '[Books] Load Data',
  LoadBooksSuccess = '[Books] Load Data Success',
  LoadBooksError = '[Books] Load Data Error',
  ClearBooks = '[Books] Clear Data',
}

export class LoadBooks implements Action {
  readonly type = BookDataActionTypes.LoadBooks;
  constructor(public payload: number) { }
}
export class LoadBooksSuccess implements Action {
  readonly type = BookDataActionTypes.LoadBooksSuccess;
  constructor(public payload: Update<BookModel>[]) { }
}
export class LoadBooksError implements Action {
  readonly type = BookDataActionTypes.LoadBooksError;
  constructor(public payload: any | HttpErrorResponse) { }
}
export class ClearBooks implements Action {
  readonly type = BookDataActionTypes.ClearBooks;
  constructor() { }
}
export type BooksActions
  = LoadBooks
  | LoadBooksSuccess
  | LoadBooksError
  | ClearBooks;
