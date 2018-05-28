import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

interface User {
  id: number;
  email: string;
  access_token: string;
  role: string;
}

export interface State {
}

export const reducers: ActionReducerMap<State> = {
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
