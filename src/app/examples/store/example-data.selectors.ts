import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromExampleData from './example-data.reducer';
import { getExamplesState, ExamplesState } from '../store';

export const getExamplesEntitiesState = createSelector(
    getExamplesState,
    (state: ExamplesState) => state.exampleData
);
export const {
    selectIds: getExampleIds,
    selectEntities: getExampleEntities,
    selectAll: getAllExamples,
    selectTotal: getTotalExamples,
} = fromExampleData.adapter.getSelectors(getExamplesEntitiesState);

export const getExampleData = createSelector(
    getExampleEntities,
    getExampleIds,
    (entities, ids) => {
        return (ids as string[]).map(id => entities[id]);
    }
);
