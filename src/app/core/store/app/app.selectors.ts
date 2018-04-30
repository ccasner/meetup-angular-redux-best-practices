import { createSelector } from '@ngrx/store';
import { getAppState } from '../../store';
import * as fromApp from './app.reducer';

export const getTitle = createSelector(
    getAppState,
    (state: fromApp.State) => state.title,
);
export const getSidenavOpened = createSelector(
    getAppState,
    (state: fromApp.State) => state.sidenavOpened,
);
