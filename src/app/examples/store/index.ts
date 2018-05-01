import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBookData from './book-data/book-data.reducer';
import * as fromRoot from '../../core/store';

export interface ExamplesState {
    bookData: fromBookData.State;
}

export interface State extends fromRoot.State {
    'exampleData': ExamplesState;
}

export const reducers = {
    bookData: fromBookData.reducer,
};
export const getExamplesState = createFeatureSelector<ExamplesState>('examples');



