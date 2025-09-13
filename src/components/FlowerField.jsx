
import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'
import Flower from './Flower'

function FlowerField() {
  const groupRef = useRef()

  // Generate flower positions
  const flowerPositions = useMemo(() => {
    const positions = []
    const sections = [
      { center: [0, 0, 0], count: 3, label: 'hero' },
      { center: [-10, 0, -5], count: 2, label: 'about' },
      { center: [10, 0, -5], count: 6, label: 'services' },
      { center: [0, 0, -10], count: 3, label: 'news' },
      { center: [0, 0, 5], count: 2, label: 'careers' },
    ]

    sections.forEach((section) => {
      for (let i = 0; i < section.count; i++) {
        const angle = (i / section.count) * Math.PI * 2
        const radius = 2 + Math.random() * 3
        const x = section.center[0] + Math.cos(angle) * radius
        const z = section.center[2] + Math.sin(angle) * radius
        const y = section.center[1] + Math.random() * 0.5

        positions.push({
          position: [x, y, z],
          rotation: [0, Math.random() * Math.PI * 2, 0],
          scale: 0.8 + Math.random() * 0.4,
          color: new THREE.Color().setHSL(Math.random(), 0.7, 0.7),
          section: section.label
        })
      }
    })

    return positions
  }, [])

  return (
    <group ref={groupRef}>
      {flowerPositions.map((flower, index) => (
        <Float
          key={index}
          speed={1 + Math.random()}
          rotationIntensity={0.2}
          floatIntensity={0.3}
        >
          <Flower
            position={flower.position}
            rotation={flower.rotation}
            scale={flower.scale}
            color={flower.color}
            section={flower.section}
            index={index}
          />
        </Float>
      ))}
    </group>
  )
}

export default FlowerField
