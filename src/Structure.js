
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import convert from 'color-convert';
import './App.css';
import Focus from './Focus';
import FocusPlane from './FocusPlane';
import Particles from './Particles';


const Structure = (props) => {

    const cameraPosition = [0, 15, 0]; // カメラの位置
    const structureSize = 9;
    const sizeRatio = 0.7;
    const cylinderHeight = structureSize * sizeRatio;
    const cylinderRadius = structureSize * sizeRatio


    const rescaleRgb = (r, g, b) => {
        return ([
            (r / 255 - 0.5) * structureSize,
            (-g / 255 + 0.5) * structureSize,
            (b / 255 - 0.5) * structureSize
        ])
    }
    const rgbPosition = (r, g, b) => {

        const tiltRotationQuaternion = new THREE.Quaternion().setFromUnitVectors(
            (new THREE.Vector3(1, -1, 1)).normalize(),
            new THREE.Vector3(0, 0, 1)
        );
        const zRotationQuaternion = new THREE.Quaternion().setFromUnitVectors(
            new THREE.Vector3(1, 0, 0).normalize(),
            new THREE.Vector3(0, 0.77, 0)
        );

        const rotationQuaternion = zRotationQuaternion.multiply(tiltRotationQuaternion)
        return (
            (new THREE.Vector3(
                ...rescaleRgb(r, g, b)
            ).applyQuaternion(rotationQuaternion)
            ).toArray()
        )
    }

    const rescaleHsl = (h, s, l) => {
        return ([
            h / 360 * (2 * Math.PI),
            s / 100 * cylinderRadius,
            (l - 50) / 100 * cylinderHeight
        ])
    }

    const cylindricalToCartesian = (theta, radius, z) => {
        return ([
            radius * Math.sin(theta),
            radius * Math.cos(theta),
            z
        ])
    }

    const hslPosition = (r, g, b) => {
        const [h, s, l] = convert.rgb.hsl(Math.round(r), Math.round(g), Math.round(b))
        const [theta, radius, z] = rescaleHsl(h, s, l)
        return cylindricalToCartesian(theta, radius, z)
    }

    const hsvPosition = (r, g, b) => {
        const [h, s, v] = convert.rgb.hsv(Math.round(r), Math.round(g), Math.round(b))
        const [theta, radius, z] = rescaleHsl(h, s, v)
        return cylindricalToCartesian(theta, radius, z)
    }

    return (
        <div>
            <Canvas
                camera={{ position: cameraPosition }}
                style={{ height: '700px' }}
            >
                <color attach="background" args={['#C3C3C3']} />

                <ambientLight color='#ffffff' intensity={1} />
                <OrbitControls args={[cameraPosition]} />
                <group
                    rotation={[-Math.PI / 2, 0, 0]}
                >
                    <Particles {...props}
                        rgbPosition={rgbPosition}
                        hslPosition={hslPosition}
                        hsvPosition={hsvPosition}
                    />
                    <Focus {...props}
                        rgbPosition={rgbPosition}
                        hslPosition={hslPosition}
                        hsvPosition={hsvPosition}
                    />
                    <FocusPlane {...props}
                        rgbPosition={rgbPosition}
                        hslPosition={hslPosition}
                        hsvPosition={hsvPosition}

                        rescaleHsl={rescaleHsl}
                        cylindricalToCartesian={cylindricalToCartesian}

                        cylinderRadius={cylinderRadius}
                        cylinderHeight={cylinderHeight}
                    />



                </group>
            </Canvas>
        </div>
    )
}

export default Structure;