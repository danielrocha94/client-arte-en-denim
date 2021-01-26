import { FETCH_PAYMENTS, FETCH_BALANCES, CLIENT_LOGIN, CLIENT_LOGOUT, CLIENT_ERROR, FETCH_ACCOUNT_INFO} from '../actions/types';

const initialState = {
  payments: [],
  balances: [],
  data: {},
  user: {},
  error: null,
  isAuthenticated: false,
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_PAYMENTS:
      return {...state, payments: {...action.payload}}
    case FETCH_BALANCES:
      return {...state, balances: {...action.payload}}
    case CLIENT_LOGIN:
      return {...state, ...action.payload} 
    case CLIENT_LOGOUT:
      return {...state, isAuthenticated: false, user: {} }
    case FETCH_ACCOUNT_INFO:
      return {...state, data: {...action.payload}}
    case CLIENT_ERROR:
      return {...state, error: action.payload}
    default:
      return state;
  }
}