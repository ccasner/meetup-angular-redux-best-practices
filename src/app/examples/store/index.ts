import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHackerNews from './hacker-news/hacker-news.reducer';
import * as fromExampleData from './example-data/example-data.reducer';
import * as fromRoot from '../../core/store';

export interface ExamplesState {
    exampleData: fromExampleData.State;
    articleData: fromHackerNews.State;
}

export interface State extends fromRoot.State {
    'exampleData': ExamplesState;
}

export const reducers = {
    exampleData: fromExampleData.reducer,
    hackerNews: fromHackerNews.reducer
};
export const getExamplesState = createFeatureSelector<ExamplesState>('examples');



