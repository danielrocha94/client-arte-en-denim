import {CREATE_FLASH_MESSAGE, FETCH_ALL_FLASH_MESSAGES, DELETE_FLASH_MESSAGE} from '../actions/types';

const initialState = {
  FETCH_ALL_FLASH_MESSAGES: [],
  flash_message: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case CREATE_FLASH_MESSAGE:
      return {...state, FETCH_ALL_FLASH_MESSAGES: handleFlashMessagesRequest(state, action)}
    case FETCH_ALL_FLASH_MESSAGES:
      return {...state, FETCH_ALL_FLASH_MESSAGES: {...state.FETCH_ALL_FLASH_MESSAGES, ...action.payload}}
    case DELETE_FLASH_MESSAGE:
      return {...state, FETCH_ALL_FLASH_MESSAGES: handleFlashMessagesRequest(state, action)}
    default:
      return state;
  }
}

const handleFlashMessagesRequest = (state = [], action) => {
  switch(action.type) {
    case CREATE_FLASH_MESSAGE:
      return [
        ...state.FETCH_ALL_FLASH_MESSAGES,
        {
          ...action.payload
        }
      ]
    case DELETE_FLASH_MESSAGE:
      return state.filter(flash => flash.id !== action.id)
    default:
      return state;
  }

}