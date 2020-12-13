import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from 'three';

export default function Box() {
  const cube = useRef();

  useFrame(() => {
    cube.current.rotation.x += 0.01;
    cube.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={cube}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={0x00ff00} />
    </mesh>
  )
}
