import { useState } from 'react';
import styled from 'styled-components';
import convert from 'color-convert';
import TwoDPicker from './TwoDPicker'

import './App.css';
import { systemColors } from './constants/systemColors.js'
import { SyncIcon } from './assets/Icons.js';

const ControlPane = (props) => {

  return (
    <StyledControlPane>
      <CurrentColor {...props} />

      <RgbSliders {...props}
        mainElement={props.rgbMainElement}
        setMainElement={props.setRgbMainElement}
        panelShape={'RGB'}
      />
      <CmykSliders {...props}
        mainElement={props.cmykMainElement}
        setMainElement={props.setCmykMainElement}
        panelShape={'CMYK'}
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
    else {
      // setIsHexFormat(false)
    }
  }
  const isUpdatable = () => {
    return props.hexInput !== convert.rgb.hex([props.focusR, props.focusG, props.focusB])
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
  const isHexFormat = () => {
    return props.hexInput.match(/^[0-9A-Fa-f]{6}$/) ? true : false
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
          <button className={(isUpdatable() && isHexFormat()) ? 'activeUpdateButton' : 'inactiveUpdateButton'}
            onClick={() => handleHexUpdate()}
          ><SyncIcon /></button>
        </div>
      </div>
    </StyledCurrentColor>
  )
}

const RgbSliders = (props) => {
  const [isVisible, setIsVisible] = useState(props.shape === 'RGB')
  return (
    <div className='controlPanel'>
        <div
          style={{
            display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
            height: '24px',
          }}
        >
          <ShapeButton {...props}
            setIsVisible={setIsVisible}
            shapeName={'RGB'}
            content={'R:Red(赤)　\nG:Green(緑)\nB:Blue(青)'}
          />
          <button
            className='showSlidersButton'
            onClick={() => { setIsVisible(!isVisible) }}
          >
            {isVisible ? '−' : '＋'}
          </button>
        </div>

      {isVisible && <>
        <SliderContainer {...props}
          symbol={'R'}
          value={props.focusR}
          max={255}
          color={systemColors['R']}
          onChange={(event) => props.onRgbChange(event, 'R')}
        />
        <SliderContainer {...props}
          symbol={'G'}
          value={props.focusG}
          max={255}
          color={systemColors['G']}
          onChange={(event) => props.onRgbChange(event, 'G')}
        />
        <SliderContainer {...props}
          symbol={'B'}
          value={props.focusB}
          max={255}
          color={systemColors['B']}
          onChange={(event) => props.onRgbChange(event, 'B')}
        />
      </>}
    </div>
  )
}

const CmykSliders = (props) => {
  const [isVisible, setIsVisible] = useState(props.shape === 'CMYK')
  return (
    <div className='controlPanel'>
        <div
          style={{
            display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
            height: '24px',
          }}
        >
          <ShapeButton {...props}
            setIsVisible={setIsVisible}
            shapeName={'CMYK'}
            content={'C:Cyan(シアン)\nM:Magenta(マゼンタ)\nY:Yellow(黄)\nK:Key(黒)'}
          />
          <button
            className='showSlidersButton'
            onClick={() => { setIsVisible(!isVisible) }}
          >
            {isVisible ? '−' : '＋'}
          </button>
        </div>

      {isVisible && <>
        <SliderContainer {...props}
          symbol={'C'}
          value={props.focusC}
          max={100}
          color={systemColors['C']}
          onChange={(event) => props.onCmykChange(event, 'C')}
        />
        <SliderContainer {...props}
          symbol={'M'}
          value={props.focusM}
          max={100}
          color={systemColors['M']}
          onChange={(event) => props.onCmykChange(event, 'M')}
        />
        <SliderContainer {...props}
          symbol={'Y'}
          value={props.focusY}
          max={100}
          color={systemColors['Y']}
          onChange={(event) => props.onCmykChange(event, 'Y')}
        />
        <SliderContainer {...props}
          symbol={'K'}
          value={props.focusK}
          max={100}
          color={systemColors['K']}
          onChange={(event) => props.onCmykChange(event, 'K')}
        />
      </>}
    </div>
  )
}

const HsvSliders = (props) => {
  const [isVisible, setIsVisible] = useState(props.shape === 'HSV')
  return (
    <div className='controlPanel'>
      <div
        style={{
          display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
          height: '24px',
        }}
      >
        <ShapeButton {...props}
          setIsVisible={setIsVisible}
          shapeName={'HSV'}
          content={'H:Hue(色相)\nS:Satulation(彩度)\nV:Value(輝度)'}
        />
        <button
          className='showSlidersButton'
          onClick={() => { setIsVisible(!isVisible) }}
        >
          {isVisible ? '−' : '＋'}
        </button>
      </div>

      {isVisible && <>
        <SliderContainer {...props}
          symbol={'H'}
          value={props.focusH}
          max={360}
          color={systemColors['K']}
          onChange={(event) => props.onHsvChange(event, 'H')}
        />
        <SliderContainer {...props}
          symbol={'S'}
          value={props.focusHsvS}
          max={100}
          color={systemColors['K']}
          onChange={(event) => props.onHsvChange(event, 'HsvS')}
        />
        <SliderContainer {...props}
          symbol={'V'}
          value={props.focusV}
          max={100}
          color={systemColors['K']}
          onChange={(event) => props.onHsvChange(event, 'V')}
        />
      </>}
    </div>
  )
}

const HslSliders = (props) => {
  const [isVisible, setIsVisible] = useState(props.shape === 'HSL')
  return (
    <div className='controlPanel'>
      <div
        style={{
          display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
          height: '24px',
        }}
      >
        <ShapeButton {...props}
          setIsVisible={setIsVisible}
          shapeName={'HSL'}
          content={'H:Hue(色相)\nS:Satulation(彩度)\nL:Lightness(明度)'}
        />
        <button
          className='showSlidersButton'
          onClick={() => { setIsVisible(!isVisible) }}
        >
          {isVisible ? '−' : '＋'}
        </button>
      </div>
      {isVisible && <>
        <SliderContainer {...props}
          symbol={'H'}
          value={props.focusH}
          max={360}
          color={systemColors['K']}
          onChange={(event) => props.onHslChange(event, 'H')}
        />
        <SliderContainer {...props}
          symbol={'S'}
          value={props.focusS}
          max={100}
          color={systemColors['K']}
          onChange={(event) => props.onHslChange(event, 'S')}
        />
        <SliderContainer {...props}
          symbol={'L'}
          value={props.focusL}
          max={100}
          color={systemColors['K']}
          onChange={(event) => props.onHslChange(event, 'L')}
        />
      </>}
    </div>
  )
}

const ShapeButton = (props) => {
  const [isHovered, setIsHovered] = useState(false)
  const handlePointerOver = () => {
    setIsHovered(true)
  }
  const handlePointerOut = () => {
    setIsHovered(false)
  }
  return (
    <>
      <div style={{ height: '24px' }}>
        <button
          className={props.shape === props.shapeName ? 'inactiveShapeButton' : 'activeShapeButton'}
          onClick={() => { props.setIsVisible(true); props.onShapeClick(props.shapeName) }}
          onPointerOver={() => handlePointerOver()}
          onPointerOut={() => handlePointerOut()}
        >
          {props.shapeName}
        </button>
        {((isHovered)) &&
          <div className='shapeBubble' >
            {props.content}
          </div>
        }
      </div>
    </>

  )
}

function SliderContainer(props) {
  const [, setValue] = useState(props.value);
  const isActive = props.mainElement === props.symbol && props.shape === props.panelShape;

  const handleChange = (event) => {
    setValue(event.target.value);
    props.onChange(event);
  };

  return (
    <StyledSliderContainer>
      {props.symbol !== 'K' &&
        <button
          onClick={() => props.setMainElement(props.symbol)}
          className={isActive ? 'mainElement labelOn' : 'mainElement labelOff'}>
          {props.mainElement === props.symbol ?
            <div style={{
              marginLeft: "-4px",
              marginTop: "-3px",
              color: isActive ? systemColors["INACTIVE"] : props.color
            }}>
              ■
            </div> :
            <div style={{
              marginLeft: "-6px",
              marginTop: "-3px",
              color: props.color
            }}>
              ・
            </div>}
        </button>}
      {props.symbol == 'K' && <div style={{ width: '22px' }}></div>}
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
      padding: 4px 12px 4px 6px;
      min-height: 28px;
    }

    .showSlidersButton{
      border: none;
      background-color: white;
      color: #AAAAAA;
      font-weight: bold;
      font-size: 12px;
      margin-right: 20px;
      cursor: pointer;
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

    .shapeBubble{
      position: relative;
      top: -100px;
      left: 48px;
      width: 180px;
      background: gray;
      color: white;
      border-radius: 12px 12px 12px 0px;
      font-size: 16px;
      padding: 4px 8px;
      text-align:left;
      z-index: 1;
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
      border: solid 2px ${systemColors["INACTIVE"]};
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
    color : #000000;
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