import React, { useRef } from "react";

export default function Particle(props) {
  const particle = useRef();
  const color = 0x00ff00;
  const position = [5, 3, 0];
  // const title = 'test';
  // useFrame(() => {
  //   particle.current.rotation.x += 0.01;
  //   particle.current.rotation.y += 0.01;
  // });

  return (
    <mesh ref={particle} position={position}>
      <circleGeometry args={[0.1, 32]} />
      <meshBasicMaterial color={color} />
    </mesh>
  )
}
