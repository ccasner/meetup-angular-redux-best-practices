import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromExampleData from './example-data.reducer';
import * as fromRoot from '../../core/store';

export interface ExamplesState {
    exampleData: fromExampleData.State;
}

export interface State extends fromRoot.State {
    'exampleData': ExamplesState;
}

export const reducers = {
    exampleData: fromExampleData.reducer
};
export const getExamplesState = createFeatureSelector<ExamplesState>('examples');

