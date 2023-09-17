import React from 'react'
// import { Html } from '@react-three/drei'
import convert from 'color-convert';
import { Text } from '@react-three/drei';
// import { CubeIcon } from './assets/Icons.js'
import { animated } from '@react-spring/three'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'



const Focus = (props) => {

    const ref = useRef()
    useFrame(() => {
        ref.current.rotation.z += 0.1;
    });
    return (
        <>
            <group
                position={
                    props.shape === 'RGB' ?
                        props.rgbPosition(props.focusR, props.focusG, props.focusB) :
                        props.shape === 'HSL' ?
                            props.hslPosition(props.focusR, props.focusG, props.focusB) :
                            props.hsvPosition(props.focusR, props.focusG, props.focusB)
                }
                rotation={[0, 0, -Math.PI]}
            >
                <animated.mesh {...props} ref={ref}>
                    <group
                        position={[0, 0, 0.5]}
                        rotation={[Math.PI / 2, 0, 0]}
                    >
                        <Text


                            color={props.focusL <= 80 ?
                                '#' + convert.rgb.hex([props.focusR, props.focusG, props.focusB]) :
                                '#000000'}
                            fontSize={1.1}
                        >
                            {'V'}
                        </Text>
                        <Text
                            color={props.focusL <= 80 ?
                                '#' + convert.rgb.hex([props.focusR, props.focusG, props.focusB]) :
                                '#000000'}
                            fontSize={1.6}
                            position={[0, 0.2, 0]}
                        >
                            {'I'}
                        </Text>
                    </group>
                </animated.mesh>
            </group>

        </>
    )

}

export default Focus;
