/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/planet.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        scale={[0.3, 0.3, 0.3]}
        position={[0, 0.8, 0]}
        rotation={[0, Math.PI, 0]}
      >
        <mesh
          geometry={nodes.Sphere.geometry}
          material={nodes.Sphere.material}
          scale={[0.7, 0.7, 0.7]}
        />
        <mesh
          geometry={nodes.Circle.geometry}
          material={nodes.Circle.material}
          rotation={[0.1, 0, 0]}
        />
        <mesh
          geometry={nodes.Circle001.geometry}
          material={nodes.Circle001.material}
          rotation={[0.1, 0, 0]}
          scale={0.69}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/planet.glb");