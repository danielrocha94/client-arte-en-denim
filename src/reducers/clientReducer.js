import { FETCH_PAYMENTS, FETCH_BALANCES} from '../actions/types';

const initialState = {
  payments: [],
  balances: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_PAYMENTS:
      return {...state, payments: {...action.payload}}
    case FETCH_BALANCES:
      return {...state, balances: {...action.payload}}
    default:
      return state;
  }
}