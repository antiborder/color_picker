import React, { useState } from "react";
import { config, useSpring, animated } from "@react-spring/three"
import { Html } from "@react-three/drei";
import * as THREE from 'three'
import convert from 'color-convert';
import './App.css';


const Particles = (props) => {

    const [isAnyHovered, setIsAnyHovered] = useState(false);

    const rRange = 255;
    const gRange = 255;
    const bRange = 255;

    const division = 6
    const step = 255 / division

    const handlePointerOver = () => {
        setIsAnyHovered(true)
    };

    const handlePointerOut = () => {
        setIsAnyHovered(false)
    };


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
                                    onPointerOver={handlePointerOver}
                                    onPointerOut={handlePointerOut}
                                    isAnyHovered={isAnyHovered}
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

    const [hovered, setHovered] = useState(false);
    color = '#' + convert.rgb.hex(Math.round(props.r), Math.round(props.g), Math.round(props.b))

    const { position } = useSpring({
        from: {
            position: [0, 0, 0]
        },
        to: {
            position: props.shape === 'RGB' ?
                props.getRgbPosition(props.r, props.g, props.b) :
                props.shape === 'HSL' ?
                    props.getHslPosition(props.r, props.g, props.b) :
                    props.getHsvPosition(props.r, props.g, props.b),
        },
        config: { duration: "500" }
    });

    const { scale } = useSpring({
        scale: hovered ? 1.8 : 1,
        config: config.wobbly,
    });

    const handlePointerOver = () => {
        if (!props.isAnyHovered) {
            setHovered(true)
            props.onPointerOver()
        }
    }

    const handlePointerOut = () => {
        if (hovered) {
            setHovered(false)
            props.onPointerOut()
        }
    }

    return (

        <animated.mesh
            position={position}
            {...props}
            onPointerOver={() => handlePointerOver()}
            onPointerOut={() => handlePointerOut()}
            onClick={() => { props.onClick(props.r, props.g, props.b) }}
            scale={scale}
        >
            <sphereGeometry attach="geometry" args={[0.2, 32, 32]} />
            <meshStandardMaterial
                attach="material"
                color={color}
                opacity={opacity}
                transparent={false} />
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

export default Particles;
