import React from 'react'
import * as THREE from 'three'
import Cylinder from './Cylinder'
import Quadrilateral from './Quadrilateral'
import Disc from './Disc'


const FocusPlane = (props) => {

    const rSquareCorners = [
        props.rgbPosition(props.focusR, 0, 0),
        props.rgbPosition(props.focusR, 255, 0),
        props.rgbPosition(props.focusR, 255, 255),
        props.rgbPosition(props.focusR, 0, 255)
    ]

    const gSquareCorners = [
        props.rgbPosition(0, props.focusG, 0),
        props.rgbPosition(255, props.focusG, 0),
        props.rgbPosition(255, props.focusG, 255),
        props.rgbPosition(0, props.focusG, 255)
    ]

    const bSquareCorners = [
        props.rgbPosition(0, 0, props.focusB),
        props.rgbPosition(255, 0, props.focusB),
        props.rgbPosition(255, 255, props.focusB),
        props.rgbPosition(0, 255, props.focusB)
    ]

    const [rescaledH, rescaledS, rescaledL] = props.rescaleHsl(props.focusH, props.focusS, props.focusL)
    const rescaledHsvS = props.rescaleHsl(props.focusH, props.focusHsvS, props.focusV)[1]
    const rescaledV = props.rescaleHsl(props.focusH, props.focusHsvS, props.focusV)[2]


    return (
        <>
            {
                props.shape === 'RGB' && (<>
                    <Quadrilateral {...props}
                        points={rSquareCorners}
                    />
                    <Quadrilateral {...props}
                        points={gSquareCorners}
                    />
                    <Quadrilateral {...props}
                        points={bSquareCorners}
                    />
                </>)
            }
            {
                props.shape === 'HSL' && (<>
                    <Quadrilateral {...props}
                        points={[
                            props.cylindricalToCartesian(rescaledH, props.cylinderRadius, props.cylinderHeight / 2),
                            props.cylindricalToCartesian(rescaledH, props.cylinderRadius, -props.cylinderHeight / 2),
                            props.cylindricalToCartesian(rescaledH, 0,-props.cylinderHeight / 2),
                            props.cylindricalToCartesian(rescaledH, 0, props.cylinderHeight / 2)
                        ]}
                    />
                    <group rotation={[Math.PI / 2, 0, 0]}>

                        <Cylinder   {...props}
                            radius={rescaledS}
                            height={props.cylinderHeight}
                            side={THREE.DoubleSide}
                        />
                        <Disc  {...props}
                            position={[0, rescaledL, 0]}
                            radius={props.cylinderRadius}
                            side={THREE.DoubleSide}
                        />
                    </group>
                </>)
            }
            {
                props.shape === 'HSV' && (<>
                    <Quadrilateral {...props}
                        points={[
                            props.cylindricalToCartesian(rescaledH, props.cylinderRadius, props.cylinderHeight / 2),
                            props.cylindricalToCartesian(rescaledH, props.cylinderRadius, -props.cylinderHeight / 2),
                            props.cylindricalToCartesian(rescaledH, 0,-props.cylinderHeight / 2),
                            props.cylindricalToCartesian(rescaledH, 0, props.cylinderHeight / 2)
                        ]}
                    />
                    <group rotation={[Math.PI / 2, 0, 0]}>
                        <Cylinder   {...props}
                            radius={rescaledHsvS}
                            height={props.cylinderHeight}
                            side={THREE.DoubleSide}
                        />

                        <Disc  {...props}
                            position={[0, rescaledV, 0]}
                            radius={props.cylinderRadius}
                            side={THREE.DoubleSide}
                        />
                    </group>
                </>)
            }
        </>
    )
}

export default FocusPlane;