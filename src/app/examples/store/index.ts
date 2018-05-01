import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHackerNews from './hacker-news/hacker-news.reducer';
import * as fromBookData from './book-data/book-data.reducer';
import * as fromRoot from '../../core/store';

export interface ExamplesState {
    bookData: fromBookData.State;
    articleData: fromHackerNews.State;
}

export interface State extends fromRoot.State {
    'exampleData': ExamplesState;
}

export const reducers = {
    bookData: fromBookData.reducer,
    hackerNews: fromHackerNews.reducer
};
export const getExamplesState = createFeatureSelector<ExamplesState>('examples');



