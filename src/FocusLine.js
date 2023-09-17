import React from 'react'
import * as THREE from 'three'
import Cylinder from './Cylinder'
import Quadrilateral from './Quadrilateral'
import Disc from './Disc'
import StraightLine from './StraightLine'
import Circle from './Circle'
import convert from 'color-convert';


const FocusLine = (props) => {

    const [rescaledH, rescaledS, rescaledL] = props.rescaleHsl(props.focusH, props.focusS, props.focusL)
    const rescaledHsvS = props.rescaleHsl(props.focusH, props.focusHsvS, props.focusV)[1]
    const rescaledV = props.rescaleHsl(props.focusH, props.focusHsvS, props.focusV)[2]


    return (
        <>
            {props.shape === 'RGB' && (
                <>
                    {props.rgbMainElement !== 'R' && (
                        <StraightLine
                            points={[
                                props.rgbPosition(0, props.focusG, props.focusB),
                                props.rgbPosition(255, props.focusG, props.focusB)
                            ]}
                            color={'#FF0000'}
                        />
                    )}

                    {props.rgbMainElement !== 'G' && (
                        <StraightLine
                            points={[
                                props.rgbPosition(props.focusR, 0, props.focusB),
                                props.rgbPosition(props.focusR, 255, props.focusB)
                            ]}
                            color={'#00AA00'}
                        />
                    )}

                    {props.rgbMainElement !== 'B' && (
                        <StraightLine
                            points={[
                                props.rgbPosition(props.focusR, props.focusG, 0),
                                props.rgbPosition(props.focusR, props.focusG, 255)
                            ]}
                            color={'#0000FF'}
                        />
                    )}

                </>
            )}
            {props.shape === 'HSL' && (
                <>
                    {props.hslMainElement !== 'H' && (
                        <Circle
                            radius={rescaledS}
                            position={[0, 0, rescaledL]}
                            color={'#' + convert.hsl.hex([0, 0, props.focusL])}
                        />
                    )}

                    {props.hslMainElement !== 'S' && (
                        <StraightLine
                            points={[
                                props.cylindricalToCartesian(
                                    rescaledH,
                                    0,
                                    rescaledL
                                ),
                                props.cylindricalToCartesian(
                                    rescaledH,
                                    props.cylinderRadius,
                                    rescaledL
                                )
                            ]}
                            color={'#' + convert.hsl.hex([props.focusH, 100, 40])}
                        />
                    )}

                    {props.hslMainElement !== 'L' && (
                        <StraightLine
                            points={[
                                props.cylindricalToCartesian(
                                    rescaledH,
                                    rescaledS,
                                    -props.cylinderHeight / 2
                                ),
                                props.cylindricalToCartesian(
                                    rescaledH,
                                    rescaledS,
                                    props.cylinderHeight / 2
                                )

                            ]}
                            color={'#888888'}
                        />
                    )}
                </>
            )}
            {props.shape === 'HSV' && (
                <>
                    {props.hsvMainElement !== 'H' && (
                        <Circle
                            radius={rescaledHsvS}
                            position={[0, 0, rescaledV]}
                            color={'#' + convert.hsl.hex([0, 0, props.focusV])}
                        />
                    )}

                    {props.hsvMainElement !== 'S' && (
                        <StraightLine
                            points={[
                                props.cylindricalToCartesian(
                                    rescaledH,
                                    0,
                                    rescaledV
                                ),
                                props.cylindricalToCartesian(
                                    rescaledH,
                                    props.cylinderRadius,
                                    rescaledV
                                )
                            ]}
                            color={'#' + convert.hsl.hex([props.focusH, 100, 40])}
                        />
                    )}

                    {props.hsvMainElement !== 'V' && (
                        <StraightLine
                            points={[
                                props.cylindricalToCartesian(
                                    rescaledH,
                                    rescaledHsvS,
                                    -props.cylinderHeight / 2
                                ),
                                props.cylindricalToCartesian(
                                    rescaledH,
                                    rescaledHsvS,
                                    props.cylinderHeight / 2
                                )

                            ]}
                            color={'#888888'}
                        />
                    )}
                </>
            )}

        </>
    )
}
export default FocusLine;