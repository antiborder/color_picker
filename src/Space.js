
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { useSpring, animated } from "@react-spring/three"

import convert from 'color-convert';

import './App.css';


const Space = (props) => {

    const cameraPosition = [0, 15, 0]; // カメラの位置

    const cubePosition = (r, g, b) => {

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
                (r / 255 - 0.5) * 8,
                (-g / 255 + 0.5) * 8,
                (b / 255 - 0.5) * 8
            ).applyQuaternion(rotationQuaternion)
            ).toArray()
        )
    }

    const chandelierPosition = (r, g, b) => {
        const [h, s, l] = convert.rgb.hsl(Math.round(r), Math.round(g), Math.round(b))

        return (new THREE.Vector3(
            s * Math.sin(h * 2 * 3.14 / 360) / (2 * 8),
            s * Math.cos(h * 2 * 3.14 / 360) / (2 * 8),
            (l - 50) / (8 * 3 / 2)
        )
        ).toArray()
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
                    <Particles
                        {...props}
                        chandelierPosition={chandelierPosition}
                        cubePosition={cubePosition}
                    />
                    <Focus {...props}
                        chandelierPosition={chandelierPosition}
                        cubePosition={cubePosition}

                    />
                </group>
            </Canvas>
        </div>

    )
}

export default Space;

const Focus = (props) => {
    return (
        <>
            <group
                        position={
                            props.shape === 'CUBE' ?
                                props.cubePosition(props.focusR, props.focusG, props.focusB) :
                                props.chandelierPosition(props.focusR, props.focusG, props.focusB)}


            >
                <Html style={{top: '-25px',left:  '-10px', fontSize:'24px', color:'red'}}
                >
                    ▼
                </Html>

            </group>
        </>
    )

}

const Particles = (props) => {

    const rRange = 255;
    const gRange = 255;
    const bRange = 255;

    const division = 6
    const step = 255 / division

    return (
        <>
            {[...Array(Math.floor(rRange / step) + 1)].map((_, i) => {
                return (
                    [...Array(Math.floor(gRange / step) + 1)].map((_, j) => {
                        return (
                            [...Array(Math.floor(bRange / step) + 1)].map((_, k) =>
                                <Particle {...props}
                                    key={[i, j, k]}
                                    r={i * step}
                                    g={j * step}
                                    b={k * step}
                                    shape={props.shape}
                                    emissive={new THREE.Color('#000000')}
                                    division={division}
                                    onClick={props.onClick}
                                />
                            )
                        )
                    })
                )
            })}
        </>
    )
}

const Particle = ({ size = 0.4, radius = 0, color = '#000000', opacity = 1, ...props }) => {

    color = '#' + convert.rgb.hex(Math.round(props.r), Math.round(props.g), Math.round(props.b))

    const { position } = useSpring({
        from: {
            position: [0, 0, 0]
        },
        to: {
            position: props.shape === 'CUBE' ?
                props.cubePosition(props.r, props.g, props.b) :
                props.chandelierPosition(props.r, props.g, props.b)

        },
        config: { duration: "500" }
    });

    return (

        <animated.mesh
            position={position}
            {...props}
            onClick={() => { props.onClick(props.r, props.g, props.b) }}
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
                        // color: "#" + convert.rgb.hex(Math.round((r + 100) % 255), Math.round((g + 100) % 255), Math.round((b + 100) % 255))
                    }}
                >
                    {"#" + convert.rgb.hex(Math.round(props.r), Math.round(props.g), Math.round(props.b))}

                </div>
            </Html>
        </animated.mesh>
    );
};


