import React, { useState } from "react";
import { config, useSpring, animated } from "@react-spring/three"
import { Html } from "@react-three/drei";
import * as THREE from 'three'
import convert from 'color-convert';
import styled from 'styled-components';

import './App.css';
import sampleColors from './constants/sampleColors'

const Particles = (props) => {

    // const [isAnyHovered, setIsAnyHovered] = useState(false);

    const rRange = 255;
    const gRange = 255;
    const bRange = 255;

    const division = 6
    const step = 255 / division

    return (
        // <>
        //     {[...Array(Math.floor(rRange / step) + 1)].map((_, i) => {
        //         return (
        //             [...Array(Math.floor(gRange / step) + 1)].map((_, j) => {
        //                 return (
        //                     [...Array(Math.floor(bRange / step) + 1)].map((_, k) =>
        //                         <Particle
        //                             getRgbPosition={props.getRgbPosition}
        //                             getHslPosition={props.getHslPosition}
        //                             getHsvPosition={props.getHsvPosition}
        //                             onParticleClick={() => props.onParticleClick(i * step, j * step, k * step)}
        //                             key={[i, j, k]}
        //                             r={i * step}
        //                             g={j * step}
        //                             b={k * step}
        //                             shape={props.shape}
        //                             emissive={new THREE.Color('#000000')}
        //                             division={division}
        //                         />
        //                     )
        //                 )
        //             })
        //         )
        //     })}
        // </>
        <>
            {sampleColors.map((c, i) => {
                console.log(c)
                return <Particle
                    getRgbPosition={props.getRgbPosition}
                    getHslPosition={props.getHslPosition}
                    getHsvPosition={props.getHsvPosition}
                    onParticleClick={() => props.onParticleClick(...convert.hex.rgb(c.hex))}
                    r={convert.hex.rgb(c.hex)[0]}
                    g={convert.hex.rgb(c.hex)[1]}
                    b={convert.hex.rgb(c.hex)[2]}
                    name1={c.name1}
                    name2={c.name2}
                    name3={c.name3}
                    shape={props.shape}
                    emissive={new THREE.Color('#000000')}
                    division={division}
                    tags={c.tag}
                />
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
            <sphereGeometry attach="geometry" args={[0.12, 32, 32]} />
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
            <div className='name1' 
            style={{
                fontSize:props.tags[0]==='JAPANESE'?'24px' : '16px',
                fontFamily:props.tags[0]==='JAPANESE'?'YujiBoku' : 'sans-serif'
                }}>
            {props.name1}
            </div>
            <div className='name2'>
            {props.name2}
            </div>
            <div
                className='colorRectangle'
                onClick={props.onParticleClick}
                style={{ backgroundColor: "#" + convert.rgb.hex(props.r, props.g, props.b) }}
            />
            <div className='hex'>
            {"#" + convert.rgb.hex(props.r, props.g, props.b)}<br/>
            </div>
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
    width: 160px;
    background: #fff;
    border-radius: 0px 24px 24px 24px;
    border: 1px solid #BBB;
    font-size: 12px;
    padding: 4px;
    text-align:center;
    .name1{
        font-family: 'YujiBoku', sans-serif;
    }
    .name2{
        font-size:12px;
    }
    .hex{
        font-size:12px;
        color:#888;
    }
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
        margin-top: 8px;
    }

`;