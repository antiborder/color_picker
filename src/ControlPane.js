import { useState } from 'react';
import styled from 'styled-components';
import convert from 'color-convert';
import TwoDPicker from './TwoDPicker'

import './App.css';
import { colors } from './constants/colors.js'
import {SyncIcon} from './assets/Icons.js';

const ControlPane = (props) => {

  return (
    <StyledControlPane>
      <CurrentColor {...props} />

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

      {/* <div style={{ display: 'flex' }}>
        <div style={{ backgroundColor: '#FF0000', width: '24px', margin: '4px 4px 4px 4px' }}>        R    </div>
        <div style={{ backgroundColor: '#00FF00', width: '24px', margin: '4px 4px 4px 4px' }}>        G      </div>
        <div style={{ backgroundColor: '#0000FF', width: '24px', margin: '4px 4px 4px 4px' }}>        B      </div>
        <div style={{ backgroundColor: '#FFFFFF', width: '24px', margin: '4px 4px 4px 4px' }}>        W      </div>
        <div style={{ backgroundColor: '#000000', color: '#FFFFFF', width: '24px', margin: '4px 4px 4px 4px' }}>        K      </div>
      </div> */}
    </StyledControlPane>
  )
}

const CurrentColor = (props) => {
  // const [isHexFormat, setIsHexFormat] = useState(true)
  const handleHexUpdate = () => {
    if (props.hexInput.match(/^[0-9A-Fa-f]{6}$/)) {
      // setIsHexFormat(true)
      props.onHexUpdate()
    }
    else{
      // setIsHexFormat(false)
    }
  }
  const isUpdatable = ()=>{
    return props.hexInput!==convert.rgb.hex([props.focusR,props.focusG,props.focusB])
  }
  const handleChange = (value) => {
    props.setHexInput(value)
    // if (value.match(/^[0-9A-Fa-f]{6}$/)) {
    //   setIsHexFormat(true)

    // }
    // else{
    //   setIsHexFormat(false)
    // }
    console.log(isHexFormat())

  }
  const isHexFormat = ()=>{
    return props.hexInput.match(/^[0-9A-Fa-f]{6}$/)? true:false
  }
  return (
    <StyledCurrentColor>
    <div className='controlPanel'>
      <div className='currentColor' >
        <div className='color-sample' style={{ backgroundColor: '#' + convert.rgb.hex([props.focusR, props.focusG, props.focusB]) }}>&nbsp; </div>
        <div className='hex'>#</div>
        <input className='hexInput'
          type="text"
          value={props.hexInput}
          onChange={(event) => handleChange(event.target.value)}
        />
        <button className={(isUpdatable() && isHexFormat()) ? 'activeUpdateButton':'inactiveUpdateButton'}
          onClick={() => handleHexUpdate()}
        ><SyncIcon/></button>
      </div>
    </div>
    </StyledCurrentColor>
  )
}

const RgbSliders = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className='controlPanel' style={{ padding: '4px' }}>
      <div >
        <button
          onClick={() => {setIsVisible(true);props.onShapeClick('RGB')}}
          className={props.shape === 'RGB' ? 'inactiveShapeButton' : 'activeShapeButton'
          }>
          RGB
        </button>
        <button
        class = 'showSlidersButton'
        onClick={()=>{setIsVisible(!isVisible)}}
        >
          {isVisible ? '−' : '＋' }
        </button>
      </div>
      {isVisible &&<SliderContainer {...props}
        symbol={'R'}
        value={props.focusR}
        max={255}
        color={colors['R']}
        onChange={(event) => props.onRgbChange(event, 'R')}
      />}
      {isVisible &&<SliderContainer {...props}
        symbol={'G'}
        value={props.focusG}
        max={255}
        color={colors['G']}
        onChange={(event) => props.onRgbChange(event, 'G')}
      />}
      {isVisible &&<SliderContainer {...props}
        symbol={'B'}
        value={props.focusB}
        max={255}
        color={colors['B']}
        onChange={(event) => props.onRgbChange(event, 'B')}
      />}
    </div>
  )
}

const HsvSliders = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className='controlPanel' style={{ padding: '4px' }}>
      <div >
        <button
          onClick={() => {setIsVisible(true);props.onShapeClick('HSV');}}
          className={props.shape === 'HSV' ? 'inactiveShapeButton' : 'activeShapeButton'}>
          HSV
        </button>
        <button
        class = 'showSlidersButton'
        onClick={()=>{setIsVisible(!isVisible)}}
        >
{isVisible ? '−' : '＋' }
        </button>

      </div>
      {isVisible &&<SliderContainer {...props}
        symbol={'H'}
        value={props.focusH}
        max={360}
        color={colors['K']}
        onChange={(event) => props.onHsvChange(event, 'H')}
      />}
      {isVisible &&<SliderContainer {...props}
        symbol={'S'}
        value={props.focusHsvS}
        max={100}
        color={colors['K']}
        onChange={(event) => props.onHsvChange(event, 'HsvS')}
      />}
      {isVisible &&<SliderContainer {...props}
        symbol={'V'}
        value={props.focusV}
        max={100}
        color={colors['K']}
        onChange={(event) => props.onHsvChange(event, 'V')}
      />}
    </div>
  )
}

const HslSliders = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className='controlPanel' style={{ padding: '4px 12px 4px 6px' }}>
      <div >
        <button
          onClick={() => {setIsVisible(true);props.onShapeClick('HSL')}}
          className={props.shape === 'HSL' ? 'inactiveShapeButton' : 'activeShapeButton'}>
          HSL
        </button>
        <button
        class = 'showSlidersButton'
        onClick={()=>{setIsVisible(!isVisible)}}
        >
{isVisible ? '−' : '＋'}
        </button>
      </div>
      {isVisible &&<SliderContainer {...props}
        symbol={'H'}
        value={props.focusH}
        max={360}
        color={colors['K']}
        onChange={(event) => props.onHslChange(event, 'H')}
      />}
      {isVisible && <SliderContainer {...props}
        symbol={'S'}
        value={props.focusS}
        max={100}
        color={colors['K']}
        onChange={(event) => props.onHslChange(event, 'S')}
      />}
      {isVisible && <SliderContainer {...props}
        symbol={'L'}
        value={props.focusL}
        max={100}
        color={colors['K']}
        onChange={(event) => props.onHslChange(event, 'L')}
      />}
    </div>
  )
}

const SliderContainer = (props) => {
  const [, setValue] = useState(props.value)

  const handleChange = (event) => {
    setValue(event.target.value);
    props.onChange(event)
  }

  const isActive = props.mainElement === props.symbol && props.shape === props.panelShape

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
    width: 340px;
    position: absolute;
    top: 0px;
    left: 30px;

    .controlPanel{
      background-color: white;
      border-radius: 12px;
      opacity: 1.0;
      margin-top:8px;
    }

    .activeShapeButton{
      background-color: #4E8CEE;
      color: white;
      border: none;
      border-radius: 4px;
      margin-bottom: 8px;
      font-weight: bold;
      cursor: pointer;
    }
    .inactiveShapeButton{
      background-color: light-gray;
      color: gray;
      border: none;
      border-radius: 4px;
      margin-bottom: 8px;
      font-weight: bold;
    }

    .showSlidersButton{
      border: none;
      background-color: white;
      color: #AAAAAA;
      font-weight: bold;
      font-size: 12px;
      float: right;
      margin-right: 20px;
      cursor: pointer;
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

  `;

const StyledCurrentColor = styled.div`
.currentColor{
  display: flex; /* 親要素をフレックスコンテナにする */
  align-items: center; /* 要素を縦方向に中央寄せする */
  font-size: 20px;
  .color-sample{
    margin: 8px 16px 8px 16px;
    border: solid 1px #AAAAAA;
    width: 150px;
    height:24px;
  }
  .hex{
    display: flex;
    align-items: center;
    justify-content: center;
    color : #AAAAAA;
  }

  .hexInput{
    width: 64px;
    height:24px;
    font-size: 16px;
    border: solid 1px #999999;
    color : #AAAAAA;
    margin-right: 8px;
  }
  .activeUpdateButton{
    width: 60px;
    height: 24px;
    background-color: #4E8CEE;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .inactiveUpdateButton{
    width: 60px;
    height: 24px;
    background-color: #CCCCCC;
    border: none;
    border-radius: 4px;
  }
}
`;


const StyledSliderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0px;
    width: 320px;

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