
import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Navbar() {
  const [activeItem, setActiveItem] = useState('home')

  const menuItems = [
    { id: 'home', label: '🏠 Home' },
    { id: 'about', label: '🌟 About Us' },
    { id: 'services', label: '💼 Services' },
    { id: 'news', label: '📰 News' },
    { id: 'careers', label: '🚀 Careers' },
    { id: 'contact', label: '📞 Contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '25px',
        padding: '10px 20px',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}
    >
      <div style={{
        display: 'flex',
        gap: '20px',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #fd79a8, #a29bfe)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginRight: '20px'
          }}
        >
          🌸 Bloomtech
        </motion.div>

        {/* Menu Items */}
        {menuItems.map(item => (
          <motion.button
            key={item.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveItem(item.id)}
            style={{
              background: activeItem === item.id 
                ? 'linear-gradient(45deg, #fd79a8, #a29bfe)' 
                : 'transparent',
              border: 'none',
              color: activeItem === item.id ? 'white' : '#2d3436',
              padding: '8px 16px',
              borderRadius: '15px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.3s ease'
            }}
          >
            {item.label}
          </motion.button>
        ))}
      </div>
    </motion.nav>
  )
}

export default Navbar
