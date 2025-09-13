
import React, { useRef, useState, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { gsap } from 'gsap'
import * as THREE from 'three'

function Flower({ position, rotation, scale, color, section, index }) {
  const meshRef = useRef()
  const petalRefs = useRef([])
  const [isHovered, setIsHovered] = useState(false)
  const [isBloomAnimating, setIsBloomAnimating] = useState(false)
  const { mouse } = useThree()

  // Petal count and arrangement
  const petalCount = 8
  const petals = Array.from({ length: petalCount })

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle swaying animation
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime + index) * 0.1
      
      // React to mouse position
      const mouseInfluence = mouse.x * 0.02 + mouse.y * 0.02
      meshRef.current.rotation.y = rotation[1] + mouseInfluence
      
      // Color pulsing
      if (petalRefs.current[0]) {
        const intensity = 0.1 + Math.sin(state.clock.elapsedTime * 2 + index) * 0.1
        petalRefs.current.forEach(petal => {
          if (petal && petal.material) {
            petal.material.emissiveIntensity = intensity
          }
        })
      }
    }
  })

  const handlePointerEnter = () => {
    setIsHovered(true)
    bloomAnimation()
  }

  const handlePointerLeave = () => {
    setIsHovered(false)
  }

  const bloomAnimation = () => {
    if (isBloomAnimating) return
    setIsBloomAnimating(true)

    petalRefs.current.forEach((petal, i) => {
      if (petal) {
        gsap.to(petal.scale, {
          x: scale * 1.3,
          y: scale * 1.3,
          z: scale * 1.3,
          duration: 0.3,
          ease: "back.out(1.7)",
          delay: i * 0.05
        })

        gsap.to(petal.rotation, {
          z: petal.rotation.z + 0.2,
          duration: 0.3,
          delay: i * 0.05
        })

        // Return to normal
        gsap.to(petal.scale, {
          x: scale,
          y: scale,
          z: scale,
          duration: 0.4,
          delay: 0.5 + i * 0.05,
          ease: "elastic.out(1, 0.3)",
          onComplete: () => {
            if (i === petalRefs.current.length - 1) {
              setIsBloomAnimating(false)
            }
          }
        })
      }
    })
  }

  return (
    <group
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={scale}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      {/* Flower Center */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial 
          color="#ffeaa7" 
          emissive="#ffeaa7" 
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Flower Petals */}
      {petals.map((_, i) => {
        const angle = (i / petalCount) * Math.PI * 2
        const x = Math.cos(angle) * 0.3
        const z = Math.sin(angle) * 0.3

        return (
          <mesh
            key={i}
            ref={el => petalRefs.current[i] = el}
            position={[x, 0, z]}
            rotation={[0, angle, 0]}
          >
            <ellipseGeometry args={[0.15, 0.25, 8]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.1}
              transparent
              opacity={0.9}
              side={THREE.DoubleSide}
            />
          </mesh>
        )
      })}

      {/* Stem */}
      <mesh position={[0, -0.5, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.03, 1, 8]} />
        <meshStandardMaterial color="#27ae60" />
      </mesh>

      {/* Leaves */}
      <mesh position={[0.1, -0.3, 0]} rotation={[0, 0, -0.3]}>
        <ellipseGeometry args={[0.08, 0.15, 6]} />
        
<meshStandardMaterial 
          color="#27ae60" 
          side={THREE.DoubleSide}
          transparent
          opacity={0.8}
        />
      </mesh>

      <mesh position={[-0.1, -0.4, 0]} rotation={[0, 0, 0.3]}>
        <ellipseGeometry args={[0.06, 0.12, 6]} />
        <meshStandardMaterial 
          color="#2ecc71" 
          side={THREE.DoubleSide}
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  )
}

export default Flower
