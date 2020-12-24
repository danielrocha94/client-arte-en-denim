import React from 'react';
import {Spinner, DimScreen, MiddleLine, LoadingText} from './style';
import {faSpinner, faCircleNotch, faCog, faSync} from '@fortawesome/free-solid-svg-icons'

const FullPageSpinner = () => {
  return (
    <DimScreen>
      <MiddleLine>
        <Spinner icon={faSync}/>
        <LoadingText>Loading...</LoadingText>
      </MiddleLine>
    </DimScreen>
  );
};

export default FullPageSpinner;