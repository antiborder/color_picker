import './App.css';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import convert from 'color-convert';
import { Html } from '@react-three/drei';

function App() {

  const cameraPosition = [-2, 0, 7]; // カメラの位置
  // const squares = [];
  const square2ds = [];

  const zRange = 8;
  const yRange = 8;
  const xRange = 8;


  // for (let x = 0; x <= xRange; x++) {
  //   for (let y = 0; y <= xRange; y++) {
  //     for (let z = 0; z <= zRange; z++) {
  //       squares.push(
  //         <Square
  //           key={[x, y, z]}
  //           position={[x, y, z]}
  //           color={'#' + convert.rgb.hex(x * 255 / xRange, y * 255 / yRange, z * 255 / zRange)}
  //           emissive={new THREE.Color('#000000')}
  //         />

  //       )
  //         ;
  //     }
  //   }

  // }


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

        
        {/* <meshStandardMaterial color={'orange'}></meshStandardMaterial> */}
        <color attach="background" args={['#DDDDDD']} />
        <ambientLight color='#ffffff' intensity={1} />
        {/* <pointLight position={[1, 1, 1]} /> */}

        <OrbitControls args={[cameraPosition]} />
        <mesh position={[-2, 0, 0]}>

        <group position={[10,10,10]}>
          {/* {squares} */}
          </group>
            {square2ds}
          
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;

const Square = ({ size = 0.4, radius = 0, color = '#000000', opacity = 1, ...props }) => {
  const shape = new THREE.Shape();
  const x = size / 2 - radius;
  const y = size / 2 - radius;

  // ポリゴンの形状を作成
  shape.moveTo(-x, -y + radius);
  shape.quadraticCurveTo(-x, -y, -x + radius, -y);
  shape.lineTo(x - radius, -y);
  shape.quadraticCurveTo(x, -y, x, -y + radius);
  shape.lineTo(x, y - radius);
  shape.quadraticCurveTo(x, y, x - radius, y);
  shape.lineTo(-x + radius, y);
  shape.quadraticCurveTo(-x, y, -x, y - radius);
  shape.lineTo(-x, -y + radius);

  // ポリゴンをShapeGeometryで描画
  const geometry = new THREE.ShapeGeometry(shape);

  // オブジェクトを描画
  const material = new THREE.MeshStandardMaterial({ color: new THREE.Color(color), transparent: true, opacity, side: THREE.DoubleSide });
  return (
    <mesh geometry={geometry} material={material} {...props} />
  );
};


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