import { useState } from 'react';
import styled from 'styled-components';
import convert from 'color-convert';

import './App.css';

const ControlPane = (props) => {

  return (
    <StyledControlPane
    >

      <div >
        <button onClick={props.handleLabel}>Label</button>
      </div>

      <div className='controlPanel'>
        <div className='currentColor' >
          <div className='color-sample' style={{ backgroundColor: '#' + convert.rgb.hex([props.focusR, props.focusG, props.focusB]) }}>&nbsp; </div>
          <div className='hex'>{'#' + convert.rgb.hex([props.focusR, props.focusG, props.focusB])} </div>
        </div>
      </div>

      <RgbSliders {...props}
        mainElement={props.rgbMainElement}
        setMainElement={props.setRgbMainElement}
      />
      <HsvSliders {...props}
        mainElement={props.hsvMainElement}
        setMainElement={props.setHsvMainElement}
      />
      <HslSliders {...props}
        mainElement={props.hslMainElement}
        setMainElement={props.setHslMainElement}
      />

      {/* <TwoDPicker /> */}

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
    <div className='controlPanel' style={{ padding: '10px' }}>
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
        onChange={(event) => props.onRgbChange(event, 'R')}
      />
      <SliderContainer {...props}
        symbol={'G'}
        value={props.focusG}
        max={255}
        onChange={(event) => props.onRgbChange(event, 'G')}
      />
      <SliderContainer {...props}
        symbol={'B'}
        value={props.focusB}
        max={255}
        onChange={(event) => props.onRgbChange(event, 'B')}
      />
    </div>
  )
}

const HsvSliders = (props) => {
  return (
    <div className='controlPanel' style={{ padding: '10px' }}>
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
        onChange={(event) => props.onHsvChange(event, 'H')}
      />
      <SliderContainer {...props}
        symbol={'S'}
        value={props.focusHsvS}
        max={100}
        onChange={(event) => props.onHsvChange(event, 'HsvS')}
      />
      <SliderContainer {...props}
        symbol={'V'}
        value={props.focusV}
        max={100}
        onChange={(event) => props.onHsvChange(event, 'V')}
      />
    </div>
  )
}


const HslSliders = (props) => {
  return (
    <div className='controlPanel' style={{ padding: '10px' }}>
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
        onChange={(event) => props.onHslChange(event, 'H')}
      />
      <SliderContainer {...props}
        symbol={'S'}
        value={props.focusS}
        max={100}
        onChange={(event) => props.onHslChange(event, 'S')}
      />
      <SliderContainer {...props}
        symbol={'L'}
        value={props.focusL}
        max={100}
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

  return (

    <StyledSliderContainer>
      <button
        onClick={() => props.setMainElement(props.symbol)}
        className={props.mainElement === props.symbol ? 'mainElement labelOn' : 'mainElement labelOff'} >
        {props.mainElement === props.symbol ?
          <div style={{ marginLeft: "-3px", marginTop: "-2px" }}>□</div> :
          <div style={{ marginLeft: "-5px", marginTop: "-2px" }}>・</div>
        }
      </button>

      {props.symbol}<input type="range" min="0" step="1" max={props.max} value={props.value} onChange={handleChange} />
      <div className='value'>
        {Math.round(props.value)}
      </div>
    </StyledSliderContainer>
  );
}

const TwoDPicker = (props) => {
  return (

    <StyledTwoDPicker>
      <div className='controlPanel' style={{ padding: '10px' }}>
        <div className='colorSquare'>
          <>
            {Array.from({ length: 256 }, (_, index) => index).map((i) => 

                <><div className='colorRow'>
                  {
                    Array.from({ length: 256 }, (_, index) => index).map((j) => (
                      <div 
                      className='colorElement' 
                      style={{'backgroundColor':'#'+convert.rgb.hex([0,i,j])}} 
                      key={[i, j]}>
                      {/* {i},{j} */}
                      </div>
                    ))
                  }
                </div></>

            )}
          </>
        </div>
      </div>
    </StyledTwoDPicker>
  );

}

const StyledTwoDPicker = styled.div`
position:relative;
 .colorSquare{
    width:300px;
    height:300px;
    .colorRow{
      display:flex;
      flex-direction:row;
    }
    .colorElement{
      height:1px;
      width:1px;
    }
 }
`;

const StyledControlPane = styled.div`
  
    position: absolute;
    top: 50px;
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
      border: solid 1px gray;
    }
    .labelOff{
      font-size:12px;
      border: solid 1px #4E8CEE;
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
    margin-bottom: 5px;
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