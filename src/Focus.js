import React from 'react'
import { Html } from '@react-three/drei'



const Focus = (props) => {
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
            >
                <Html style={{ top: '-25px', left: '-10px', fontSize: '24px', color: 'red' }}
                >
                    ▼
                </Html>

            </group>
        </>
    )

}

export default Focus;
