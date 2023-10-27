import React from 'react';
import { Line } from '@react-three/drei';

//　与えられた2点を結ぶ直線の描画
// 　props.points = [x1, y1, z1, x2, y2, z2]
const StraightLine = (props) => {
    
        return (
            <>
                <Line
                    points={props.points}
                    color={props.color}
                    lineWidth={props.width}
                />
            </>
        )
    }

    export default StraightLine;

