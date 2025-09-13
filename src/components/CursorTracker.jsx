
import React, { useEffect, useState } from 'react'

function CursorTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <>
      {/* Cursor Trail */}
      <div
        style={{
          position: 'fixed',
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${isClicking ? '#e84393' : '#fd79a8'}, transparent)`,
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'all 0.1s ease',
          transform: `scale(${isClicking ? 1.5 : 1})`,
          opacity: 0.8,
        }}
      />
      
      {/* Cursor Glow */}
      <div
        style={{
          position: 'fixed',
          left: mousePosition.x - 25,
          top: mousePosition.y - 25,
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: `radial-gradient(circle, transparent 20px, #a29bfe 25px, transparent 50px)`,
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: 0.3,
          transition: 'all 0.2s ease',
        }}
      />
    </>
  )
}

export default CursorTracker
