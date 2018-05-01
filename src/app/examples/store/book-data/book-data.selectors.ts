import { createSelector } from '@ngrx/store';
import { ExamplesState, getExamplesState } from '../../store';
import * as fromExampleData from './book-data.reducer';

export const getBookEntitiesState = createSelector(
    getExamplesState,
    (state: ExamplesState) => state.exampleData
);

export const {
    selectIds: getBookIds,
    selectEntities: getBookEntities,
    selectAll: getAllBooks,
    selectTotal: getTotalBooks,
} = fromExampleData.adapter.getSelectors(getBookEntitiesState);

export const getBookData = createSelector(
    getBookEntities,
    getBookIds,
    (entities, ids) => {
        return (ids as string[]).map(id => entities[id]);
    }
);

export const getBookDataLoading = createSelector(
    getBookEntitiesState,
    (state: fromExampleData.State) => state.bookDataLoading
);

export const getBookDataLoadError = createSelector(
    getBookEntitiesState,
    (state: fromExampleData.State) => state.bookDataLoadError
);

export const getHasBookData = createSelector(
    getBookData,
    (data) => data.length > 0
);
