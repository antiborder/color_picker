import { useState} from 'react';
import styled from 'styled-components';
import convert from 'color-convert';

import './App.css';

const ControlPane = (props) => {
  const [focusR, setFocusR] = useState(props.focusR)
  const [focusG, setFocusG] = useState(props.focusG)
  const [focusB, setFocusB] = useState(props.focusB)
  const [focusH, setFocusH] = useState(props.focusH)
  const [focusS, setFocusS] = useState(props.focusS)
  const [focusL, setFocusL] = useState(props.focusL)

  // useEffect(
  //   () => {
  //     setFocusR(props.focusR);
  //     setFocusG(props.focusG);
  //     setFocusB(props.focusB);
  //     setFocusH(props.focusH);
  //     setFocusS(props.focusS);
  //     setFocusL(props.focusL);
  //   }
  //   , [props.focusR, props.focusG, props.focusB, props.focusH, props.focusS, props.focusL]);


  const handleRgbChange = (event, colorParam) => {
    // switch (colorParam) {
    //   case 'R': setFocusR(props.focusR); console.log(props.focusR);
    //     console.log(convert.rgb.hex([props.focusR,props.focusG,props.focusB]))
    //     break;

    //   case 'G': setFocusG(props.focusG); break;
    //   case 'B': setFocusB(props.focusB); break;
    // }
    // setFocusH(props.focusH);
    // setFocusS(props.focusS);
    // setFocusL(props.focusL);

    props.onRgbChange(event, colorParam)
  }

  const handleHslChange = (event, colorParam) => {
    // setFocusH(props.focusH)
    // setFocusS(props.focusS)
    // setFocusL(props.focusL)
    // setFocusR(props.focusR)
    // setFocusG(props.focusG)
    // setFocusB(props.focusB)
    props.onHslChange(event, colorParam)
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
      <div className='current-color' >
        <div className='color-sample' style={{ backgroundColor: '#' + convert.rgb.hex([props.focusR, props.focusG, props.focusB]) }}>&nbsp; </div>
        <div className='hex'>{'#' + convert.rgb.hex([props.focusR, props.focusG, props.focusB])} </div>
      </div>
      <div style={{ padding: '10px' }}>
        <SliderContainer
          symbol={'R'}
          value={props.focusR}
          max={255}
          onChange={(event) => handleRgbChange(event, 'R')}
        />
        <SliderContainer
          symbol={'G'}
          value={props.focusG}
          max={255}
          onChange={(event) => handleRgbChange(event, 'G')}
        />
        <SliderContainer
          symbol={'B'}
          value={props.focusB}
          max={255}
          onChange={(event) => handleRgbChange(event, 'B')}
        />
      </div>
      <div style={{ padding: '10px' }}>
        <SliderContainer
          symbol={'H'}
          value={props.focusH}
          max={360}
          onChange={(event) => handleHslChange(event, 'H')}
        />
        <SliderContainer
          symbol={'S'}
          value={props.focusS}
          max={100}
          onChange={(event) => handleHslChange(event, 'S')}
        />
        <SliderContainer
          symbol={'L'}
          value={props.focusL}
          max={100}
          onChange={(event) => handleHslChange(event, 'L')}
        />
      </div>
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