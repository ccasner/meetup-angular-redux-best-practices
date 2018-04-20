import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromExamples from './examples.reducer';

export const getExamplesState = createFeatureSelector<fromExamples.State>('examples');

export const getExampleData = createSelector(
    getExamplesState,
    (state: fromExamples.State) => state.exampleData,
);
