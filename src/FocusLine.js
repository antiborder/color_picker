import React from 'react'
import StraightLine from './StraightLine'
import Circle from './Circle'
import {systemColors} from './constants/systemColors'


const FocusLine = (props) => {

    const [rescaledH, rescaledS, rescaledL] = props.rescaleHsl(props.focusH, props.focusS, props.focusL)
    const rescaledHsvS = props.rescaleHsl(props.focusH, props.focusHsvS, props.focusV)[1]
    const rescaledV = props.rescaleHsl(props.focusH, props.focusHsvS, props.focusV)[2]
    const lineWidth = 3

    return (
        <>
            {props.shape === 'RGB' && (
                <>
                    {props.rgbMainElement !== 'R' && (
                        <StraightLine
                            points={[
                                props.getRgbPosition(0, props.focusG, props.focusB),
                                props.getRgbPosition(255, props.focusG, props.focusB)
                            ]}
                            color={
                                systemColors[
                                    props.rgbMainElement === 'G'?'B':'G'
                                ]
                            }
                            width={lineWidth}
                        />
                    )}

                    {props.rgbMainElement !== 'G' && (
                        <StraightLine
                            points={[
                                props.getRgbPosition(props.focusR, 0, props.focusB),
                                props.getRgbPosition(props.focusR, 255, props.focusB)
                            ]}
                            color={
                                systemColors[
                                    props.rgbMainElement === 'B'?'R':'B'
                                ]
                            }
                            width={lineWidth}
                        />
                    )}

                    {props.rgbMainElement !== 'B' && (
                        <StraightLine
                            points={[
                                props.getRgbPosition(props.focusR, props.focusG, 0),
                                props.getRgbPosition(props.focusR, props.focusG, 255)
                            ]}
                            color={
                                systemColors[
                                    props.rgbMainElement === 'R'?'G':'R'
                                ]
                            }
                            width={lineWidth}
                        />
                    )}

                </>
            )}
            {props.shape === 'CMYK' && (
                <>
                    {props.cmykMainElement !== 'C' && (
                        <StraightLine
                            points={[
                                props.getRgbPosition(0, props.focusG, props.focusB),
                                props.getRgbPosition(255, props.focusG, props.focusB)
                            ]}
                            color={
                                systemColors[
                                    props.cmykMainElement === 'M'?'Y':'M'
                                ]
                            }
                            width={lineWidth}
                        />
                    )}
                    {props.cmykMainElement !== 'M' && (
                        <StraightLine
                            points={[
                                props.getRgbPosition(props.focusR, 0, props.focusB),
                                props.getRgbPosition(props.focusR, 255, props.focusB)
                            ]}
                            color={
                                systemColors[
                                    props.cmykMainElement === 'Y'?'C':'Y'
                                ]
                            }
                            width={lineWidth}
                        />
                    )}
                    {props.cmykMainElement !== 'Y' && (
                        <StraightLine
                            points={[
                                props.getRgbPosition(props.focusR, props.focusG, 0),
                                props.getRgbPosition(props.focusR, props.focusG, 255)
                            ]}
                            color={
                                systemColors[
                                    props.cmykMainElement === 'C'?'M':'C'
                                ]
                            }
                            width={lineWidth}
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
                            color={systemColors["W"]}
                            lineWidth={lineWidth}
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
                            color={systemColors['K']}
                            width={lineWidth}
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
                            color={systemColors["DEEP_GRAY"]}
                            width={lineWidth}
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
                            color={systemColors["W"]}
                            lineWidth={lineWidth}
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
                            color={systemColors["K"]}
                            width={lineWidth}
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
                            color={systemColors["DEEP_GRAY"]}
                            width={lineWidth}
                        />
                    )}
                </>
            )}
        </>
    )
}
export default FocusLine;