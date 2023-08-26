import { useState } from 'react';

import convert from 'color-convert';

import './App.css';
import ControlPane from './ControlPane'
import Space from './Space'


//particleの8というマジックナンバーを消す
//座標軸
//ホバーしたら大きくなる。大きくならないとクリックできない。
//focusのアイコンを立体的に回転
//RGBとHSLとHSVのボタン
//色の明るさ調整
//表示近さ調整
//RGBとHSLとHSVの解説
//平面で選色
//線に沿って選色
//ログイン
//自分のパレットに保存

function App() {

  const [shape, setShape] = useState('CAKE')
  const [isLabelShown, setIsLabelShown] = useState(false)

  const [focusR, setFocusR] = useState(255)
  const [focusG, setFocusG] = useState(255)
  const [focusB, setFocusB] = useState(255)

  const [focusH, setFocusH] = useState(0)
  const [focusS, setFocusS] = useState(100)
  const [focusL, setFocusL] = useState(100)

  const [focusHsvS, setFocusHsvS] = useState(100)
  const [focusV, setFocusV] = useState(100)


  const handleRgbChange = (event, colorParam) => {
    switch (colorParam) {
      case 'R':
        setFocusR(event.target.value); break;
      case 'G':
        setFocusG(event.target.value); break;
      case 'B':
        setFocusB(event.target.value); break;
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
  const handleShape = () => {
    setShape(shape === 'CUBE' ? 'CAKE' : shape==='CAKE' ? 'CONE' : 'CUBE');
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

      </div>
      <Space 
        shape ={shape}
        isLabelShown = {isLabelShown}
        onClick = {handleClick}
        focusR={focusR}
        focusG={focusG}
        focusB={focusB}
        />
      <ControlPane
        handleLabel={handleLabel}
        handleClick={handleClick}
        handleShape={handleShape}
        onRgbChange={handleRgbChange}
        onHslChange={handleHslChange}
        onHsvChange={handleHsvChange}
        focusR={focusR}
        focusG={focusG}
        focusB={focusB}
        focusH={focusH}
        focusS={focusS}
        focusL={focusL}
        focusHsvS={focusHsvS}
        focusV={focusV}    
      />
    </>
  );
}

export default App;

