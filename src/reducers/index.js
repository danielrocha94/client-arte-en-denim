import { combineReducers } from 'redux';

import client from './clientReducer';
import alert from './alertReducer';

export default combineReducers({
  client,
  alert,
})