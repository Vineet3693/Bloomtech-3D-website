import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function ContentOverlay() {
  const [activeSection, setActiveSection] = useState('hero')

  const sections = {
    hero: {
      title: "🌸 People Bloom, Technology Bloom, World Bloom",
      content: "As each engineer and employee grows (Bloom), technology evolves one after another, thereby growing the company and ultimately having a significant positive impact on the world."
    },
    about: {
      title: '🌟 Give shape to "thoughts" and bloom "flowers"',
      content: 'We value the "thoughts" that each person has and believe that by giving shape to those "thoughts", individuals, companies, and the world will shine even brighter.'
    },
    services: {
      title: '💼 Services centered on "IT" ✕ "HR"',
      content: 'Bloomtech supports engineers\' careers from various perspectives and matches them with companies that are having trouble hiring engineers.'
    }
  }

  return (
    <div style={{
      position: 'fixed',
      top: '120px',
      left: '50px',
      right: '50px',
      bottom: '50px',
      pointerEvents: 'none',
      zIndex: 500
    }}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          maxWidth: '500px',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(15px)',
          borderRadius: '20px',
          padding: '30px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          pointerEvents: 'auto'
        }}
      >
        <h1 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          marginBottom: '20px',
          background: 'linear-gradient(45deg, #fd79a8, #a29bfe)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          {sections.hero.title}
        </h1>
        <p style={{
          fontSize: '16px',
          lineHeight: '1.6',
          color: '#2d3436',
          opacity: 0.8
        }}>
          {sections.hero.content}
        </p>
      </motion.div>

      {/* Services Cards */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          maxWidth: '350px'
        }}
      >
        {[
          '🌸 Bloomtech Career',
          '🌺 Bloomtech Freelance', 
          '🌻 Bluetech SES',
          '🌷 Bloomtech RPO',
          '🌼 Bloomtech College',
          '🌹 HR Consulting'
        ].map((service, index) => (
          <motion.div
            key={service}
            whileHover={{ scale: 1.05, x: -10 }}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '15px',
              padding: '15px 20px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              cursor: 'pointer',
              pointerEvents: 'auto'
            }}
          >
            <p style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#2d3436'
            }}>
              {service}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Info */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '5%',
          right: '5%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '15px',
          padding: '20px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          pointerEvents: 'auto'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '10px',
            color: '#2d3436'
          }}>
            🚀 Would you like to work with us?
          </h3>
          <p style={{
            fontSize: '14px',
            color: '#2d3436',
            opacity: 0.8,
            marginBottom: '15px'
          }}>
            We welcome applications from those who have the desire to grow.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'linear-gradient(45deg, #fd79a8, #a29bfe)',
              border: 'none',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '25px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600'
            }}
          >
            Join Our Team
          </motion.button>
        </div>

        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '15px',
          padding: '20px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          pointerEvents: 'auto',
          maxWidth: '300px'
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: 'bold',
            marginBottom: '10px',
            color: '#2d3436'
          }}>
            📰 Latest News
          </h3>
          <div style={{ fontSize: '12px', color: '#2d3436', opacity: 0.7 }}>
            <p>• Career Strategy Event for Female IT Engineers</p>
            <p>• Talk Event: Work Style and Career Reality</p>
            <p>• Year-end and New Year Holiday Notice</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ContentOverlay
