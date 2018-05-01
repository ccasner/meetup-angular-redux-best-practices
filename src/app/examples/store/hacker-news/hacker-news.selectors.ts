import { createSelector } from '@ngrx/store';
import { ExamplesState, getExamplesState } from '../../store';
import * as fromHackerNewsData from './hacker-news.reducer';

export const getHackerNewsEntitiesState = createSelector(
    getExamplesState,
    (state: ExamplesState) => state.articleData
);
export const {
    selectIds: getArticlesIds,
    selectEntities: getArticleEntities,
    selectAll: getAllArticles,
    selectTotal: getTotalArticles,
} = fromHackerNewsData.adapter.getSelectors(getHackerNewsEntitiesState);

export const getArticles = createSelector(
    getArticleEntities,
    getArticlesIds,
    (entities, ids) => {
        return (ids as string[]).map(id => entities[id]);
    }
);

export const getArticlesLoading = createSelector(
    getHackerNewsEntitiesState,
    (state: fromHackerNewsData.State) => state.articlesLoading
);
export const getArticlesLoadError = createSelector(
    getHackerNewsEntitiesState,
    (state: fromHackerNewsData.State) => state.articlesLoadError
);
export const getHasArticles = createSelector(
    getArticles,
    (data) => data.length > 0
);
