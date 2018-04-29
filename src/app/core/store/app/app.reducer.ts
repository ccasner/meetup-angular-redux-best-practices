import { AppActionTypes, AppActions } from './app.actions';

export interface State {
  title: string;
  sidenavOpened: boolean;
}

export const initialState: State = {
  title: null,
  sidenavOpened: false,
};

export function reducer(state = initialState, action: AppActions): State {
  switch (action.type) {
    case AppActionTypes.SetTitle: {
      return {
        ...state,
        title: action.payload,
      };
    }
    case AppActionTypes.SetSidenavOpened: {
      return {
        ...state,
        sidenavOpened: action.payload,
      };
    }
    case AppActionTypes.ToggleSidenav: {
      return {
        ...state,
        sidenavOpened: !state.sidenavOpened,
      };
    }
    default:
      return state;
  }
}
