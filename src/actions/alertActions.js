import {FETCH_ALL_FLASH_MESSAGES, CREATE_FLASH_MESSAGE, DELETE_FLASH_MESSAGE} from './types';

export const fetchFlashMessagesRequest = () => dispatch => {
  dispatch({
    type: FETCH_ALL_FLASH_MESSAGES,
  })
}

export const createFlashMessageRequest = (flashParams) => dispatch => {
  dispatch({
    type: CREATE_FLASH_MESSAGE,
    payload: flashParams
  })
}

export const deleteFlashMessageRequest = (flashId) => dispatch => {
  dispatch({
    type: DELETE_FLASH_MESSAGE,
    payload: flashId
  })
}