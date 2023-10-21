import React from 'react'
import { Text } from '@react-three/drei';
import { animated } from '@react-spring/three'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'



const Focus = (props) => {

    const ref = useRef()
    useFrame(() => {
        ref.current.rotation.z += 0.02;
    });
    return (
        <>
            <group
                position={
                    props.shape === 'RGB' ?
                        props.getRgbPosition(props.focusR, props.focusG, props.focusB) :
                        props.shape === 'HSL' ?
                            props.getHslPosition(props.focusR, props.focusG, props.focusB) :
                            props.getHsvPosition(props.focusR, props.focusG, props.focusB)
                }
                rotation={[0, 0, -Math.PI]}
            >
                <animated.mesh {...props} ref={ref}>
                    <group
                        position={[0, 0, 0.5]}
                        rotation={[Math.PI / 2, 0, 0]}
                    >
                        <Text


                            color={'#000000'}
                            fontSize={1.1}
                        >
                            {'V'}
                        </Text>
                        <Text
                            color={'#000000'}
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
