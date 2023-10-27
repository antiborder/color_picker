import { useState } from 'react';

import convert from 'color-convert';

import './App.css';
import ControlPane from './ControlPane'
import Structure from './Structure'

//表示タグをチェックボックスで選択
//色名検索
//2Dpickerをキャンバスに。ドラッグができるのが◯。
//動作速度改善

//色とshapeとmainElementの初期値はランダムで。
//ファビコン
//色名で検索できるように
//フレックス対応と全体のサイズ

//座標軸
//カラーコードをコピー
//色の明るさ調整
//表示近さ調整
//RGBとHSLとHSVの解説
//ログイン
//自分のパレットに保存

function App() {

  const [shape, setShape] = useState('RGB')
  const [isLabelShown, setIsLabelShown] = useState(false)

  const [focusR, setFocusR] = useState(255)
  const [focusG, setFocusG] = useState(255)
  const [focusB, setFocusB] = useState(255)

  const [focusC, setFocusC] = useState(0)
  const [focusM, setFocusM] = useState(0)
  const [focusY, setFocusY] = useState(0)
  const [focusK, setFocusK] = useState(0)

  const [focusH, setFocusH] = useState(0)
  const [focusS, setFocusS] = useState(100)
  const [focusL, setFocusL] = useState(100)

  const [focusHsvS, setFocusHsvS] = useState(100)
  const [focusV, setFocusV] = useState(100)

  const [rgbMainElement, setRgbMainElement] = useState('R')
  const [cmykMainElement, setCmykMainElement] = useState('C')
  const [hslMainElement, setHslMainElement] = useState('H')
  const [hsvMainElement, setHsvMainElement] = useState('H')

  const [hexInput, setHexInput] = useState('FFFFFF')

  const handleRgbChange = (event, colorParam) => {
    let [r, g, b] = [focusR, focusG, focusB]
    switch (colorParam) {
      case 'R':
        r = event.target.value
        setFocusR(r);
        break;
      case 'G':
        g = event.target.value
        setFocusG(g);
        break;
      case 'B':
        b = event.target.value
        setFocusB(b);
        break;
      default:
        r = event.target.value
        setFocusR(event.target.value); break;
    }

    setFocusC(convert.rgb.cmyk([r, g, b])[0]);
    setFocusM(convert.rgb.cmyk([r, g, b])[1]);
    setFocusY(convert.rgb.cmyk([r, g, b])[2]);
    setFocusK(convert.rgb.cmyk([r, g, b])[3]);

    setFocusH(convert.rgb.hsl([r, g, b])[0]);
    setFocusS(convert.rgb.hsl([r, g, b])[1]);
    setFocusL(convert.rgb.hsl([r, g, b])[2]);

    setFocusHsvS(convert.rgb.hsv([r, g, b])[1]);
    setFocusV(convert.rgb.hsv([r, g, b])[2]);

    setHexInput(convert.rgb.hex([r, g, b]))
  }

  const handleCmykChange = (event, colorParam) => {
    let [c, m, y, k] = [focusC, focusM, focusY, focusK]
    switch (colorParam) {
      case 'C':
        c = event.target.value
        setFocusC(c);
        break;
      case 'M':
        m = event.target.value
        setFocusM(m);
        break;
      case 'Y':
        y = event.target.value
        setFocusY(y);
        break;
      case 'K':
      default:
        k = event.target.value
        setFocusK(k);
        break;
    }
    setFocusR(convert.cmyk.rgb([c, m, y, k])[0]);
    setFocusG(convert.cmyk.rgb([c, m, y, k])[1]);
    setFocusB(convert.cmyk.rgb([c, m, y, k])[2]);

    setFocusH(convert.cmyk.hsl([c, m, y, k])[0]);
    setFocusS(convert.cmyk.hsl([c, m, y, k])[1]);
    setFocusL(convert.cmyk.hsl([c, m, y, k])[2]);
    //RGBからHSVに変換
    setFocusHsvS(convert.cmyk.hsv([c, m, y, k])[1]);
    setFocusV(convert.cmyk.hsv([c, m, y, k])[2]);

    setHexInput(convert.cmyk.hex([c, m, y, k]))
  }

  const handleHslChange = (event, colorParam) => {
    let [h, s, l] = [focusH, focusS, focusL]
    switch (colorParam) {
      case 'H':
        setFocusH(event.target.value);
        h = event.target.value
        break;

      case 'S':
        setFocusS(event.target.value);
        s = event.target.value
        break;
      case 'L':
      default:
        setFocusL(event.target.value);
        l = event.target.value
    }
    setFocusR(convert.hsl.rgb([h, s, l])[0]);
    setFocusG(convert.hsl.rgb([h, s, l])[1]);
    setFocusB(convert.hsl.rgb([h, s, l])[2]);

    setFocusC(convert.hsl.cmyk([h, s, l])[0]);
    setFocusM(convert.hsl.cmyk([h, s, l])[1]);
    setFocusY(convert.hsl.cmyk([h, s, l])[2]);
    setFocusK(convert.hsl.cmyk([h, s, l])[3]);

    setFocusHsvS(convert.hsl.hsv([h, s, l])[1]);
    setFocusV(convert.hsl.hsv([h, s, l])[2]);

    setHexInput(convert.hsl.hex([h, s, l]))
  }

  const handleHsvChange = (event, colorParam) => {
    let [h, s, v] = [focusH, focusHsvS, focusV]
    switch (colorParam) {
      case 'H':
        setFocusH(event.target.value);
        h = event.target.value
        break;
      case 'HsvS':
        setFocusHsvS(event.target.value);
        s = event.target.value
        break;
      case 'V':
      default:
        setFocusV(event.target.value);
        v = event.target.value
        break;
    }
    setFocusR(convert.hsv.rgb([h, s, v])[0]);
    setFocusG(convert.hsv.rgb([h, s, v])[1]);
    setFocusB(convert.hsv.rgb([h, s, v])[2]);

    setFocusC(convert.hsv.cmyk([h, s, v])[0]);
    setFocusM(convert.hsv.cmyk([h, s, v])[1]);
    setFocusY(convert.hsv.cmyk([h, s, v])[2]);
    setFocusK(convert.hsv.cmyk([h, s, v])[3]);

    setFocusS(convert.hsv.hsl([h, s, v])[1]);
    setFocusL(convert.hsv.hsl([h, s, v])[2]);

    setHexInput(convert.hsv.hex([h, s, v]))
  }

  const handleClick = (r, g, b) => {
    setFocusR(r)
    setFocusG(g)
    setFocusB(b)
    setFocusC(convert.rgb.cmyk([r, g, b])[0])
    setFocusM(convert.rgb.cmyk([r, g, b])[1])
    setFocusY(convert.rgb.cmyk([r, g, b])[2])
    setFocusK(convert.rgb.cmyk([r, g, b])[3])
    setFocusH(convert.rgb.hsl([r, g, b])[0])
    setFocusS(convert.rgb.hsl([r, g, b])[1])
    setFocusL(convert.rgb.hsl([r, g, b])[2])
    setFocusHsvS(convert.rgb.hsv([r, g, b])[1]);
    setFocusV(convert.rgb.hsv([r, g, b])[2]);
    setHexInput(convert.rgb.hex([r, g, b]))
  }

  const handleHsvElementClick = (h, s, v) => {
    setFocusH(h)
    setFocusHsvS(s)
    setFocusV(v)
    setFocusR(convert.hsv.rgb([h, s, v])[0])
    setFocusG(convert.hsv.rgb([h, s, v])[1])
    setFocusB(convert.hsv.rgb([h, s, v])[2])
    setFocusH(convert.hsv.hsl([h, s, v])[0])
    setFocusS(convert.hsv.hsl([h, s, v])[1])
    setFocusL(convert.hsv.hsl([h, s, v])[2])
    setHexInput(convert.hsv.hex([h, s, v]))
  }

  const handleLabel = () => {
    setIsLabelShown(isLabelShown ? false : true);
  };

  const handleShapeClick = (shape) => {
    switch (shape) {
      case 'RGB':
        setShape('RGB'); break;
      case 'CMYK':
        setShape('CMYK'); break;
      case 'HSL':
        setShape('HSL'); break;
      case 'HSV':
      default:
        setShape('HSV'); break;
    }
  };

  const handleHexUpdate = () => {
    setFocusR(convert.hex.rgb(hexInput)[0])
    setFocusG(convert.hex.rgb(hexInput)[1])
    setFocusB(convert.hex.rgb(hexInput)[2])

    setFocusC(convert.hex.cmyk(hexInput)[0])
    setFocusM(convert.hex.cmyk(hexInput)[1])
    setFocusY(convert.hex.cmyk(hexInput)[2])
    setFocusK(convert.hex.cmyk(hexInput)[3])

    setFocusH(convert.hex.hsl(hexInput)[0])
    setFocusS(convert.hex.hsl(hexInput)[1])
    setFocusL(convert.hex.hsl(hexInput)[2])

    setFocusHsvS(convert.hex.hsv(hexInput)[1])
    setFocusV(convert.hex.hsv(hexInput)[2])
  }

  return (
    <>
      <Structure
        shape={shape}
        isLabelShown={isLabelShown}
        onParticleClick={handleClick}

        focusR={focusR}
        focusG={focusG}
        focusB={focusB}

        focusC={focusC}
        focusM={focusM}
        focusY={focusY}
        focusK={focusK}

        focusH={focusH}
        focusS={focusS}
        focusL={focusL}

        focusHsvS={focusHsvS}
        focusV={focusV}

        rgbMainElement={rgbMainElement}
        cmykMainElement={cmykMainElement}
        hslMainElement={hslMainElement}
        hsvMainElement={hsvMainElement}
      />
      <ControlPane
        handleLabel={handleLabel}
        handleClick={handleClick}
        handleHsvElementClick={handleHsvElementClick}
        onShapeClick={handleShapeClick}

        onRgbChange={handleRgbChange}
        onCmykChange={handleCmykChange}
        onHslChange={handleHslChange}
        onHsvChange={handleHsvChange}

        setRgbMainElement={(symbol) => {
          setShape('RGB');
          setRgbMainElement(symbol);
        }}
        setCmykMainElement={(symbol) => {
          setShape('CMYK');
          setCmykMainElement(symbol);
        }}
        setHslMainElement={(symbol) => {
          setShape('HSL');
          setHslMainElement(symbol);
        }}
        setHsvMainElement={(symbol) => {
          setShape('HSV');
          setHsvMainElement(symbol);
        }}

        shape={shape}
        focusR={focusR}
        focusG={focusG}
        focusB={focusB}
        focusC={focusC}
        focusM={focusM}
        focusY={focusY}
        focusK={focusK}
        focusH={focusH}
        focusS={focusS}
        focusL={focusL}
        focusHsvS={focusHsvS}
        focusV={focusV}

        rgbMainElement={rgbMainElement}
        hslMainElement={hslMainElement}
        hsvMainElement={hsvMainElement}
        cmykMainElement={cmykMainElement}

        setFocusR={setFocusR}
        setFocusG={setFocusG}
        setFocusB={setFocusB}
        hexInput={hexInput}
        setHexInput={setHexInput}
        onHexUpdate={handleHexUpdate}

      />
    </>
  );
}

export default App;

