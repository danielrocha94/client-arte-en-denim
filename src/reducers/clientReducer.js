import { FETCH_PAYMENTS, FETCH_BALANCES, CLIENT_LOGIN, CLIENT_LOGOUT, FETCH_ACCOUNT_INFO} from '../actions/types';

const initialState = {
  payments: [],
  balances: [],
  data: {},
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
    case FETCH_ACCOUNT_INFO:
      return {...state, data: {...action.payload}}
    default:
      return state;
  }
}