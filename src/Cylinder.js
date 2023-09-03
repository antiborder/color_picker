import React from 'react';
import * as THREE from 'three';


const Cylinder = (props) => {
    // ジオメトリの作成
    const geometry = new THREE.CylinderGeometry(props.radius, props.radius, props.height, 32, 1, true);
    // 青いマテリアルの作成
    const material = new THREE.MeshBasicMaterial({
        color: "white",
        opacity: 0.4,
        transparent: true,
        side: props.side,
    });

    return (

        <mesh
            geometry={geometry}
            material={material}
            position={[0,0,0]}
        >
            <meshBasicMaterial attach="material"/>
        </mesh>
    );
};

export default Cylinder;