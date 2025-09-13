
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999
          }}
        >
          {/* Logo Animation */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              fontSize: '64px',
              marginBottom: '30px'
            }}
          >
            🌸
          </motion.div>

          {/* Company Name */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '20px',
              textAlign: 'center'
            }}
          >
            Bloomtech
          </motion.h1>

          {/* Loading Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            style={{
              fontSize: '18px',
              color: 'white',
              opacity: 0.8,
              marginBottom: '40px'
            }}
          >
            Where Technology Blooms...
          </motion.p>

          {/* Progress Bar */}
          <div style={{
            width: '300px',
            height: '4px',
            background: 'rgba(255, 255, 255, 0.3)',
            borderRadius: '2px',
            overflow: 'hidden'
          }}>
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #fd79a8, #a29bfe)',
                borderRadius: '2px'
              }}
            />
          </div>

          {/* Progress Text */}
          <motion.p
            style={{
              fontSize: '14px',
              color: 'white',
              opacity: 0.7,
              marginTop: '15px'
            }}
          >
            {progress}% Complete
          </motion.p>

          {/* Floating Particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 50,
                opacity: 0
              }}
              animate={{
                y: -50,
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              style={{
                position: 'absolute',
                fontSize: '12px'
              }}
            >
              {['🌸', '🌺', '🌻', '🌷', '🌼'][Math.floor(Math.random() * 5)]}
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen
