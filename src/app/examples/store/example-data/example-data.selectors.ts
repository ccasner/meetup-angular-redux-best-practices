import { createSelector } from '@ngrx/store';
import { ExamplesState, getExamplesState } from '../../store';
import * as fromExampleData from './example-data.reducer';

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

export const getExampleDataLoading = createSelector(
    getExamplesEntitiesState,
    (state: fromExampleData.State) => state.exampleDataLoading
);

export const getExampleDataLoadError = createSelector(
    getExamplesEntitiesState,
    (state: fromExampleData.State) => state.exampleDataLoadError
);

export const getHasExampleData = createSelector(
    getExampleData,
    (data) => data.length > 0
);
