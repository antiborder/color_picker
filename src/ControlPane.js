import './App.css';
import convert from 'color-convert';
import { useState, useEffect } from 'react';
import styled from 'styled-components';


const ControlPane = (props) => {
  const [focusR, setFocusR] = useState(props.focusR)
  const [focusG, setFocusG] = useState(props.focusG)
  const [focusB, setFocusB] = useState(props.focusB)

  useEffect(
    () => {
      setFocusR(props.focusR);
      setFocusG(props.fucusG);
      setFocusB(props.fucusB);
    }
    , [props.focusR, props.focusG, props.focusB]);


  const handleChange = (event, colorParam) => {
    setFocusR(props.focusR)
    setFocusG(props.focusG)
    setFocusB(props.focusB)
    props.onChange(event, colorParam)
  }

  return (
    <StyledControlPane
    >
      <div className='controlItemWrapper' >
        <div >
          <button onClick={props.handleShape}>Shape</button>
        </div>
        <div >
          <button onClick={props.handleLabel}>Label</button>
        </div>
      </div>
      <div className='controlItemWrapper' >
        <div style={{ backgroundColor: props.focus, width: '50px', margin: '24px 24px 0px 24px' }}>current  </div>
      </div>
      <div>{convert.rgb.hex(props.focusR, props.focusG, props.focusB)} </div>
      <div>{convert.rgb.hex(focusR, focusG, focusB)} </div>
      <div>{props.focusR} {props.focusG}, {props.focusB} </div>
      {props.focusR}
      <SliderContainer
        value={props.focusR}
        onChange={(event) => handleChange(event, 'R')}
      />
      {props.focusG}
      <SliderContainer
        value={props.focusG}
        onChange={(event) => handleChange(event, 'G')}
      />
      {props.focusB}
      <SliderContainer
        value={props.focusB}
        onChange={(event) => handleChange(event, 'B')}
      />

      <div style={{ backgroundColor: '#FF0000', width: '50px', margin: '24px 24px 0px 24px' }}>        R    </div>
      <div style={{ backgroundColor: '#00FF00', width: '50px', margin: '24px 24px 0px 24px' }}>        G      </div>
      <div style={{ backgroundColor: '#0000FF', width: '50px', margin: '24px 24px 0px 24px' }}>        B      </div>
      <div style={{ backgroundColor: '#FFFFFF', width: '50px', margin: '24px 24px 0px 24px' }}>        W      </div>
      <div style={{ backgroundColor: '#000000', color: '#FFFFFF', width: '50px', margin: '24px 24px 0px 24px' }}>        K      </div>
    </StyledControlPane>
  )
}

const SliderContainer = (props) => {
  const [value, setValue] = useState(props.value)

  const handleChange = (event) => {
    setValue(event.target.value);
    props.onChange(event)
  }

  return (
    <StyledSliderContainer>
      <input type="range" min="0" max="255" step="1" value={props.value} onChange={handleChange} />
      <div>
        {props.value}
      </div>
    </StyledSliderContainer>
  );
}

const StyledControlPane = styled.div`
  
    // display: flex;
    // flex-direction: column;
    position: absolute;
    top: 30px;
    left: 30px;
    background-color: white;
    border-radius: 12px;
    opacity: 0.8;
    
    .controlItemWrapper{
      top: 8px;
      display: flex;
      // flex-direction: row;
      text-align: left;
    }
    .controlIconWrapper{
      margin-top: 4px;
      margin-left:4px;
    }
  `;

const StyledSliderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    padding: 5px;
  
    .label-on{
      font-size:20px;
      color: black;
    }
    .label-off{
      font-size:20px;
      color: gray;
    }
  `;

export default ControlPane;