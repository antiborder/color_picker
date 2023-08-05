import './App.css';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import convert from 'color-convert';
import { Html } from '@react-three/drei';
import { useState, useEffect } from 'react';
import { useSpring, animated } from "@react-spring/three"
import styled from 'styled-components';
import ControlPane from './ControlPane'

//Gitにpush

//hslをスライダで指定
//mapに現在位置を表示
//hsvを追加
//座標軸
//重なってる場合に奥のparticleをクリックしてしまう
//色の明るさ調整
//表示近さ調整
//平面で選色
//線に沿って選色
//ログイン
//自分のパレットに保存

function App() {

  const [shape, setShape] = useState('CAKE')
  const [isLabelShown, setIsLabelShown] = useState(false)
  // const [focus, setFocus] = useState('#FFFFFF')
  const [focusR, setFocusR] = useState(255)
  const [focusG, setFocusG] = useState(255)
  const [focusB, setFocusB] = useState(255)

  const cameraPosition = [-2, 0, 7]; // カメラの位置
  const particles = [];

  const division = 6
  const step = 255 / division

  const rRange = 255;
  const gRange = 255;
  const bRange = 255;

  const handleClick = (r, g, b) => {
    // const color = "#" + convert.rgb.hex(r, g, b)
    // setFocus(color)
    setFocusR(r)
    setFocusG(g)
    setFocusB(b)
  }
  const handleLabel = () => {
    setIsLabelShown(isLabelShown ? false : true);
  };
  const handleShape = () => {
    setShape(shape === 'CUBE' ? 'CAKE' : 'CUBE');
  };

  for (let r = 0; r <= rRange; r += step) {
    for (let g = 0; g <= gRange; g += step) {
      for (let b = 0; b <= bRange; b += step) {
        particles.push(
          <Particle
            key={[r, g, b]}
            r={r}
            g={g}
            b={b}
            shape={shape}
            emissive={new THREE.Color('#000000')}
            division={division}
            isLabelShown={isLabelShown}
            onClick={handleClick}
          />
        )
      }
    }
  }

  const handleChange = (event, colorParam) => {
    switch (colorParam) {
      case 'R':
        setFocusR(event.target.value); break;
      case 'G':
        setFocusG(event.target.value); break;
      case 'B':
        setFocusB(event.target.value); break;
    }
  }


  return (
    <>

      <div className="App">
        {focusR}
        {focusG}
        {focusB}

        <Canvas
          camera={{ position: [0, 20, 0] }}
          style={{ height: '700px' }}
        >
          <color attach="background" args={['#C3C3C3']} />
          <ambientLight color='#ffffff' intensity={1} />
          <OrbitControls args={[cameraPosition]} />
          {particles}
        </Canvas>
      </div>
      <ControlPane
        handleLabel={handleLabel}
        handleClick={handleClick}
        handleShape={handleShape}
        // focus={focus}
        onChange={handleChange}
        focusR={focusR}
        focusG={focusG}
        focusB={focusB}
      />
    </>
  );
}

export default App;

const Particle = ({ size = 0.4, radius = 0, color = '#000000', opacity = 1, ...props }) => {
  const [r, setR] = useState(props.r)
  const [g, setG] = useState(props.g)
  const [b, setB] = useState(props.b)

  color = '#' + convert.rgb.hex(Math.round(r), Math.round(g), Math.round(b))
  const [h, s, l] = convert.rgb.hsl(Math.round(r), Math.round(g), Math.round(b))

  const CubeRotationQuaternion = new THREE.Quaternion().setFromUnitVectors((new THREE.Vector3(1, -1, 1)).normalize(), new THREE.Vector3(0, 1, 0));
  const CakeRotationQuaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 1, 0));

  let x = s * Math.sin(h * 2 * 3.14 / 360) / (2 * 8)
  let y = s * Math.cos(h * 2 * 3.14 / 360) / (2 * 8)
  let z = (l - 50) / (8 * 3 / 2)
  const { position } = useSpring({
    from: { position: [0, 0, 0] },
    to: {
      position: props.shape === 'CUBE' ?
        (
          new THREE.Vector3(
            (props.r / 255 - 0.5) * 8,
            (-props.g / 255 + 0.5) * 8,
            (props.b / 255 - 0.5) * 8
          ).applyQuaternion(CubeRotationQuaternion)
        ).toArray() :
        (
          new THREE.Vector3(
            x,
            y,
            z
          ).applyQuaternion(CakeRotationQuaternion)
        ).toArray()
    },
    config: { duration: "500" }
  });

  // const color ="#" + convert.rgb.hex(Math.round((r + 100) % 255), Math.round((g + 100) % 255), Math.round((b + 100) % 255)) 

  return (

    <animated.mesh
      position={position}
      {...props}
      onClick={() => { props.onClick(r, g, b) }}
    >


      <sphereGeometry attach="geometry" args={[0.2, 32, 32]} />
      <meshStandardMaterial attach="material" color={color} opacity={opacity} transparent={false} />
      <Html
        zIndexRange={[100, 5]}
      >


        <div

          style={{
            fontSize: '8px',
            display: props.isLabelShown ? 'block' : 'none',
            color: "#" + convert.rgb.hex(Math.round((r + 100) % 255), Math.round((g + 100) % 255), Math.round((b + 100) % 255))
          }}
        >
          {"#" + convert.rgb.hex(Math.round(r), Math.round(g), Math.round(b))}

        </div>
      </Html>
    </animated.mesh>
  );
};