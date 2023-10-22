import React, { useState } from "react";
import { config, useSpring, animated } from "@react-spring/three"
import { Html } from "@react-three/drei";
import * as THREE from 'three'
import convert from 'color-convert';
import styled from 'styled-components';

import './App.css';

const Particles = (props) => {

    // const [isAnyHovered, setIsAnyHovered] = useState(false);

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
                                <Particle
                                    getRgbPosition={props.getRgbPosition}
                                    getHslPosition={props.getHslPosition}
                                    getHsvPosition={props.getHsvPosition}
                                    onParticleClick={() => props.onParticleClick(i * step, j * step, k * step)}
                                    key={[i, j, k]}
                                    r={i * step}
                                    g={j * step}
                                    b={k * step}
                                    shape={props.shape}
                                    emissive={new THREE.Color('#000000')}
                                    division={division}
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
    const [bubbleHovered, setBubbleHovered] = useState(false);
    color = '#' + convert.rgb.hex(Math.round(props.r), Math.round(props.g), Math.round(props.b))

    const { position } = useSpring({
        from: {
            position: [0, 0, 0]
        },
        to: {
            position: props.shape === 'RGB' || props.shape === 'CMYK' ?
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
            setHovered(true)
    }
    const handlePointerOut = () => {
            setHovered(false)
    }
    const handleBubblePointerOver = () => {
            setBubbleHovered(true)
    }
    const handleBubblePointerOut = () => {
            setBubbleHovered(false)
    }
    
    return (

        <animated.mesh
            position={position}
            {...props}
            onPointerOver={() => handlePointerOver()}
            onPointerOut={() => handlePointerOut()}
            scale={scale}
            onClick={props.onParticleClick}
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
                    onPointerOver={() => handleBubblePointerOver()}
                    onPointerOut={() => handleBubblePointerOut()}
                >
                    {((hovered || bubbleHovered)) &&
                        <ParticleBubble
                            {...props}
                            type={props.shape}
                            backgroundColor={color}
                            textColor={color}
                            onClick={props.onClick}
                        />
                    }
                </div>
            </Html>
        </animated.mesh>
    );
};

export default Particles;

const ParticleBubble = (props) => {

    return (
        <StyledNodeBubble style={{}}>
            <div style={{ textAlign: 'left' }}>
                {"#" + convert.rgb.hex(props.r, props.g, props.b)}
            </div>
            <div
                className='colorRectangle'
                onClick={props.onParticleClick}
                style={{ backgroundColor: "#" + convert.rgb.hex(props.r, props.g, props.b) }}
            />
            <div onClick={props.onParticleClick}>
                <span className='modalLink'>
                    この色を選ぶ
                </span>
            </div>
        </StyledNodeBubble>)
}


const StyledNodeBubble = styled.div`
    position:absolute;
    top:4px;
    left:4px;
    width: 120px;
    background: #fff;
    border-radius: 0px 24px 24px 24px;
    font-size: 12px;
    padding: 4px;
    text-align:center;
    .modalLink{
        color:#0000FF;
        cursor: pointer;
        text-decoration: underline;
    }
    div{
        margin: 0 auto;
        // adding: 2px;
    }
    .colorRectangle{
        height: 20px;
        width: 90px;
        border: 1px solid #BBB;
        cursor: pointer;
    }

`;