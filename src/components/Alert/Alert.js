import React from 'react';
import FormFlashMessage from './FormFlashMessage';
import {AlertContainer} from './style';
import {connect} from 'react-redux';
import {fetchFlashMessagesRequest} from '../../actions/alertActions';

class Alert extends React.Component {
  constructor(){
    super();

    this.state = {
      FETCH_ALL_FLASH_MESSAGES: [],
    }
  }

  render() {
    return (
      <AlertContainer>
        {!!this.props.FETCH_ALL_FLASH_MESSAGES.length &&
          this.props.FETCH_ALL_FLASH_MESSAGES.map((flash, index) => {
            return <FormFlashMessage key={index} closeTime={flash.closeTime} variant={flash.variant}>{flash.message}</FormFlashMessage>
          })
        }  
      </AlertContainer>
    )
  }
}

const mapState = state => {
  return {
    FETCH_ALL_FLASH_MESSAGES: state.alert.FETCH_ALL_FLASH_MESSAGES,
  }
};

export default connect(mapState, {fetchFlashMessagesRequest})(Alert);