import React, { useState, useEffect } from 'react';
import {Range, getTrackBackground} from 'react-range';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import BasicInput from './BasicInput';
import _ from 'lodash';

const RangeIndicator = (props) => {
  const [STEP, setStep] = useState((props.max - props.min)/10 || 0.1);
  const [MIN, setMin] = useState(props.min || 0);
  const [MAX, setMax] = useState(props.max || 100);
  const [decimals, setDecimals] = useState(0);
  const [values, setValues] = useState([props.min || 0, props.max || 100]);
  const [inputVal, setInputVal] = useState([props.min || 0, props.max || 100]);

  useEffect(() => {
    setStep((props.max - props.min)/10 || 0.1);
    setMin(props.min || 0);
    setMax(props.max || 100);
    setValues([props.min || 0, props.max || 100]);
    setInputVal([props.min || 0, props.max || 100]);
    setDecimals(getDecimals());
  }, [props.title])

  useEffect(() => {
    setInputVal(values);
    props.onChange && props.onChange(props.title, values)
  }, [values])

  useEffect(() => {
    setDecimals(getDecimals());
  }, [])
  
  const getDecimals = () => {
    let min = props.min.toString();
    let max = props.max.toString();
    let minIndex = min.indexOf(".");
    let maxIndex = max.indexOf(".");
    if (minIndex === -1 && maxIndex === -1) {
      return setDecimals(0);
    }
    let minDecimals = min.length - minIndex - 1;
    let maxDecimals = max.length - maxIndex - 1;
    return (minDecimals > maxDecimals ? minDecimals : maxDecimals);
  }

  const onChange = (e, index) => {
    let val = parseFloat(e.target.value) || 0;
    let newInputVal = {...inputVal};
    newInputVal[index] = val;
    setInputVal(newInputVal);
    props.onChange && props.onChange(props.title, newInputVal);
    _.debounce(() => handleThumbValueChange(e, index), 500 )()
  }

  const handleThumbValueChange = (e, index) => {
    let val = parseFloat(e.target.value) || 0;
    let minThumbVal = values[0].toFixed(decimals);
    let maxThumbVal = values[1].toFixed(decimals);
    let newValues = [...values];

    if (index) {
      if(val <= MAX) {
        newValues[index] = (val >= minThumbVal) ? val : minThumbVal;
      } else {
        newValues[index] = MAX;
      }
    } else {
      if (val >= MIN){
        newValues[index] = (val <= maxThumbVal) ? val : maxThumbVal;
      } else {
        newValues[index] = MIN;
      }
    }
    return setValues(newValues);
  }

  return (
    <div>
      <div style={{color: "white", fontSize: "16px"}}>
        {props.title}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "50px 13px 15px"
        }}
      >
        <Range
          values={values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => setValues(values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '6px',
                width: '100%',
                background: getTrackBackground({
                  values: values,
                  colors: ['#ccc', '#548BF4', '#ccc'],
                  min: MIN,
                  max: MAX
                }),
                alignSelf: 'center',
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props, isDragged, index }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "24px",
                width: "24px",
                borderRadius: "3px",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #AAA"
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-28px',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
                  padding: '4px',
                  borderRadius: '4px',
                  backgroundColor: '#548BF4'
                }}
              >
                {values[index].toFixed(decimals)}
              </div>
              <div
                style={{
                  color: isDragged ? "#548BF4" : "#BBB"
                }}
              >
                <FontAwesomeIcon icon={index === 1 ? faPlus : faMinus}/>
              </div>
            </div>
          )}
        />
      </div>
      <div style={{display: 'flex', justifyContent: "space-between"}}>
        <div style={{width: "35%", marginLeft: "0px"}}>
          <BasicInput title="Min" type="number" value={inputVal[0]} onChange={(e) => onChange(e, 0)}/>
        </div>
        <div style={{width: "35%", marginRight: "15px"}}>
          <BasicInput title="Max" type="number" value={inputVal[1]} onChange={(e) => onChange(e, 1)}/>
        </div>
      </div>
    </div>
  )
}

export default RangeIndicator;