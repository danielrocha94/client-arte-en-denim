import axios from 'axios';
import {
  API_BASE_URL,
  FETCH_PAYMENTS,
  FETCH_BALANCES,
  CLIENT_LOGOUT,
  CLIENT_LOGIN,
  CLIENT_ERROR,
  FETCH_ACCOUNT_INFO
} from './types';
import {dispatchAction} from '../utils/actions/common';

axios.interceptors.request.use(config => {
  const token = localStorage.getItem('auth-token');
  config.headers.authorization = `Bearer ${token}`;
  return config;
})

export const fetchClientPayments = (data) => {
  return dispatch => {
    return axios({
      method: 'GET',
      url: API_BASE_URL+'/clients/payments',
      params: data,
      json: true,
    }).then(res => {
      return dispatchAction(dispatch, res, FETCH_PAYMENTS);
    }).catch(err => {
      if (err.response.status === 401){

      }
    })
  }
}

export const fetchClientBalances = (data) => {
  return dispatch => {
    return axios({
      method: 'GET',  
      url: API_BASE_URL+'/clients/balance',
      params: data,
      json: true,
    }).then(res => {
      return dispatchAction(dispatch, res, FETCH_BALANCES);
    })
  }
}

export const clientLoginRequest = (credentials) => {
  return dispatch => {
    return axios({
      method: 'POST',
      url: API_BASE_URL+'/login',
      data: credentials,
      json: true,
    }).then(res => {
      if(res.data.isAuthenticated) {
        localStorage.setItem('auth-token', res.headers["auth-token"]);
        dispatchAction(dispatch, res, CLIENT_LOGIN);
      } else {
        dispatch({type: CLIENT_ERROR, payload: res.data.message})
      }
    }).catch((err) => {
      dispatch({type: CLIENT_ERROR, payload: err.response.data.error})
    })
  }
}

export const clientTokenLoginRequest = () => {
  return dispatch => {
    return axios({
      method: 'POST',
      url: API_BASE_URL+'/tokenLogin',
      json: true,
    }).then(res => {
      dispatchAction(dispatch, res, CLIENT_LOGIN);
    })
  }
}

export const clientLogoutRequest = () => {
  return dispatch => {
    localStorage.removeItem('auth-token');
    return dispatch({type: CLIENT_LOGOUT})
  }
}

export const clientAccountInfo = (data) => {
  return dispatch => {
    return axios({
      method: 'GET',  
      url: API_BASE_URL+'/clients/accountInfo',
      params: data,
      json: true,
    }).then(res => {
      return dispatchAction(dispatch, res, FETCH_ACCOUNT_INFO);
    })
  }
}