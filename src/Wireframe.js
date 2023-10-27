import React from 'react'
import StraightLine from './StraightLine'
import Circle from './Circle'
import { systemColors } from './constants/systemColors'


const Wireframe = (props) => {
    const width = 1
    const wireframeColor = systemColors["W"]

    return (
        <>
            {(props.shape === 'RGB' || props.shape === 'CMYK') && (
                <>
                    <StraightLine
                        points={[
                            props.getRgbPosition(0, 0, 0),
                            props.getRgbPosition(255, 0, 0),
                            props.getRgbPosition(255, 255, 0),
                            props.getRgbPosition(0, 255, 0),
                            props.getRgbPosition(0, 255, 255),
                            props.getRgbPosition(255, 255, 255),
                            props.getRgbPosition(255, 0, 255),
                            props.getRgbPosition(0, 0, 255),
                            props.getRgbPosition(0, 0, 0),
                        ]}
                        color={wireframeColor}
                        width={width}
                    />
                    <StraightLine
                        points={[
                            props.getRgbPosition(0, 0, 0),
                            props.getRgbPosition(0, 255, 0),
                        ]}
                        color={wireframeColor}
                        width={width}
                    />
                    <StraightLine
                        points={[
                            props.getRgbPosition(0, 0, 255),
                            props.getRgbPosition(0, 255, 255),
                        ]}
                        color={wireframeColor}
                        width={width}
                    />
                    <StraightLine
                        points={[
                            props.getRgbPosition(255, 255, 255),
                            props.getRgbPosition(255, 255, 0),
                        ]}
                        color={wireframeColor}
                        width={width}
                    />
                                        <StraightLine
                        points={[
                            props.getRgbPosition(255, 0, 255),
                            props.getRgbPosition(255, 0, 0),
                        ]}
                        color={wireframeColor}
                        width={width}
                    />
                </>
            )}
            {(props.shape === 'HSV' || props.shape === 'HSL') && (
                <>
                        <Circle
                            radius={props.cylinderRadius}
                            position={[0, 0, props.cylinderHeight / 2]}
                            color={wireframeColor}
                            width={width}
                        />
                        <Circle
                            radius={props.cylinderRadius}
                            position={[0, 0, -props.cylinderHeight / 2]}
                            color={wireframeColor}
                            width={width}
                        />
                </>
            )}
        </>
    )
}
export default Wireframe;