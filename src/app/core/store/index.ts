import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';

import * as fromApp from './app/app.reducer';
import { environment } from '../../../environments/environment';

export interface State {
    app: fromApp.State;
}

export const reducers: ActionReducerMap<State> = {
    app: fromApp.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];


export const getAppState = createFeatureSelector<fromApp.State>('app');
