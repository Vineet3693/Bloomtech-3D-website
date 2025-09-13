
import React, { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function ParticleSystem() {
  const meshRef = useRef()
  const { mouse } = useThree()

  const particlesCount = 1000
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = Math.random() * 10
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [])

  const colors = useMemo(() => {
    const cols = new Float32Array(particlesCount * 3)
    const colorPalette = [
      new THREE.Color('#ffeaa7'),
      new THREE.Color('#fab1a0'),
      new THREE.Color('#e84393'),
      new THREE.Color('#a29bfe'),
      new THREE.Color('#fd79a8')
    ]
    
    for (let i = 0; i < particlesCount; i++) {
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      cols[i * 3] = color.r
      cols[i * 3 + 1] = color.g
      cols[i * 3 + 2] = color.b
    }
    return cols
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime
      const positions = meshRef.current.geometry.attributes.position.array

      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3
        
        // Floating animation
        positions[i3 + 1] += Math.sin(time + positions[i3]) * 0.002
        
        // Mouse interaction
        positions[i3] += mouse.x * 0.0001
        positions[i3 + 2] += mouse.y * 0.0001

        // Reset particles that fall below
        if (positions[i3 + 1] < -5) {
          positions[i3 + 1] = 10
        }
      }

      meshRef.current.geometry.attributes.position.needsUpdate = true
      meshRef.current.rotation.y = time * 0.05
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        transparent
        opacity={0.8}
        vertexColors
        blending={THREE.AdditiveBlending}
        sizeAttenuation={true}
      />
    </points>
  )
}

export default ParticleSystem
