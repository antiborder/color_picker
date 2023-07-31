import './App.css';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import convert from 'color-convert';
import { Html } from '@react-three/drei';
import { useState } from 'react';
import { useSpring, animated } from "@react-spring/three"


//cubeの傾きをCAKEに合わせる
//色をクリックで６桁コード取得
//現在の色をサイドバーに表示
//mapに現在位置を表示
//色の明るさ調整
//表示近さ調整
//rgbをスライダで指定
//hslをスライダで指定
//平面で選色
//線に沿って選色
//ログイン
//自分のパレットに保存



function App() {

  const [shape, setShape] = useState('CAKE')
  const cameraPosition = [-2, 0, 7]; // カメラの位置
  const square2ds = [];

  const division=8
  const step = 255 / division

  const rRange = 255;
  const gRange = 255;
  const bRange = 255;

  for (let r = 0; r <= rRange; r += step) {
    for (let g = 0; g <= gRange; g += step) {
      for (let b = 0; b <= bRange; b += step) {
        square2ds.push(
          <Square2d
            r={r}
            g={g}
            b={b}
            shape={shape}
            emissive={new THREE.Color('#000000')}
            step = {step}
          />
        )
          ;
      }
    }
  }


  const handleToggle = () => {
    setShape(shape === 'CUBE' ? 'CAKE' : 'CUBE');
  };

  return (
    <div className="App">
      <div style={{ display: 'flex', backgroundColor: 'none' }}>
        <div style={{ backgroundColor: '#FF0000', width: '100px', margin: '24px 24px 0px 24px' }}>
          R
        </div>
        <div style={{ backgroundColor: '#00FF00', width: '100px', margin: '24px 24px 0px 24px' }}>
          G
        </div>
        <div style={{ backgroundColor: '#0000FF', width: '100px', margin: '24px 24px 0px 24px' }}>
          B
        </div>
        <div style={{ backgroundColor: '#FFFFFF', width: '100px', margin: '24px 24px 0px 24px' }}>
          W
        </div>
        <div >
          <button onClick={handleToggle}>Shape</button>

        </div>

      </div>
      <Canvas
        camera={{ position: [-2, 0, 20] }}
        style={{ height: '1000px' }}
      >



        <color attach="background" args={['#BBBBBB']} />
        <ambientLight color='#ffffff' intensity={1} />

        <OrbitControls args={[cameraPosition]} />

        {square2ds}

      </Canvas>
    </div>
  );
}

export default App;


const Square2d = ({ size = 0.4, radius = 0, color = '#000000', opacity = 1, ...props }) => {
  const [r, setR] = useState(props.r)
  const [g, setG] = useState(props.g)
  const [b, setB] = useState(props.b)

  color = '#' + convert.rgb.hex(Math.round(r), Math.round(g), Math.round(b))
  const [h, s, l] = convert.rgb.hsl(Math.round(r), Math.round(g), Math.round(b))

  let x = s * Math.sin(h * 2 * 3.14 / 360) / 16
  let y = s * Math.cos(h * 2 * 3.14 / 360) / 16
  let z = l / 12

  const { position } = useSpring({
    from: { position: [0, 0, 0] },
    to: {
      position:

        props.shape == 'CUBE' ?
          [props.r / props.step - 4, props.g / props.step - 4, props.b / props.step] :
          [x, y, z]

    },
    config: { duration: "500" }
  });

  return (

    <animated.mesh
      position={position}
      {...props} >

      <sphereGeometry attach="geometry" args={[0.2, 32, 32]} />
      <meshStandardMaterial attach="material" color={color} opacity={opacity} transparent={false} />
      <Html
        zIndexRange={[100, 5]}
      >
      </Html>
    </animated.mesh>
  );
};