import {createAction, props} from '@ngrx/store';
import { Advice } from '../../model/advice.model';

export const loadAdvice  = createAction('[Advice List] Load Advices');
export const loadAdviceSuccess = createAction('[Advice List] Load Advices Success', props<{advice: Advice}>());
