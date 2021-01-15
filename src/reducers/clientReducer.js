import { FETCH_PAYMENTS, FETCH_BALANCES, CLIENT_LOGIN, CLIENT_LOGOUT} from '../actions/types';

const initialState = {
  payments: [],
  balances: [],
  isAuthenticated: false,
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_PAYMENTS:
      return {...state, payments: {...action.payload}}
    case FETCH_BALANCES:
      return {...state, balances: {...action.payload}}
    case CLIENT_LOGIN:
      return {...state, isAuthenticated: true }
    case CLIENT_LOGOUT:
      return {...state, isAuthenticated: false }
    default:
      return state;
  }
}