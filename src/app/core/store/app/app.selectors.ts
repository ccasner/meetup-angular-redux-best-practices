import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromApp from './app.reducer';
import { getAppState } from '../../store';

export const getTitle = createSelector(
    getAppState,
    (state: fromApp.State) => state.title,
);
export const getSidenavOpened = createSelector(
    getAppState,
    (state: fromApp.State) => state.sidenavOpened,
);
