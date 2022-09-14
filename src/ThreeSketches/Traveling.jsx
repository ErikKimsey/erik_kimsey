import React, { useEffect, useState, useMemo, useRef } from "react";
import { extend, Canvas, useFrame, useThree, useResource } from '@react-three/fiber';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import * as THREE from "three";
import { OrbitControls, PerspectiveCamera, Sparkles } from "@react-three/drei";

extend({ EffectComposer, RenderPass, UnrealBloomPass })

function Box(props) {
    let { position } = props;

    let [isHovering, setIsHovering] = useState(false);

    useEffect(() => {

    }, [isHovering]);

    return <mesh position={position}
        rotation={[2, 2, 2]}
        scale={isHovering ? 1.05 : 1}
        onPointerOver={() => setIsHovering(true)}
        onPointerOut={() => setIsHovering(false)}
    >
        <sphereGeometry attach="geometry" />
        <meshStandardMaterial attach="material" color="rgb(255,0,255)" transparent />
    </mesh>
}

export default function Traveling(props) {
    let { w, h } = props.dimens;

    return <Canvas style={{ width: w, height: h }}>
        <directionalLight color="#ffffff" intensity={2} position={[0, 0, -5]} />
        <PerspectiveCamera />
        <OrbitControls />
        <Sparkles size={2} amount={100} scale={20} />
        <Box position={new THREE.Vector3(0, -1, 4)} />
        {/* <ambientLight intensity={0.2} color="#fff" /> */}
    </Canvas>
}