/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/card.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Plane_1.geometry} material={materials.gold} />
      <mesh geometry={nodes.Plane_2.geometry} material={materials.front} />
      <mesh geometry={nodes.Plane_3.geometry} material={materials.back} />
    </group>
  )
}

useGLTF.preload('/card.glb')
