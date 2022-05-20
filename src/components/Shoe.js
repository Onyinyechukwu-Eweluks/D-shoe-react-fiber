import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model({ ...props }) {
  const group = useRef();

  const gltf = useGLTF("/models/nike_air_max_90/scene.gltf");
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    group.current.rotation.x = a;
  });
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={20}
      rotation={[0, 1, 0]}
      position={[-0.5, 0, 0]}
    >
      <primitive object={gltf.scene} />
    </group>
  );
}

//useGLTF.preload('/shoe.gltf')
