
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Scene from './components/Scene'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import ContentOverlay from './components/ContentOverlay'
import CursorTracker from './components/CursorTracker'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <CursorTracker />
      <Navbar />
      <Canvas
        shadows
        camera={{ position: [0, 5, 10], fov: 60 }}
        style={{ background: 'linear-gradient(to bottom, #ffeaa7, #fab1a0, #e84393)' }}
      >
        <Suspense fallback={null}>
          <Scene />
          <EffectComposer>
            <Bloom 
              intensity={0.3}
              luminanceThreshold={0.9}
              luminanceSmoothing={0.025}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
      <ContentOverlay />
      <Suspense fallback={null}>
        <LoadingScreen />
      </Suspense>
    </div>
  )
}

export default App
