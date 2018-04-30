import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHackerNews from './hacker-news/hacker-news.reducer';
import * as fromExampleData from './example-data/example-data.reducer';
import * as fromRoot from '../../core/store';

export interface ExamplesState {
    exampleData: fromExampleData.State;
}

export interface HackerNewsState {
    articleData: fromHackerNews.State;
}

export interface State extends fromRoot.State {
    'exampleData': ExamplesState;
    'hackerNews': HackerNewsState;
}

export const reducers = {
    exampleData: fromExampleData.reducer
};
export const getExamplesState = createFeatureSelector<ExamplesState>('examples');
export const getHackerNewsState = createFeatureSelector<HackerNewsState>('hacker-news');



