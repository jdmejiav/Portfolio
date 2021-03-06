/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('../../../assets/moto.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0.49, 0.18]} scale={0.15}>
        <mesh geometry={nodes.Cube006.geometry} material={materials.Tanque} />
        <mesh geometry={nodes.Cube006_1.geometry} material={materials.luces} />
        <mesh geometry={nodes.Cube006_2.geometry} material={materials.Motor} />
        <mesh geometry={nodes.Cube006_3.geometry} material={materials['motor 2']} />
        <mesh geometry={nodes.Cube006_4.geometry} material={materials.Asiento} />
        <mesh geometry={nodes.Cube006_5.geometry} material={materials['Artefactos brillantes']} />
        <mesh geometry={nodes.Cube006_6.geometry} material={materials.Llantas} />
        <mesh geometry={nodes.Cube006_7.geometry} material={materials.Platillo} />
        <mesh geometry={nodes.Cube006_8.geometry} material={materials.Volante} />
        <mesh geometry={nodes.Cube006_9.geometry} material={materials.Mirror} />
        <mesh geometry={nodes.Cube006_10.geometry} material={materials.Cables} />
        <mesh geometry={nodes.Cube006_11.geometry} material={materials.Cadena} />
        <mesh geometry={nodes.Cube006_12.geometry} material={materials.Gato} />
        <mesh geometry={nodes.Cube006_13.geometry} material={materials.Tornillos} />
      </group>
    </group>
  )
}

useGLTF.preload('../../../assets/moto.glb')
