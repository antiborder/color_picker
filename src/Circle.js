import React from 'react';
import { Line } from '@react-three/drei';

const Circle = (props) => {
    const points = getCirclePoints(props.radius);
    
    return (
        <Line
            points={points}
            color={props.color}
            lineWidth={2}
            position={props.position}
        />
    );
};

// Helper function to calculate circle points
const getCirclePoints = (radius) => {
    const segments = 64; // Number of segments for the circle
    const points = [];

    for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        const x = radius * Math.cos(theta);
        const y = radius * Math.sin(theta);

        points.push(x, y, 0); // Add coordinates in (x, y, z) order
    }

    return points
};

export default Circle;