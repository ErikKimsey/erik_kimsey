import React, { useEffect, useState } from "react";
import { Canvas } from '@react-three/fiber';
import * as THREE from "three";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";


function Box(props) {
    let { position } = props;
    return <mesh position={position} rotation={[2, 2, 2]}>
        <meshStandardMaterial color="#ff00ff" />
        <boxBufferGeometry />
    </mesh>
}

export default function Traveling(props) {

    let { w, h } = props.dimens;
    let [dim, setDim] = useState();

    console.log(props.dimens);

    useEffect(() => {
        setDim({ w: w, h: h });
    }, []);


    return <Canvas style={{ background: "#333", width: w, height: h }}>
        <PerspectiveCamera />
        <OrbitControls />
        <Box position={new THREE.Vector3(0, -1, 0)} />
        <Box position={new THREE.Vector3(0, 1, 0)} />
        <Box position={new THREE.Vector3(-5, 1, 3)} />
        <Box position={new THREE.Vector3(4, 1, -3)} />
        <ambientLight intensity={0.2} color="#fff" />
        <directionalLight color="#ffffff" intensity={2} position={[0, 0, 5]} />
    </Canvas>
}