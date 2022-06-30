import { createReducer, on } from '@ngrx/store';
import { loadAdviceSuccess } from './advice.action';
import { initialState } from './advice.state';

export const AdviceReducer = createReducer(
    initialState,
    on(loadAdviceSuccess, (state, action) => {
        return {
            ...state,
            adviceDetails: action.advice,
        }
    })
);