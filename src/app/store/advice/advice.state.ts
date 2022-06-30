
import { Advice } from '../../model/advice.model';

export interface AdviceState {
    adviceDetails: Advice
}

export const initialState: AdviceState = {
    adviceDetails : {
        ClientName : '',
        BsnFi: '',
        AdviceSignals: []
    }
}