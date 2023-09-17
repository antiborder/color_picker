import { useState } from 'react';

import convert from 'color-convert';

import './App.css';
import ControlPane from './ControlPane'
import Structure from './Structure'

//平面で選色
//focusのアイコンの色を調整
//focusのアイコンの移動をスムーズに。
//ホバーしたらバブルが出る。バブルから色情報を表示。色を選択できる。
//カラーコードを入力できるように。
//座標軸
//色とshapeとmainElementの初期値はランダムで。
//Focusの残像が残る。
//色の明るさ調整
//表示近さ調整
//RGBとHSLとHSVの解説
//線に沿って選色
//ログイン
//自分のパレットに保存

function App() {

  const [shape, setShape] = useState('RGB')
  const [isLabelShown, setIsLabelShown] = useState(false)
  const [, setLastChanged] = useState('R')

  const [focusR, setFocusR] = useState(255)
  const [focusG, setFocusG] = useState(255)
  const [focusB, setFocusB] = useState(255)

  const [focusH, setFocusH] = useState(0)
  const [focusS, setFocusS] = useState(100)
  const [focusL, setFocusL] = useState(100)

  const [focusHsvS, setFocusHsvS] = useState(100)
  const [focusV, setFocusV] = useState(100)
  
  const [rgbMainElement, setRgbMainElement] = useState('R')
  const [hslMainElement, setHslMainElement] = useState('H')
  const [hsvMainElement, setHsvMainElement] = useState('H')

  const handleRgbChange = (event, colorParam) => {
    setLastChanged(colorParam);
    switch (colorParam) {
      case 'R':
        setFocusR(event.target.value); break;
      case 'G':
        setFocusG(event.target.value); break;
      case 'B':
        setFocusB(event.target.value); break;
      default:
        setFocusR(event.target.value); break;
    }
    setFocusH(convert.rgb.hsl([focusR, focusG, focusB])[0]);
    setFocusS(convert.rgb.hsl([focusR, focusG, focusB])[1]);
    setFocusL(convert.rgb.hsl([focusR, focusG, focusB])[2]);
    //RGBからHSVに変換
    setFocusHsvS(convert.rgb.hsv([focusR, focusG, focusB])[1]);
    setFocusV(convert.rgb.hsv([focusR, focusG, focusB])[2]);
  }

  const handleHslChange = (event, colorParam) => {
    switch (colorParam) {
      case 'H':
        setFocusH(event.target.value); break;
      case 'S':
        setFocusS(event.target.value); break;
      case 'L':
        setFocusL(event.target.value); break;
    }
    setFocusR(convert.hsl.rgb([focusH, focusS, focusL])[0]);
    setFocusG(convert.hsl.rgb([focusH, focusS, focusL])[1]);
    setFocusB(convert.hsl.rgb([focusH, focusS, focusL])[2]);
    //HSLからHSVに変換
    setFocusHsvS(convert.hsl.hsv([focusH, focusS, focusL])[1]);
    setFocusV(convert.hsl.hsv([focusH, focusS, focusL])[2]);

  }

  const handleHsvChange = (event, colorParam) => {
    switch (colorParam) {
      case 'H':
        setFocusH(event.target.value); break;
      case 'HsvS':
        setFocusHsvS(event.target.value); break;
      case 'V':
        setFocusV(event.target.value); break;
    }
    //HSVからRGBに変換
    setFocusR(convert.hsv.rgb([focusH, focusHsvS, focusV])[0]);
    setFocusG(convert.hsv.rgb([focusH, focusHsvS, focusV])[1]);
    setFocusB(convert.hsv.rgb([focusH, focusHsvS, focusV])[2]);
    //HSVからHSLに変換
    setFocusS(convert.hsv.hsl([focusH, focusHsvS, focusV])[1]);
    setFocusL(convert.hsv.hsl([focusH, focusHsvS, focusV])[2]);
  }

  const handleClick = (r, g, b) => {
    setFocusR(r)
    setFocusG(g)
    setFocusB(b)
    setFocusH(convert.rgb.hsl([r, g, b])[0])
    setFocusS(convert.rgb.hsl([r, g, b])[1])
    setFocusL(convert.rgb.hsl([r, g, b])[2])
  }
  const handleLabel = () => {
    setIsLabelShown(isLabelShown ? false : true);
  };
  const handleShapeClick = (shape) => {
    switch(shape){
      case 'RGB':
        setShape('RGB'); break;
      case 'HSL': 
        setShape('HSL'); break;
      case 'HSV':
        setShape('HSV'); break;
    }
  };

  return (
    <>

      <div className="App">
        {focusR},
        {focusG},
        {focusB}
        <br />
        {focusH},
        {focusS},
        {focusL}
        <br />
        {rgbMainElement},
        {hslMainElement},
        {hsvMainElement}
      </div>

      <Structure 
        shape ={shape}
        isLabelShown = {isLabelShown}
        onClick = {handleClick}
        focusR={focusR}
        focusG={focusG}
        focusB={focusB}
        focusH={focusH}
        focusS={focusS}
        focusL={focusL}
        focusHsvS={focusHsvS}
        focusV={focusV}
        rgbMainElement={rgbMainElement}
        hslMainElement={hslMainElement}
        hsvMainElement={hsvMainElement}
        />
      <ControlPane
        handleLabel={handleLabel}
        handleClick={handleClick}
        onShapeClick={handleShapeClick}
        onRgbChange={handleRgbChange}
        onHslChange={handleHslChange}
        onHsvChange={handleHsvChange}
        setRgbMainElement={(symbol)=>{
          setShape('RGB');
          setRgbMainElement(symbol);
        }}
        setHslMainElement={(symbol)=>{
          setShape('HSL');
          setHslMainElement(symbol);
        }}
        setHsvMainElement={(symbol)=>{
          setShape('HSV');          
          setHsvMainElement(symbol);
        }}

        shape={shape}
        focusR={focusR}
        focusG={focusG}
        focusB={focusB}
        focusH={focusH}
        focusS={focusS}
        focusL={focusL}
        focusHsvS={focusHsvS}
        focusV={focusV} 
        rgbMainElement={rgbMainElement}
        hslMainElement={hslMainElement}
        hsvMainElement={hsvMainElement}
      />
    </>
  );
}

export default App;

