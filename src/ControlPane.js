import { useState } from 'react';
import styled from 'styled-components';
import convert from 'color-convert';
import TwoDPicker from './TwoDPicker'

import './App.css';
import { colors } from './constants/colors.js'

const ControlPane = (props) => {

  return (
    <StyledControlPane>
      
      <div >
        <button onClick={props.handleLabel}>Label</button>
      </div>

      <div className='controlPanel'>
        <div className='currentColor' >
          <div className='color-sample' style={{ backgroundColor: '#' + convert.rgb.hex([props.focusR, props.focusG, props.focusB]) }}>&nbsp; </div>
          <div className='hex'>{'#' + convert.rgb.hex([props.focusR, props.focusG, props.focusB])} </div>
        </div>
        {props.focusR},{props.focusG},{props.focusB}| {props.focusH},{props.focusHsvS},{props.focusV}|{props.focusS},{props.focusL}
      </div>

      <RgbSliders {...props}
        mainElement={props.rgbMainElement}
        setMainElement={props.setRgbMainElement}
        panelShape={'RGB'}
      />
      <HsvSliders {...props}
        mainElement={props.hsvMainElement}
        setMainElement={props.setHsvMainElement}
        panelShape={'HSV'}
      />
      <HslSliders {...props}
        mainElement={props.hslMainElement}
        setMainElement={props.setHslMainElement}
        panelShape={'HSL'}
      />

      <TwoDPicker {...props} />

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
    <div className='controlPanel' style={{ padding: '4px' }}>
      <div >
        <button
          onClick={() => props.onShapeClick('RGB')}
          className={props.shape === 'RGB' ? 'inactiveShapeButton' : 'activeShapeButton'
          }>
          RGB
        </button>
      </div>
      <SliderContainer {...props}
        symbol={'R'}
        value={props.focusR}
        max={255}
        color={colors['R']}
        onChange={(event) => props.onRgbChange(event, 'R')}
      />
      <SliderContainer {...props}
        symbol={'G'}
        value={props.focusG}
        max={255}
        color={colors['G']}
        onChange={(event) => props.onRgbChange(event, 'G')}
      />
      <SliderContainer {...props}
        symbol={'B'}
        value={props.focusB}
        max={255}
        color={colors['B']}
        onChange={(event) => props.onRgbChange(event, 'B')}
      />
    </div>
  )
}

const HsvSliders = (props) => {
  return (
    <div className='controlPanel' style={{ padding: '4px' }}>
      <div >
        <button
          onClick={() => props.onShapeClick('HSV')}
          className={props.shape === 'HSV' ? 'inactiveShapeButton' : 'activeShapeButton'}>
          HSV
        </button>
      </div>
      <SliderContainer {...props}
        symbol={'H'}
        value={props.focusH}
        max={360}
        color={colors['K']}
        onChange={(event) => props.onHsvChange(event, 'H')}
      />
      <SliderContainer {...props}
        symbol={'S'}
        value={props.focusHsvS}
        max={100}
        color={colors['K']}
        onChange={(event) => props.onHsvChange(event, 'HsvS')}
      />
      <SliderContainer {...props}
        symbol={'V'}
        value={props.focusV}
        max={100}
        color={colors['K']}
        onChange={(event) => props.onHsvChange(event, 'V')}
      />
    </div>
  )
}


const HslSliders = (props) => {
  return (
    <div className='controlPanel' style={{ padding: '4px 12px 4px 6px' }}>
      <div >
        <button
          onClick={() => props.onShapeClick('HSL')}
          className={props.shape === 'HSL' ? 'inactiveShapeButton' : 'activeShapeButton'}>
          HSL
        </button>
      </div>
      <SliderContainer {...props}
        symbol={'H'}
        value={props.focusH}
        max={360}
        color={colors['K']}
        onChange={(event) => props.onHslChange(event, 'H')}
      />
      <SliderContainer {...props}
        symbol={'S'}
        value={props.focusS}
        max={100}
        color={colors['K']}
        onChange={(event) => props.onHslChange(event, 'S')}
      />
      <SliderContainer {...props}
        symbol={'L'}
        value={props.focusL}
        max={100}
        color={colors['K']}
        onChange={(event) => props.onHslChange(event, 'L')}
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

  const isActive = props.mainElement == props.symbol && props.shape == props.panelShape

  return (

    <StyledSliderContainer>
      <button
        onClick={() => props.setMainElement(props.symbol)}
        className={
          isActive ? 'mainElement labelOn' : 'mainElement labelOff'} >
        {props.mainElement === props.symbol ?
          <div style={{
            marginLeft: "-4px",
            marginTop: "-3px",
            color: isActive ? colors["INACTIVE"] : props.color
          }}>
            ■
          </div> :
          <div style={{
            marginLeft: "-6px",
            marginTop: "-3px",
            color: props.color
          }}>
            ・
          </div>
        }
      </button>

      {props.symbol}
      <input type="range" min="0" step="1" max={props.max} value={props.value} onChange={handleChange} />
      <div className='value'>
        {Math.round(props.value)}
      </div>
    </StyledSliderContainer>
  );
}


const StyledControlPane = styled.div`
  
    position: absolute;
    top: 0px;
    left: 30px;

    .controlPanel{
      background-color: white;
      border-radius: 12px;
      opacity: 0.7;
      margin-top:8px;
    }

    .activeShapeButton{
      background-color: #4E8CEE;
      color: white;
      border: none;
      border-radius: 4px;
      margin-bottom: 8px;
    }
    .inactiveShapeButton{
      background-color: light-gray;
      color: gray;
      border: none;
      border-radius: 4px;
      margin-bottom: 8px;
    }

    .mainElement{
      
      width: 16px;
      height: 16px;
      background-color: white;
      font-weight: bold; 
      border-radius: 4px;
      margin-right: 4px;
      padding-right: 0px 0px 0px -8px;
    }
    
    .labelOn{
      font-size:12px;
      border: solid 2px ${colors["INACTIVE"]};
    }
    .labelOff{
      font-size:12px;
      border: solid 2px #4E8CEE;
    }
    .labelOff:hover{
      cursor: pointer;
    }
    
    .currentColor{
      display: flex;
      flex-direction: row;
    }
    .color-sample{
      margin: 8px 16px 8px 16px;
      border: solid 1px #DDDDDD;
      width: 150px;
    }
    .hex{
      display: flex;
      align-items: center;
      justify-content: center;
    }

  `;

const StyledSliderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0px;

    padding: 0px;
    input{
      width:300px;
    }
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