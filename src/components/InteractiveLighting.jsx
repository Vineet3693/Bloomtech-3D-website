
import React, { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'

function InteractiveLighting() {
  const lightRef = useRef()
  const { mouse, viewport } = useThree()

  useFrame(() => {
    if (lightRef.current) {
      // Follow mouse position
      lightRef.current.position.x = (mouse.x * viewport.width) / 2
      lightRef.current.position.z = (mouse.y * viewport.height) / 2
      
      // Pulsing intensity
      lightRef.current.intensity = 0.5 + Math.sin(Date.now() * 0.003) * 0.3
    }
  })

  return (
    <>
      <pointLight
        ref={lightRef}
        position={[0, 5, 0]}
        intensity={0.8}
        color="#fd79a8"
        distance={15}
      />
      <spotLight
        position={[mouse.x * 10, 8, mouse.y * 10]}
        angle={0.3}
        penumbra={0.2}
        intensity={0.5}
        color="#a29bfe"
        castShadow
      />
    </>
  )
}

export default InteractiveLighting
