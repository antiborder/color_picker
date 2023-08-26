import { useState } from 'react';
import styled from 'styled-components';
import convert from 'color-convert';

import './App.css';

const ControlPane = (props) => {

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
      <div className='current-color' >
        <div className='color-sample' style={{ backgroundColor: '#' + convert.rgb.hex([props.focusR, props.focusG, props.focusB]) }}>&nbsp; </div>
        <div className='hex'>{'#' + convert.rgb.hex([props.focusR, props.focusG, props.focusB])} </div>
      </div>
      <RgbSliders         {...props} />
      <HslSliders        {...props} />
      <HsvSliders        {...props} />

      <div style={{ display: 'flex' }}>
        <div style={{ backgroundColor: '#FF0000', width: '24px', margin: '4px 4px 4px 4px' }}>        R    </div>
        <div style={{ backgroundColor: '#00FF00', width: '24px', margin: '4px 4px 4px 4px' }}>        G      </div>
        <div style={{ backgroundColor: '#0000FF', width: '24px', margin: '4px 4px 4px 4px' }}>        B      </div>
        <div style={{ backgroundColor: '#FFFFFF', width: '24px', margin: '4px 4px 4px 4px' }}>        W      </div>
        <div style={{ backgroundColor: '#000000', color: '#FFFFFF', width: '24px', margin: '4px 4px 4px 4px' }}>        K      </div>
      </div>
    </StyledControlPane>
  )
}

const RgbSliders = (props) => {
  return (
    <div style={{ padding: '10px' }}>
      <SliderContainer
        symbol={'R'}
        value={props.focusR}
        max={255}
        onChange={(event) => props.onRgbChange(event, 'R')}
      />
      <SliderContainer
        symbol={'G'}
        value={props.focusG}
        max={255}
        onChange={(event) => props.onRgbChange(event, 'G')}
      />
      <SliderContainer
        symbol={'B'}
        value={props.focusB}
        max={255}
        onChange={(event) => props.onRgbChange(event, 'B')}
      />
    </div>
  )
}

const HslSliders = (props) => {
  return (
    <div style={{ padding: '10px' }}>
      <SliderContainer
        symbol={'H'}
        value={props.focusH}
        max={360}
        onChange={(event) => props.onHslChange(event, 'H')}
      />
      <SliderContainer
        symbol={'S'}
        value={props.focusS}
        max={100}
        onChange={(event) => props.onHslChange(event, 'S')}
      />
      <SliderContainer
        symbol={'L'}
        value={props.focusL}
        max={100}
        onChange={(event) => props.onHslChange(event, 'L')}
      />
    </div>
  )
}

const HsvSliders = (props) => {
  return (
    <div style={{ padding: '10px' }}>
      <SliderContainer
        symbol={'H'}
        value={props.focusH}
        max={360}
        onChange={(event) => props.onHsvChange(event, 'H')}
      />
      <SliderContainer
        symbol={'S'}
        value={props.focusHsvS}
        max={100}
        onChange={(event) => props.onHsvChange(event, 'HsvS')}
      />
      <SliderContainer
        symbol={'V'}
        value={props.focusV}
        max={100}
        onChange={(event) => props.onHsvChange(event, 'V')}
      />
    </div>
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

      {props.symbol}<input type="range" min="0" step="1" max={props.max} value={props.value} onChange={handleChange} />
      <div className='value'>
        {Math.round(props.value)}
      </div>
    </StyledSliderContainer>
  );
}

const StyledControlPane = styled.div`
  
    // display: flex;
    // flex-direction: column;
    position: absolute;
    top: 50px;
    left: 30px;
    background-color: white;
    border-radius: 12px;
    opacity: 0.8;

    .color-sample{
      margin: 8px 16px 0px 16px;
      border: solid 1px #DDDDDD;
    }
    .hex{
      text-align:center;
    }

    .controlItemWrapper{
      top: 8px;
      display: flex;
      text-align: left;
    }

  `;

const StyledSliderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    padding: 0px;
    .value{
      width:20px;
    }
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