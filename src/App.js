import './App.css';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import convert from 'color-convert';
import { Html } from '@react-three/drei';
import { hslToRgb } from './colorFunctions';

function App() {

  const cameraPosition = [-2, 0, 7]; // カメラの位置
  const square2ds = [];
  const cake = []

  const zRange = 8;
  const yRange = 8;
  const xRange = 8;

  for (let x = 0; x <= xRange; x++) {
    for (let y = 0; y <= xRange; y++) {
      for (let z = 0; z <= zRange; z++) {
        square2ds.push(
          <Square2d
            key={[x, y, z]}
            position={[x, y, z]}
            color={'#' + convert.rgb.hex(x * 255 / xRange, y * 255 / yRange, z * 255 / zRange)}
            emissive={new THREE.Color('#000000')}
          />
        )
          ;
      }
    }
  }

const hRange = 24;
const sRange = 8;
const lRange = 8;

  for (let h = 0; h <= hRange; h++) {
    for (let s = sRange; s >= 0; s--) {
      for (let l = lRange; l >= 0; l--) {
        let r = s 
        let x = r * Math.sin(h*2*3.14/hRange)
        let y = r * Math.cos(h*2*3.14/hRange)

        let z = l
        cake.push(
          <Square2d
            key={[h, s, l]}
            color={hslToRgb(h*360/hRange, s /sRange, l /lRange)}

            position={[x, y, z]}
            
            // color = {'#FF0000'}
          />
        )
          ;
      }
    }
  }

  return (
    <div className="App">
      <div style={{ display: 'flex' ,backgroundColor: 'none'}}>
        <div style={{backgroundColor:'#FF0000',width:'100px', margin:'24px 24px 0px 24px'}}>
          R
        </div>
        <div style={{backgroundColor:'#00FF00',width:'100px', margin:'24px 24px 0px 24px'}}>
          G
        </div>
        <div style={{backgroundColor:'#0000FF',width:'100px', margin:'24px 24px 0px 24px'}}>
          B
        </div>
        <div style={{backgroundColor:'#FFFFFF',width:'100px', margin:'24px 24px 0px 24px'}}>
          W
        </div>

      </div>
      <Canvas
        camera={{ position: [-2, 0, 20] }}
        style={{ height: '1000px' }}
      >

        

        <color attach="background" args={['#DDDDDD']} />
        <ambientLight color='#ffffff' intensity={1} />

        <OrbitControls args={[cameraPosition]} />
        <mesh position={[-2, 0, 0]}>

        <group position={[20,10,10]}>
          {cake}
          </group>
            {square2ds}
          
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;


const Square2d = ({ size = 0.4, radius = 0, color = '#000000', opacity = 1, ...props }) => {

  return (
    
    <mesh   {...props} >
        <Html
            position={[0, 0, 0]} // position relative to the node
            zIndexRange={[100, 5]}
            >
              <div style={{width:'16px', height:'16px',backgroundColor:color}}></div>
          </Html>
          </mesh>
  );
};