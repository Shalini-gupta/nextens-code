import {createAction, props} from '@ngrx/store';
import { Advice } from '../../model/advice.model';

// export const loadAdvice  = createAction('[Advice List] Load Advices');
// export const loadAdviceSuccess = createAction('[Advice List] Load Advices Success', props<{advices: any}>());
// export const loadAdviceError = createAction('[Advice List] Load Advices Error');

export const LOAD_ADVICE  = '[Advice List] Load Advices';
export const LOAD_ADVICE_SUCCESS = '[Advice List] Load Advices Success';

export const loadAdvice = createAction(LOAD_ADVICE)
export const loadAdviceSuccess = createAction(LOAD_ADVICE_SUCCESS, props<{ advice: Advice}>())