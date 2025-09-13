
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Environment, Stars, Float } from '@react-three/drei'
import FlowerField from './FlowerField'
import ParticleSystem from './ParticleSystem'
import InteractiveLighting from './InteractiveLighting'

function Scene() {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <>
      {/* Environment */}
      <Environment preset="sunset" />
      <Stars radius={300} depth={60} count={1000} factor={7} />
      
      {/* Lighting */}
      <ambientLight intensity={0.4} color="#ffeaa7" />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1} 
        color="#fab1a0"
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <InteractiveLighting />

      {/* Main Scene Group */}
      <group ref={groupRef}>
        {/* Ground */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
          <planeGeometry args={[50, 50]} />
          <meshLambertMaterial color="#2d3436" transparent opacity={0.1} />
        </mesh>

        {/* Flower Field */}
        <FlowerField />
        
        {/* Floating Elements */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={[-8, 3, -5]}>
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshStandardMaterial color="#e84393" emissive="#e84393" emissiveIntensity={0.2} />
          </mesh>
        </Float>

        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
          <mesh position={[8, 4, -3]}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial color="#a29bfe" emissive="#a29bfe" emissiveIntensity={0.2} />
          </mesh>
        </Float>
      </group>

      {/* Particle Systems */}
      <ParticleSystem />
    </>
  )
}

export default Scene
