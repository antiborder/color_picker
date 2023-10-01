import React from 'react';
import * as THREE from 'three';


const Cylinder = (props) => {
    // ジオメトリの作成
    const geometry = new THREE.CylinderGeometry(props.radius, props.radius, props.height, 32, 1, true);
    const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        opacity: 0.3,
        transparent: true,
        side: THREE.DoubleSide
    });

    return (
        <mesh
            geometry={geometry}
            material={material}
            position={[0,0,0]}
        >
        </mesh>
    );
};

export default Cylinder;