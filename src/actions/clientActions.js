import axios from 'axios';
import {
  API_BASE_URL,
  FETCH_PAYMENTS,
  FETCH_BALANCES
} from './types';
import {dispatchAction} from '../utils/actions/common';

export const fetchClientPayments = (data) => {
  return dispatch => {
    return axios({
      method: 'GET',
      url: API_BASE_URL+'/clients/payments',
      params: data,
      json: true,
    }).then(res => {
      return dispatchAction(dispatch, res, FETCH_PAYMENTS);
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