import React from 'react'
import * as THREE from 'three'
import Cylinder from './Cylinder'
import Quadrilateral from './Quadrilateral'
import Disc from './Disc'


const FocusPlane = (props) => {

    const rSquareCorners = [
        props.getRgbPosition(props.focusR, 0, 0),
        props.getRgbPosition(props.focusR, 255, 0),
        props.getRgbPosition(props.focusR, 255, 255),
        props.getRgbPosition(props.focusR, 0, 255)
    ]

    const gSquareCorners = [
        props.getRgbPosition(0, props.focusG, 0),
        props.getRgbPosition(255, props.focusG, 0),
        props.getRgbPosition(255, props.focusG, 255),
        props.getRgbPosition(0, props.focusG, 255)
    ]

    const bSquareCorners = [
        props.getRgbPosition(0, 0, props.focusB),
        props.getRgbPosition(255, 0, props.focusB),
        props.getRgbPosition(255, 255, props.focusB),
        props.getRgbPosition(0, 255, props.focusB)
    ]

    const [rescaledH, rescaledS, rescaledL] = props.rescaleHsl(props.focusH, props.focusS, props.focusL)
    const rescaledHsvS = props.rescaleHsl(props.focusH, props.focusHsvS, props.focusV)[1]
    const rescaledV = props.rescaleHsl(props.focusH, props.focusHsvS, props.focusV)[2]


    return (
        <>
            {props.shape === 'RGB' && (<>
                {
                    props.rgbMainElement == 'R' &&
                    <Quadrilateral {...props}
                        points={rSquareCorners}
                    />
                }
                {
                    props.rgbMainElement == 'G' &&
                    <Quadrilateral {...props}
                        points={gSquareCorners}
                    />
                }
                {
                    props.rgbMainElement == 'B' &&
                    <Quadrilateral {...props}
                        points={bSquareCorners}
                    />
                }
            </>)
            }

            {props.shape === 'HSL' && (<>
                {
                    props.hslMainElement === 'H' &&
                    <Quadrilateral {...props}
                        points={[
                            props.cylindricalToCartesian(rescaledH, props.cylinderRadius, props.cylinderHeight / 2),
                            props.cylindricalToCartesian(rescaledH, props.cylinderRadius, -props.cylinderHeight / 2),
                            props.cylindricalToCartesian(rescaledH, 0, -props.cylinderHeight / 2),
                            props.cylindricalToCartesian(rescaledH, 0, props.cylinderHeight / 2)
                        ]}
                    />
                }
                <group rotation={[Math.PI / 2, 0, 0]}>
                    {props.hslMainElement === 'S' &&
                        <Cylinder   {...props}
                            radius={rescaledS}
                            height={props.cylinderHeight}
                            side={THREE.DoubleSide}
                        />
                    }{
                        props.hslMainElement === 'L' &&
                        <Disc  {...props}
                            position={[0, rescaledL, 0]}
                            radius={props.cylinderRadius}
                            side={THREE.DoubleSide}
                        />
                    }
                </group>
            </>)
            }

            {
                props.shape === 'HSV' && (<>
                    {
                        props.hsvMainElement === 'H' &&
                        <Quadrilateral {...props}
                            points={[
                                props.cylindricalToCartesian(rescaledH, props.cylinderRadius, props.cylinderHeight / 2),
                                props.cylindricalToCartesian(rescaledH, props.cylinderRadius, -props.cylinderHeight / 2),
                                props.cylindricalToCartesian(rescaledH, 0, -props.cylinderHeight / 2),
                                props.cylindricalToCartesian(rescaledH, 0, props.cylinderHeight / 2)
                            ]}
                        />}
                    <group rotation={[Math.PI / 2, 0, 0]}>
                        {
                            props.hsvMainElement === 'S' &&
                            <Cylinder   {...props}
                                radius={rescaledHsvS}
                                height={props.cylinderHeight}
                                side={THREE.DoubleSide}
                            />
                        }
                        {
                            props.hsvMainElement === 'V' &&
                            <Disc  {...props}
                                position={[0, rescaledV, 0]}
                                radius={props.cylinderRadius}
                                side={THREE.DoubleSide}
                            />
                        }
                    </group>
                </>)
            }
        </>
    )
}

export default FocusPlane;