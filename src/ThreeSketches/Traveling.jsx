import React, { useEffect, useState } from "react";
import { Canvas } from '@react-three/fiber'
import * as THREE from "three";

function Box() {
    return <mesh position={new THREE.Vector3(0, -1, 4)} rotation={[2, 2, 2]}>
        <meshStandardMaterial color="#ff00ff" />
        <boxBufferGeometry />
    </mesh>
}

export default function Traveling(props) {
    useEffect(() => {
        console.log("Traveling");
    }, []);


    return <Canvas style={{ background: "#f0f" }}>
        <Box />
        <ambientLight intensity={0.2} color="#fff" />
        <directionalLight color="#ffffff" intensity={2} position={[0, 0, 10]} />
    </Canvas>
}